# Face Meme Project - Tongue Detection Dino Game

A Chrome dinosaur-style game controlled by sticking out your tongue! Uses MediaPipe Face Landmarker for real-time face detection.

## Project Structure

```
face_meme/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/       # Next.js app directory
│   │   ├── components/ # React components (DinoGame)
│   │   └── hooks/     # Custom hooks (useFaceLandmarker)
│   ├── public/
│   └── package.json
├── backend/           # Express backend server
│   ├── src/
│   └── package.json
└── README.md
```

## Getting Started

### Quick Start (Recommended)

From the root directory:

```bash
# Install all dependencies
npm install

# Start the frontend (game)
npm run dev:frontend
```

Then open `http://localhost:3000` in your browser and allow camera access!

### Manual Setup

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

The game will run on `http://localhost:3000`

**Backend:**

```bash
cd backend
npm install
npm run dev
```

The backend will run on `http://localhost:3001`

## How to Play

1. Allow camera access when prompted
2. Position your face in the camera view
3. Stick out your tongue to make the dinosaur jump!
4. Avoid the cacti obstacles
5. Press SPACE for testing/manual control
6. Click RESTART button when game over

## Technologies

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS, MediaPipe Face Landmarker
- **Backend**: Express, TypeScript, Node.js
- **Face Detection**: MediaPipe Tasks Vision (Face Landmarker model)
