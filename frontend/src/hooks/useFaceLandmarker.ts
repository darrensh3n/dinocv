import { useEffect, useRef, useState, useCallback } from 'react';
import { FaceLandmarker, FilesetResolver, FaceLandmarkerResult } from '@mediapipe/tasks-vision';

export interface FaceDetectionState {
  isTongueOut: boolean;
  isReady: boolean;
  error: string | null;
  cameraStarted: boolean;
}

export const useFaceLandmarker = () => {
  const [detectionState, setDetectionState] = useState<FaceDetectionState>({
    isTongueOut: false,
    isReady: false,
    error: null,
    cameraStarted: false,
  });
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const faceLandmarkerRef = useRef<FaceLandmarker | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastVideoTimeRef = useRef<number>(-1);

  // Initialize MediaPipe Face Landmarker (but don't start camera yet)
  useEffect(() => {
    let mounted = true;

    const initializeFaceLandmarker = async () => {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
        );
        
        const faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
            delegate: 'GPU',
          },
          runningMode: 'VIDEO',
          numFaces: 1,
          outputFaceBlendshapes: true,
          outputFacialTransformationMatrixes: false,
        });

        if (mounted) {
          faceLandmarkerRef.current = faceLandmarker;
          setDetectionState(prev => ({ ...prev, isReady: true }));
        }
      } catch (err) {
        console.error('Error initializing Face Landmarker:', err);
        if (mounted) {
          setDetectionState(prev => ({
            ...prev,
            error: 'Failed to initialize face detection',
            isReady: false,
          }));
        }
      }
    };

    initializeFaceLandmarker();

    return () => {
      mounted = false;
      stopWebcam();
      if (faceLandmarkerRef.current) {
        faceLandmarkerRef.current.close();
      }
    };
  }, []);

  const detectFace = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) {
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const detect = () => {
      // Check if video is ready and playing
      if (!video.videoWidth || !video.videoHeight || video.paused || video.ended) {
        animationFrameRef.current = requestAnimationFrame(detect);
        return;
      }

      // Set canvas size to match video on first frame
      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        console.log(`Canvas size set to ${canvas.width}x${canvas.height}`);
      }

      // Always draw the video frame first
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      try {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      } catch (err) {
        console.error('Error drawing video to canvas:', err);
      }
      
      ctx.restore();

      // Only run face detection if MediaPipe is ready and video time has changed
      if (faceLandmarkerRef.current && video.currentTime !== lastVideoTimeRef.current) {
        lastVideoTimeRef.current = video.currentTime;
        
        try {
          const results = faceLandmarkerRef.current.detectForVideo(video, performance.now());

          if (results.faceLandmarks && results.faceLandmarks.length > 0) {
            const landmarks = results.faceLandmarks[0];
            
            // Draw face landmarks
            drawLandmarks(ctx, landmarks, canvas.width, canvas.height);
            
            // Detect tongue out by measuring mouth opening
            const isTongueOut = detectTongueOut(landmarks);
            
            setDetectionState(prev => ({
              ...prev,
              isTongueOut,
            }));
          } else {
            setDetectionState(prev => ({
              ...prev,
              isTongueOut: false,
            }));
          }
        } catch (err) {
          console.error('Face detection error:', err);
        }
      }

      animationFrameRef.current = requestAnimationFrame(detect);
    };

    detect();
  }, []);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
        audio: false,
      });

      if (videoRef.current && canvasRef.current) {
        videoRef.current.srcObject = stream;
        
        const onLoadedData = async () => {
          try {
            await videoRef.current?.play();
            console.log('Video playing, starting detection...');
            setDetectionState(prev => ({ ...prev, cameraStarted: true }));
            detectFace();
          } catch (playErr) {
            console.error('Error playing video:', playErr);
          }
        };
        
        videoRef.current.addEventListener('loadeddata', onLoadedData, { once: true });
      }
    } catch (err) {
      console.error('Error accessing webcam:', err);
      setDetectionState(prev => ({
        ...prev,
        error: 'Failed to access webcam. Please allow camera permissions.',
        cameraStarted: false,
      }));
    }
  }, [detectFace]);

  const stopWebcam = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const drawLandmarks = (
    ctx: CanvasRenderingContext2D,
    landmarks: any[],
    width: number,
    height: number
  ) => {
    // Draw mouth landmarks in red
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;

    // Mouth outer contour indices
    const mouthIndices = [61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291, 308, 324, 318, 402, 317, 14, 87, 178, 88, 95];
    
    // Draw mouth contour
    ctx.beginPath();
    mouthIndices.forEach((idx, i) => {
      const landmark = landmarks[idx];
      const x = landmark.x * width;
      const y = landmark.y * height;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.stroke();

    // Draw key points for upper and lower lip
    const upperLipIdx = 13;
    const lowerLipIdx = 14;
    
    [upperLipIdx, lowerLipIdx].forEach(idx => {
      const landmark = landmarks[idx];
      ctx.beginPath();
      ctx.arc(landmark.x * width, landmark.y * height, 5, 0, 2 * Math.PI);
      ctx.fill();
    });
  };

  const detectTongueOut = (landmarks: any[]): boolean => {
    // Use upper lip (landmark 13) and lower lip (landmark 14)
    const upperLip = landmarks[13];
    const lowerLip = landmarks[14];
    
    // Calculate vertical distance between upper and lower lip
    const mouthOpenDistance = Math.abs(lowerLip.y - upperLip.y);
    
    // Also check mouth width for better detection
    const leftMouth = landmarks[61];
    const rightMouth = landmarks[291];
    const mouthWidth = Math.abs(rightMouth.x - leftMouth.x);
    
    // Normalize by mouth width to account for different face sizes
    const normalizedDistance = mouthOpenDistance / mouthWidth;
    
    // Lower threshold for easier detection
    const threshold = 0.3;
    
    // Debug logging
    if (normalizedDistance > 0.2) {
      console.log(`Mouth opening: ${normalizedDistance.toFixed(3)}, threshold: ${threshold}, detected: ${normalizedDistance > threshold}`);
    }
    
    return normalizedDistance > threshold;
  };

  return {
    videoRef,
    canvasRef,
    detectionState,
    startCamera,
  };
};
