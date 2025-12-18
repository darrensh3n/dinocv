'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface DinoGameProps {
  shouldJump: boolean;
  onRestart?: () => void;
}

interface Obstacle {
  x: number;
  width: number;
  height: number;
}

export const DinoGame: React.FC<DinoGameProps> = ({ shouldJump }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  // Use ref to track current shouldJump value (avoid closure issues)
  const shouldJumpRef = useRef(shouldJump);
  
  // Update ref whenever prop changes
  useEffect(() => {
    shouldJumpRef.current = shouldJump;
  }, [shouldJump]);
  
  // Game state refs
  const gameStateRef = useRef({
    dino: {
      x: 50,
      y: 0,
      width: 44,
      height: 47,
      velocityY: 0,
      isJumping: false,
    },
    obstacles: [] as Obstacle[],
    groundY: 0,
    gameSpeed: 5,
    score: 0,
    frameCount: 0,
    lastJumpState: false,
  });

  const GRAVITY = -0.6;
  const JUMP_STRENGTH = 12;
  const GROUND_HEIGHT = 150;
  const OBSTACLE_SPAWN_RATE = 90;

  const restart = useCallback(() => {
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
  }, []);

  const startGame = useCallback(() => {
    restart();
  }, [restart]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const state = gameStateRef.current;
    state.groundY = canvas.height - GROUND_HEIGHT;
    
    let animationFrameId: number;

    const drawDino = () => {
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
    };

    const drawObstacle = (obstacle: Obstacle) => {
      const y = state.groundY - obstacle.height;
      
      // Draw cactus
      ctx.fillStyle = '#535353';
      
      // Main body
      const segments = Math.floor(obstacle.height / 12);
      for (let i = 0; i < segments; i++) {
        ctx.fillRect(obstacle.x + 4, y + (i * 12), 12, 12);
      }
      
      // Arms
      if (obstacle.height > 40) {
        ctx.fillRect(obstacle.x, y + 12, 8, 8);
        ctx.fillRect(obstacle.x + 16, y + 18, 8, 8);
      }
    };

    const drawGround = () => {
      ctx.strokeStyle = '#535353';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, state.groundY);
      ctx.lineTo(canvas.width, state.groundY);
      ctx.stroke();
      
      // Draw ground dots (moving with game speed)
      if (gameStarted && !gameOver) {
        for (let i = 0; i < canvas.width; i += 40) {
          const offset = (state.frameCount * state.gameSpeed) % 40;
          ctx.fillStyle = '#535353';
          ctx.fillRect(i - offset, state.groundY + 4, 4, 2);
        }
      }
    };

    const drawClouds = () => {
      // Simple cloud decoration
      ctx.fillStyle = '#ddd';
      const cloudOffset = (state.frameCount * 2) % (canvas.width + 100);
      ctx.fillRect(canvas.width - cloudOffset, 50, 20, 8);
      ctx.fillRect(canvas.width - cloudOffset + 8, 46, 12, 8);
      ctx.fillRect(canvas.width - cloudOffset + 16, 50, 16, 8);
    };

    const drawScore = () => {
      ctx.fillStyle = '#535353';
      ctx.font = '20px "Courier New", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`HI ${highScore.toString().padStart(5, '0')} ${state.score.toString().padStart(5, '0')}`, canvas.width - 20, 30);
    };

    const drawStartScreen = () => {
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
    };

    const drawGameOver = () => {
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
    };

    const checkCollision = (obstacle: Obstacle): boolean => {
      const dino = state.dino;
      const dinoX = dino.x;
      const dinoY = state.groundY - dino.y - dino.height;
      const dinoWidth = dino.width;
      const dinoHeight = dino.height;
      
      const obstacleY = state.groundY - obstacle.height;
      
      // More forgiving collision with tolerance
      const tolerance = 8;
      
      return (
        dinoX + tolerance < obstacle.x + obstacle.width &&
        dinoX + dinoWidth - tolerance > obstacle.x &&
        dinoY + tolerance < obstacleY + obstacle.height &&
        dinoY + dinoHeight - tolerance > obstacleY
      );
    };

    const jump = () => {
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
    };

    const update = () => {
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
          height: height,
        });
      }

      // Update obstacles
      state.obstacles = state.obstacles.filter(obstacle => {
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
      });

      // Increase game speed gradually
      if (state.frameCount % 200 === 0 && state.gameSpeed < 12) {
        state.gameSpeed += 0.5;
      }
    };

    const render = () => {
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
    };

    // Handle keyboard input (spacebar for testing)
    const handleKeyDown = (e: KeyboardEvent) => {
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
    };

    // Handle canvas click for start/restart
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (!gameStarted) {
        // Check if click is on start button
        const buttonWidth = 180;
        const buttonHeight = 50;
        const buttonX = canvas.width / 2 - buttonWidth / 2;
        const buttonY = canvas.height / 2 - 10;
        
        if (
          x >= buttonX &&
          x <= buttonX + buttonWidth &&
          y >= buttonY &&
          y <= buttonY + buttonHeight
        ) {
          startGame();
        }
      } else if (gameOver) {
        // Check if click is on restart button
        const buttonWidth = 150;
        const buttonHeight = 45;
        const buttonX = canvas.width / 2 - buttonWidth / 2;
        const buttonY = canvas.height / 2 + 10;
        
        if (
          x >= buttonX &&
          x <= buttonX + buttonWidth &&
          y >= buttonY &&
          y <= buttonY + buttonHeight
        ) {
          restart();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('click', handleCanvasClick);

    // Start game loop
    render();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameOver, gameStarted, shouldJump, highScore, restart, startGame]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="border-4 border-black bg-white cursor-pointer"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
};
