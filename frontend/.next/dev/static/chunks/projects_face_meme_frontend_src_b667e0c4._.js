(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/face_meme/frontend/src/hooks/useFaceLandmarker.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFaceLandmarker",
    ()=>useFaceLandmarker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/face_meme/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/face_meme/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useFaceLandmarker = ()=>{
    _s();
    const [detectionState, setDetectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isTongueOut: false,
        isReady: false,
        error: null,
        cameraStarted: false
    });
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const faceLandmarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastVideoTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    // Initialize MediaPipe Face Landmarker (but don't start camera yet)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFaceLandmarker.useEffect": ()=>{
            let mounted = true;
            const initializeFaceLandmarker = {
                "useFaceLandmarker.useEffect.initializeFaceLandmarker": async ()=>{
                    try {
                        const vision = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilesetResolver"].forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm');
                        const faceLandmarker = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarker"].createFromOptions(vision, {
                            baseOptions: {
                                modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
                                delegate: 'GPU'
                            },
                            runningMode: 'VIDEO',
                            numFaces: 1,
                            outputFaceBlendshapes: true,
                            outputFacialTransformationMatrixes: false
                        });
                        if (mounted) {
                            faceLandmarkerRef.current = faceLandmarker;
                            setDetectionState({
                                "useFaceLandmarker.useEffect.initializeFaceLandmarker": (prev)=>({
                                        ...prev,
                                        isReady: true
                                    })
                            }["useFaceLandmarker.useEffect.initializeFaceLandmarker"]);
                        }
                    } catch (err) {
                        console.error('Error initializing Face Landmarker:', err);
                        if (mounted) {
                            setDetectionState({
                                "useFaceLandmarker.useEffect.initializeFaceLandmarker": (prev)=>({
                                        ...prev,
                                        error: 'Failed to initialize face detection',
                                        isReady: false
                                    })
                            }["useFaceLandmarker.useEffect.initializeFaceLandmarker"]);
                        }
                    }
                }
            }["useFaceLandmarker.useEffect.initializeFaceLandmarker"];
            initializeFaceLandmarker();
            return ({
                "useFaceLandmarker.useEffect": ()=>{
                    mounted = false;
                    stopWebcam();
                    if (faceLandmarkerRef.current) {
                        faceLandmarkerRef.current.close();
                    }
                }
            })["useFaceLandmarker.useEffect"];
        }
    }["useFaceLandmarker.useEffect"], []);
    const detectFace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFaceLandmarker.useCallback[detectFace]": ()=>{
            if (!videoRef.current || !canvasRef.current) {
                return;
            }
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const detect = {
                "useFaceLandmarker.useCallback[detectFace].detect": ()=>{
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
                                setDetectionState({
                                    "useFaceLandmarker.useCallback[detectFace].detect": (prev)=>({
                                            ...prev,
                                            isTongueOut
                                        })
                                }["useFaceLandmarker.useCallback[detectFace].detect"]);
                            } else {
                                setDetectionState({
                                    "useFaceLandmarker.useCallback[detectFace].detect": (prev)=>({
                                            ...prev,
                                            isTongueOut: false
                                        })
                                }["useFaceLandmarker.useCallback[detectFace].detect"]);
                            }
                        } catch (err) {
                            console.error('Face detection error:', err);
                        }
                    }
                    animationFrameRef.current = requestAnimationFrame(detect);
                }
            }["useFaceLandmarker.useCallback[detectFace].detect"];
            detect();
        }
    }["useFaceLandmarker.useCallback[detectFace]"], []);
    const startCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFaceLandmarker.useCallback[startCamera]": async ()=>{
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: 640,
                        height: 480
                    },
                    audio: false
                });
                if (videoRef.current && canvasRef.current) {
                    videoRef.current.srcObject = stream;
                    const onLoadedData = {
                        "useFaceLandmarker.useCallback[startCamera].onLoadedData": async ()=>{
                            try {
                                await videoRef.current?.play();
                                console.log('Video playing, starting detection...');
                                setDetectionState({
                                    "useFaceLandmarker.useCallback[startCamera].onLoadedData": (prev)=>({
                                            ...prev,
                                            cameraStarted: true
                                        })
                                }["useFaceLandmarker.useCallback[startCamera].onLoadedData"]);
                                detectFace();
                            } catch (playErr) {
                                console.error('Error playing video:', playErr);
                            }
                        }
                    }["useFaceLandmarker.useCallback[startCamera].onLoadedData"];
                    videoRef.current.addEventListener('loadeddata', onLoadedData, {
                        once: true
                    });
                }
            } catch (err) {
                console.error('Error accessing webcam:', err);
                setDetectionState({
                    "useFaceLandmarker.useCallback[startCamera]": (prev)=>({
                            ...prev,
                            error: 'Failed to access webcam. Please allow camera permissions.',
                            cameraStarted: false
                        })
                }["useFaceLandmarker.useCallback[startCamera]"]);
            }
        }
    }["useFaceLandmarker.useCallback[startCamera]"], [
        detectFace
    ]);
    const stopWebcam = ()=>{
        if (videoRef.current?.srcObject) {
            const stream = videoRef.current.srcObject;
            stream.getTracks().forEach((track)=>track.stop());
        }
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    };
    const drawLandmarks = (ctx, landmarks, width, height)=>{
        // Draw mouth landmarks in red
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        // Mouth outer contour indices
        const mouthIndices = [
            61,
            146,
            91,
            181,
            84,
            17,
            314,
            405,
            321,
            375,
            291,
            308,
            324,
            318,
            402,
            317,
            14,
            87,
            178,
            88,
            95
        ];
        // Draw mouth contour
        ctx.beginPath();
        mouthIndices.forEach((idx, i)=>{
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
        [
            upperLipIdx,
            lowerLipIdx
        ].forEach((idx)=>{
            const landmark = landmarks[idx];
            ctx.beginPath();
            ctx.arc(landmark.x * width, landmark.y * height, 5, 0, 2 * Math.PI);
            ctx.fill();
        });
    };
    const detectTongueOut = (landmarks)=>{
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
        startCamera
    };
};
_s(useFaceLandmarker, "sykf8UHaYfwRLJ9RhnV23/p3ziY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/face_meme/frontend/src/components/DinoGame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DinoGame",
    ()=>DinoGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/face_meme/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/face_meme/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const DinoGame = ({ shouldJump })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [highScore, setHighScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Use ref to track current shouldJump value (avoid closure issues)
    const shouldJumpRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(shouldJump);
    // Update ref whenever prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DinoGame.useEffect": ()=>{
            shouldJumpRef.current = shouldJump;
        }
    }["DinoGame.useEffect"], [
        shouldJump
    ]);
    // Game state refs
    const gameStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        dino: {
            x: 50,
            y: 0,
            width: 44,
            height: 47,
            velocityY: 0,
            isJumping: false
        },
        obstacles: [],
        groundY: 0,
        gameSpeed: 5,
        score: 0,
        frameCount: 0,
        lastJumpState: false
    });
    const GRAVITY = -0.6;
    const JUMP_STRENGTH = 12;
    const GROUND_HEIGHT = 150;
    const OBSTACLE_SPAWN_RATE = 90;
    const restart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DinoGame.useCallback[restart]": ()=>{
            const state = gameStateRef.current;
            state.dino.y = 0;
            state.dino.velocityY = 0;
            state.dino.isJumping = false;
            state.obstacles = [];
            state.gameSpeed = 5;
            state.score = 0;
            state.frameCount = 0;
            state.lastJumpState = false;
            setScore(0);
            setGameOver(false);
            setGameStarted(true);
        }
    }["DinoGame.useCallback[restart]"], []);
    const startGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DinoGame.useCallback[startGame]": ()=>{
            restart();
        }
    }["DinoGame.useCallback[startGame]"], [
        restart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DinoGame.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const state = gameStateRef.current;
            state.groundY = canvas.height - GROUND_HEIGHT;
            let animationFrameId;
            const drawDino = {
                "DinoGame.useEffect.drawDino": ()=>{
                    const dino = state.dino;
                    const x = dino.x;
                    const y = state.groundY - dino.y - dino.height;
                    // Determine leg position based on frame count for running animation
                    const legFrame = Math.floor(state.frameCount / 10) % 2;
                    ctx.fillStyle = '#535353';
                    // Tail
                    ctx.fillRect(x, y + 25, 4, 4);
                    ctx.fillRect(x + 4, y + 21, 4, 4);
                    ctx.fillRect(x + 8, y + 21, 4, 4);
                    ctx.fillRect(x + 12, y + 25, 4, 4);
                    // Body
                    ctx.fillRect(x + 12, y + 25, 16, 16);
                    // Neck
                    ctx.fillRect(x + 24, y + 17, 4, 8);
                    // Head
                    ctx.fillRect(x + 24, y + 9, 4, 8);
                    ctx.fillRect(x + 28, y + 9, 12, 12);
                    // Eye
                    ctx.fillStyle = '#fff';
                    ctx.fillRect(x + 32, y + 13, 4, 4);
                    ctx.fillStyle = '#535353';
                    // Mouth
                    ctx.fillRect(x + 40, y + 13, 4, 4);
                    ctx.fillRect(x + 40, y + 17, 4, 4);
                    // Arms (tiny T-Rex arms)
                    ctx.fillRect(x + 24, y + 25, 4, 8);
                    // Legs - animate when not jumping
                    if (dino.y === 0 && gameStarted) {
                        // Running animation
                        if (legFrame === 0) {
                            // Left leg forward
                            ctx.fillRect(x + 12, y + 41, 4, 6);
                            // Right leg back
                            ctx.fillRect(x + 20, y + 41, 4, 6);
                        } else {
                            // Right leg forward
                            ctx.fillRect(x + 20, y + 41, 4, 6);
                            // Left leg back
                            ctx.fillRect(x + 12, y + 41, 4, 6);
                        }
                    } else {
                        // Both legs together when jumping
                        ctx.fillRect(x + 12, y + 41, 4, 6);
                        ctx.fillRect(x + 20, y + 41, 4, 6);
                    }
                }
            }["DinoGame.useEffect.drawDino"];
            const drawObstacle = {
                "DinoGame.useEffect.drawObstacle": (obstacle)=>{
                    const y = state.groundY - obstacle.height;
                    // Draw cactus
                    ctx.fillStyle = '#535353';
                    // Main body
                    const segments = Math.floor(obstacle.height / 12);
                    for(let i = 0; i < segments; i++){
                        ctx.fillRect(obstacle.x + 4, y + i * 12, 12, 12);
                    }
                    // Arms
                    if (obstacle.height > 40) {
                        ctx.fillRect(obstacle.x, y + 12, 8, 8);
                        ctx.fillRect(obstacle.x + 16, y + 18, 8, 8);
                    }
                }
            }["DinoGame.useEffect.drawObstacle"];
            const drawGround = {
                "DinoGame.useEffect.drawGround": ()=>{
                    ctx.strokeStyle = '#535353';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(0, state.groundY);
                    ctx.lineTo(canvas.width, state.groundY);
                    ctx.stroke();
                    // Draw ground dots (moving with game speed)
                    if (gameStarted && !gameOver) {
                        for(let i = 0; i < canvas.width; i += 40){
                            const offset = state.frameCount * state.gameSpeed % 40;
                            ctx.fillStyle = '#535353';
                            ctx.fillRect(i - offset, state.groundY + 4, 4, 2);
                        }
                    }
                }
            }["DinoGame.useEffect.drawGround"];
            const drawClouds = {
                "DinoGame.useEffect.drawClouds": ()=>{
                    // Simple cloud decoration
                    ctx.fillStyle = '#ddd';
                    const cloudOffset = state.frameCount * 2 % (canvas.width + 100);
                    ctx.fillRect(canvas.width - cloudOffset, 50, 20, 8);
                    ctx.fillRect(canvas.width - cloudOffset + 8, 46, 12, 8);
                    ctx.fillRect(canvas.width - cloudOffset + 16, 50, 16, 8);
                }
            }["DinoGame.useEffect.drawClouds"];
            const drawScore = {
                "DinoGame.useEffect.drawScore": ()=>{
                    ctx.fillStyle = '#535353';
                    ctx.font = '20px "Courier New", monospace';
                    ctx.textAlign = 'right';
                    ctx.fillText(`HI ${highScore.toString().padStart(5, '0')} ${state.score.toString().padStart(5, '0')}`, canvas.width - 20, 30);
                }
            }["DinoGame.useEffect.drawScore"];
            const drawStartScreen = {
                "DinoGame.useEffect.drawStartScreen": ()=>{
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                    ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 - 80, 300, 120);
                    ctx.strokeStyle = '#000';
                    ctx.lineWidth = 3;
                    ctx.strokeRect(canvas.width / 2 - 150, canvas.height / 2 - 80, 300, 120);
                    ctx.fillStyle = '#000';
                    ctx.font = '24px "Courier New", monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText('DinoCV', canvas.width / 2, canvas.height / 2 - 35);
                    // Draw button
                    const buttonWidth = 180;
                    const buttonHeight = 50;
                    const buttonX = canvas.width / 2 - buttonWidth / 2;
                    const buttonY = canvas.height / 2 - 10;
                    ctx.fillStyle = '#000';
                    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
                    ctx.fillStyle = '#fff';
                    ctx.font = '20px "Courier New", monospace';
                    ctx.fillText('START GAME', canvas.width / 2, buttonY + 32);
                }
            }["DinoGame.useEffect.drawStartScreen"];
            const drawGameOver = {
                "DinoGame.useEffect.drawGameOver": ()=>{
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                    ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 - 100, 300, 160);
                    ctx.strokeStyle = '#000';
                    ctx.lineWidth = 3;
                    ctx.strokeRect(canvas.width / 2 - 150, canvas.height / 2 - 100, 300, 160);
                    ctx.fillStyle = '#000';
                    ctx.font = '30px "Courier New", monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText('G A M E  O V E R', canvas.width / 2, canvas.height / 2 - 50);
                    ctx.font = '18px "Courier New", monospace';
                    ctx.fillText(`Score: ${state.score}`, canvas.width / 2, canvas.height / 2 - 15);
                    // Draw restart button
                    const buttonWidth = 150;
                    const buttonHeight = 45;
                    const buttonX = canvas.width / 2 - buttonWidth / 2;
                    const buttonY = canvas.height / 2 + 10;
                    ctx.fillStyle = '#000';
                    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
                    ctx.fillStyle = '#fff';
                    ctx.font = '18px "Courier New", monospace';
                    ctx.fillText('RESTART', canvas.width / 2, buttonY + 28);
                }
            }["DinoGame.useEffect.drawGameOver"];
            const checkCollision = {
                "DinoGame.useEffect.checkCollision": (obstacle)=>{
                    const dino = state.dino;
                    const dinoX = dino.x;
                    const dinoY = state.groundY - dino.y - dino.height;
                    const dinoWidth = dino.width;
                    const dinoHeight = dino.height;
                    const obstacleY = state.groundY - obstacle.height;
                    // More forgiving collision with tolerance
                    const tolerance = 8;
                    return dinoX + tolerance < obstacle.x + obstacle.width && dinoX + dinoWidth - tolerance > obstacle.x && dinoY + tolerance < obstacleY + obstacle.height && dinoY + dinoHeight - tolerance > obstacleY;
                }
            }["DinoGame.useEffect.checkCollision"];
            const jump = {
                "DinoGame.useEffect.jump": ()=>{
                    // Only allow jump if dino is on the ground
                    console.log('Jump function called:', {
                        dinoY: state.dino.y,
                        isJumping: state.dino.isJumping,
                        gameStarted,
                        gameOver,
                        canJump: state.dino.y === 0 && !state.dino.isJumping && gameStarted && !gameOver
                    });
                    if (state.dino.y === 0 && !state.dino.isJumping && gameStarted && !gameOver) {
                        console.log('JUMPING NOW!');
                        state.dino.velocityY = JUMP_STRENGTH;
                        state.dino.isJumping = true;
                    }
                }
            }["DinoGame.useEffect.jump"];
            const update = {
                "DinoGame.useEffect.update": ()=>{
                    if (gameOver || !gameStarted) {
                        return;
                    }
                    state.frameCount++;
                    // Handle jump input from tongue detection - only trigger on rising edge
                    const currentShouldJump = shouldJumpRef.current;
                    if (currentShouldJump && !state.lastJumpState) {
                        console.log('Jump triggered by tongue detection! shouldJump:', currentShouldJump);
                        jump();
                    }
                    state.lastJumpState = currentShouldJump;
                    // Update dino physics - only apply gravity if not on ground
                    if (state.dino.isJumping) {
                        state.dino.velocityY += GRAVITY;
                        state.dino.y += state.dino.velocityY;
                        // Ground collision
                        if (state.dino.y <= 0) {
                            state.dino.y = 0;
                            state.dino.velocityY = 0;
                            state.dino.isJumping = false;
                        }
                    } else {
                        // Ensure dino stays on ground when not jumping
                        state.dino.y = 0;
                        state.dino.velocityY = 0;
                    }
                    // Spawn obstacles
                    if (state.frameCount % OBSTACLE_SPAWN_RATE === 0) {
                        const height = Math.random() > 0.5 ? 50 : 35;
                        state.obstacles.push({
                            x: canvas.width,
                            width: 20,
                            height: height
                        });
                    }
                    // Update obstacles
                    state.obstacles = state.obstacles.filter({
                        "DinoGame.useEffect.update": (obstacle)=>{
                            obstacle.x -= state.gameSpeed;
                            // Check collision
                            if (checkCollision(obstacle)) {
                                setGameOver(true);
                                if (state.score > highScore) {
                                    setHighScore(state.score);
                                }
                                return true;
                            }
                            // Remove off-screen obstacles and increment score
                            if (obstacle.x + obstacle.width < 0) {
                                state.score++;
                                setScore(state.score);
                                return false;
                            }
                            return true;
                        }
                    }["DinoGame.useEffect.update"]);
                    // Increase game speed gradually
                    if (state.frameCount % 200 === 0 && state.gameSpeed < 12) {
                        state.gameSpeed += 0.5;
                    }
                }
            }["DinoGame.useEffect.update"];
            const render = {
                "DinoGame.useEffect.render": ()=>{
                    // Clear canvas
                    ctx.fillStyle = '#f7f7f7';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // Draw game elements
                    drawClouds();
                    drawGround();
                    drawDino();
                    state.obstacles.forEach(drawObstacle);
                    if (gameStarted) {
                        drawScore();
                    }
                    if (!gameStarted) {
                        drawStartScreen();
                    } else if (gameOver) {
                        drawGameOver();
                    }
                    // Update game state
                    update();
                    // Continue animation loop
                    animationFrameId = requestAnimationFrame(render);
                }
            }["DinoGame.useEffect.render"];
            // Handle keyboard input (spacebar for testing)
            const handleKeyDown = {
                "DinoGame.useEffect.handleKeyDown": (e)=>{
                    if (e.code === 'Space') {
                        e.preventDefault();
                        if (!gameStarted) {
                            startGame();
                        } else if (gameOver) {
                            restart();
                        } else {
                            jump();
                        }
                    }
                }
            }["DinoGame.useEffect.handleKeyDown"];
            // Handle canvas click for start/restart
            const handleCanvasClick = {
                "DinoGame.useEffect.handleCanvasClick": (e)=>{
                    const rect = canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    if (!gameStarted) {
                        // Check if click is on start button
                        const buttonWidth = 180;
                        const buttonHeight = 50;
                        const buttonX = canvas.width / 2 - buttonWidth / 2;
                        const buttonY = canvas.height / 2 - 10;
                        if (x >= buttonX && x <= buttonX + buttonWidth && y >= buttonY && y <= buttonY + buttonHeight) {
                            startGame();
                        }
                    } else if (gameOver) {
                        // Check if click is on restart button
                        const buttonWidth = 150;
                        const buttonHeight = 45;
                        const buttonX = canvas.width / 2 - buttonWidth / 2;
                        const buttonY = canvas.height / 2 + 10;
                        if (x >= buttonX && x <= buttonX + buttonWidth && y >= buttonY && y <= buttonY + buttonHeight) {
                            restart();
                        }
                    }
                }
            }["DinoGame.useEffect.handleCanvasClick"];
            window.addEventListener('keydown', handleKeyDown);
            canvas.addEventListener('click', handleCanvasClick);
            // Start game loop
            render();
            return ({
                "DinoGame.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                    canvas.removeEventListener('click', handleCanvasClick);
                    cancelAnimationFrame(animationFrameId);
                }
            })["DinoGame.useEffect"];
        }
    }["DinoGame.useEffect"], [
        gameOver,
        gameStarted,
        shouldJump,
        highScore,
        restart,
        startGame
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            width: 800,
            height: 400,
            className: "border-4 border-black bg-white cursor-pointer",
            style: {
                imageRendering: 'pixelated'
            }
        }, void 0, false, {
            fileName: "[project]/projects/face_meme/frontend/src/components/DinoGame.tsx",
            lineNumber: 459,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/projects/face_meme/frontend/src/components/DinoGame.tsx",
        lineNumber: 458,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DinoGame, "wN2CVm1so1+ErRqA4MlwAPIU6/Y=");
