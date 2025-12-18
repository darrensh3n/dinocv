'use client';

import { useState } from 'react';
import { useFaceLandmarker } from '@/hooks/useFaceLandmarker';
import { DinoGame } from '@/components/DinoGame';

export default function Home() {
  const { videoRef, canvasRef, detectionState, startCamera } = useFaceLandmarker();
  const [showPermissionModal, setShowPermissionModal] = useState(true);

  const handleAllowCamera = async () => {
    await startCamera();
    setShowPermissionModal(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      {/* Camera Permission Modal */}
      {showPermissionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-4 border-black p-8 max-w-md rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-black font-mono text-center">
              🦖 DinoCV 🦖
            </h2>
            <p className="mb-6 text-black text-center">
              This game uses your camera to detect when you stick out your tongue to make the dinosaur jump!
            </p>
            <div className="mb-6 bg-gray-100 p-4 rounded border-2 border-gray-300">
              <p className="text-sm text-gray-700 mb-2">
                <strong>How to play:</strong>
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Allow camera access</li>
                <li>Position your face in view</li>
                <li>Stick out your tongue to jump</li>
                <li>Avoid the obstacles!</li>
              </ul>
            </div>
            {detectionState.error && (
              <div className="mb-4 p-3 bg-red-100 border-2 border-red-500 text-red-700 text-sm rounded">
                {detectionState.error}
              </div>
            )}
            <button
              onClick={handleAllowCamera}
              disabled={!detectionState.isReady}
              className="w-full bg-black text-white font-bold py-3 px-6 rounded font-mono text-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {detectionState.isReady ? '📷 ALLOW CAMERA ACCESS' : '⏳ Loading...'}
            </button>
          </div>
        </div>
      )}

      <h1 className="text-4xl font-bold mb-8 text-black font-mono">
        DINOCV
      </h1>
      
      {detectionState.error && !showPermissionModal && (
        <div className="mb-4 p-4 bg-red-100 border-2 border-red-500 text-red-700 rounded">
          {detectionState.error}
        </div>
      )}
      
      <div className="flex gap-8 items-start">
        {/* Video Feed Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-mono mb-4 text-black">CAMERA FEED</h2>
          <div className="relative border-4 border-black bg-gray-900">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{ display: 'none' }}
            />
            <canvas
              ref={canvasRef}
              width={640}
              height={480}
              className="block"
              style={{ width: '640px', height: '480px' }}
            />
            {!detectionState.cameraStarted && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <p className="text-gray-300 font-mono text-sm">📷 Waiting for camera...</p>
              </div>
            )}
          </div>
          
          {/* Detection Status */}
          <div className="mt-4 p-4 border-2 border-black bg-white min-w-[640px]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-sm text-black font-bold">Status:</span>
                {!detectionState.cameraStarted ? (
                  <span className="font-mono text-sm text-gray-500">Camera Off</span>
                ) : (
                  <>
                    <div
                      className={`w-6 h-6 rounded-full transition-colors ${
                        detectionState.isTongueOut ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                      }`}
                    />
                    <span className={`font-mono text-base font-bold ${
                      detectionState.isTongueOut ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {detectionState.isTongueOut ? '👅 TONGUE OUT - JUMP!' : '😐 Mouth Closed'}
                    </span>
                  </>
                )}
              </div>
              <div className="text-center">
                <p className="font-mono text-xs text-gray-600">
                  Open your mouth or stick out your tongue to trigger jump
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Game Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-mono mb-4 text-black">GAME</h2>
          <DinoGame shouldJump={detectionState.isTongueOut} />
          <div className="mt-4 p-3 border-2 border-black bg-gray-100 max-w-[800px]">
            <p className="font-mono text-xs text-black text-center">
              <strong>Controls:</strong> Stick out your tongue to jump | Click START to begin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