_c = DinoGame;
var _c;
__turbopack_context__.k.register(_c, "DinoGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/face_meme/frontend/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/face_meme/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/face_meme/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$frontend$2f$src$2f$hooks$2f$useFaceLandmarker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/face_meme/frontend/src/hooks/useFaceLandmarker.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$frontend$2f$src$2f$components$2f$DinoGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/face_meme/frontend/src/components/DinoGame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Home() {
    _s();
    const { videoRef, canvasRef, detectionState, startCamera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$frontend$2f$src$2f$hooks$2f$useFaceLandmarker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFaceLandmarker"])();
    const [showPermissionModal, setShowPermissionModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleAllowCamera = async ()=>{
        await startCamera();
        setShowPermissionModal(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white flex flex-col items-center justify-center p-8",
        children: [
            showPermissionModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-4 border-black p-8 max-w-md rounded-lg shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-4 text-black font-mono text-center",
                            children: "🦖 DinoCV 🦖"
                        }, void 0, false, {
                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 text-black text-center",
                            children: "This game uses your camera to detect when you stick out your tongue to make the dinosaur jump!"
                        }, void 0, false, {
                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 bg-gray-100 p-4 rounded border-2 border-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-700 mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "How to play:"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-gray-700 list-disc list-inside space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Allow camera access"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Position your face in view"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Stick out your tongue to jump"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Avoid the obstacles!"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this),
                        detectionState.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-red-100 border-2 border-red-500 text-red-700 text-sm rounded",
                            children: detectionState.error
                        }, void 0, false, {
                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAllowCamera,
                            disabled: !detectionState.isReady,
                            className: "w-full bg-black text-white font-bold py-3 px-6 rounded font-mono text-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
                            children: detectionState.isReady ? '📷 ALLOW CAMERA ACCESS' : '⏳ Loading...'
                        }, void 0, false, {
                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-8 text-black font-mono",
                children: "DINOCV"
            }, void 0, false, {
                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            detectionState.error && !showPermissionModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-red-100 border-2 border-red-500 text-red-700 rounded",
                children: detectionState.error
            }, void 0, false, {
                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-8 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-mono mb-4 text-black",
                                children: "CAMERA FEED"
                            }, void 0, false, {
                                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative border-4 border-black bg-gray-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        ref: videoRef,
                                        autoPlay: true,
                                        playsInline: true,
                                        muted: true,
                                        style: {
                                            display: 'none'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        ref: canvasRef,
                                        width: 640,
                                        height: 480,
                                        className: "block",
                                        style: {
                                            width: '640px',
                                            height: '480px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    !detectionState.cameraStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center bg-gray-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 font-mono text-sm",
                                            children: "📷 Waiting for camera..."
                                        }, void 0, false, {
                                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-4 border-2 border-black bg-white min-w-[640px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-sm text-black font-bold",
                                                    children: "Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                !detectionState.cameraStarted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-sm text-gray-500",
                                                    children: "Camera Off"
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-6 h-6 rounded-full transition-colors ${detectionState.isTongueOut ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-mono text-base font-bold ${detectionState.isTongueOut ? 'text-green-600' : 'text-gray-600'}`,
                                                            children: detectionState.isTongueOut ? '👅 TONGUE OUT - JUMP!' : '😐 Mouth Closed'
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-xs text-gray-600",
                                                children: "Open your mouth or stick out your tongue to trigger jump"
                                            }, void 0, false, {
                                                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-mono mb-4 text-black",
                                children: "GAME"
                            }, void 0, false, {
                                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$frontend$2f$src$2f$components$2f$DinoGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DinoGame"], {
                                shouldJump: detectionState.isTongueOut
                            }, void 0, false, {
                                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 border-2 border-black bg-gray-100 max-w-[800px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-xs text-black text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Controls:"
                                        }, void 0, false, {
                                            fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        " Stick out your tongue to jump | Click START to begin"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projects/face_meme/frontend/src/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Home, "ih5QL/D8mBgyxhbD3cV7NGyOuIs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$face_meme$2f$frontend$2f$src$2f$hooks$2f$useFaceLandmarker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFaceLandmarker"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=projects_face_meme_frontend_src_b667e0c4._.js.map