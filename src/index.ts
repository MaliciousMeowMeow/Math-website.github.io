import { Hono } from 'hono'
import type { Context } from 'hono'

interface CloudflareBindings {}

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', (c) => {
  return c.html(`
    <div style="
      min-height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600') center/cover fixed;
      position: relative;
      overflow: hidden;
    ">
      <!-- Background Video -->
      <video autoplay muted loop playsinline id="bgVideo" style="
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        transform: translate(-50%, -50%);
        object-fit: cover;
        z-index: 0;
      ">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-loop-animation-8902-large.mp4" type="video/mp4">
      </video>

      <!-- Fallback Background -->
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3') center/cover;
        z-index: -1;
      "></div>

      <!-- Animated Background Particles -->
      <div class="particles-container"></div>
      
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.75));
        z-index: 1;
      "></div>
      
      <div style="position: relative; z-index: 2; width: 100%; text-align: center;">
        <h1 style="
          font-size: 72px;
          font-weight: bold;
          margin-bottom: 50px;
          background: linear-gradient(45deg, #00ff00, #00ffff, #ff00ff, #ffff00);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          animation: gradient 5s ease infinite;
          background-size: 300% 300%;
          font-family: 'Arial Black', sans-serif;
          letter-spacing: 2px;
        ">
          Math Adventure
        </h1>
        
        <div style="
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 100px;
        ">
          <!-- Math Challenge Card -->
          <div class="game-card" onclick="window.location.href='/math-challenge'" style="
            background: linear-gradient(135deg, rgba(0, 255, 128, 0.1), rgba(0, 128, 255, 0.1));
            border: 2px solid rgba(0, 255, 128, 0.3);
            padding: 30px;
            border-radius: 20px;
            cursor: pointer;
            width: 300px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          ">
            <div class="card-glow"></div>
            <h2 style="
              font-size: 28px;
              color: #00ff80;
              margin-bottom: 20px;
              text-shadow: 0 0 10px rgba(0, 255, 128, 0.5);
            ">Math Challenge</h2>
            <p style="
              color: #fff;
              font-size: 16px;
              line-height: 1.6;
              margin-bottom: 20px;
            ">Test your mathematical skills with increasingly difficult challenges. Race against time and compete for high scores!</p>
            <div class="card-icons" style="
              font-size: 24px;
              color: #00ff80;
              margin-top: 20px;
            ">
              🧮 📊 ⏱️
            </div>
          </div>

          <!-- Adventure Mode Card -->
          <div class="game-card" onclick="window.location.href='/adventure'" style="
            background: linear-gradient(135deg, rgba(148, 0, 211, 0.1), rgba(75, 0, 130, 0.1));
            border: 2px solid rgba(148, 0, 211, 0.3);
            padding: 30px;
            border-radius: 20px;
            cursor: pointer;
            width: 300px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          ">
            <div class="card-glow"></div>
            <div class="magical-sparkles"></div>
            <h2 style="
              font-size: 28px;
              color: #9400d3;
              margin-bottom: 20px;
              text-shadow: 0 0 10px rgba(148, 0, 211, 0.5);
            ">Adventure Mode</h2>
            <p style="
              color: #fff;
              font-size: 16px;
              line-height: 1.6;
              margin-bottom: 20px;
            ">Embark on an epic journey through the mystical Kingdom of Numerica. Unlock realms, gain power, and restore balance to the mathematical universe!</p>
            <div class="card-icons" style="
              font-size: 24px;
              color: #9400d3;
              margin-top: 20px;
            ">
              ⚔️ 🏰 ✨
            </div>
          </div>
        </div>
      </div>

      <style>
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .game-card {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(5px);
        }

        .game-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .game-card:hover .card-glow {
          opacity: 1;
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          background: 
            radial-gradient(circle at 20% 20%, rgba(0, 255, 128, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 128, 0, 0.1) 0%, transparent 50%);
          animation: particlesMove 20s infinite linear;
        }

        @keyframes particlesMove {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        .card-icons {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .coming-soon-badge {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .realm-icon {
          animation: float 3s ease-in-out infinite;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .realm-icon:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .realm-card {
          transform: translateY(0);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .realm-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .realm-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .realm-card:hover .realm-glow {
          opacity: 1;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .skip-button {
          position: absolute;
          bottom: 30px;
          right: 30px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 5px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .skip-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .magical-sparkles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(148, 0, 211, 0.1) 0%, transparent 25%),
            radial-gradient(circle at 70% 60%, rgba(75, 0, 130, 0.1) 0%, transparent 25%);
          animation: sparkle 3s infinite alternate;
          pointer-events: none;
        }

        @keyframes sparkle {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      </style>

      <script>
        // Add video fallback handling
        document.addEventListener('DOMContentLoaded', function() {
          const video = document.getElementById('bgVideo');
          if (video) {
            video.addEventListener('error', function() {
              video.style.display = 'none';
            });
          }
        });
      </script>
    </div>
  `)
})

app.get('/math-challenge', (c) => {
  return c.html(`
    <div style="
      min-height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: url('path-to-math-background.jpg') center/cover fixed;
      position: relative;
      overflow: hidden;
    ">
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
      "></div>
      
      <div style="position: relative; z-index: 2; width: 100%; text-align: center;">
        <button onclick="window.location.href='/'" class="back-btn" style="
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 10px 20px;
          background: rgba(0, 255, 128, 0.2);
          border: 2px solid rgba(0, 255, 128, 0.3);
          color: #00ff80;
          border-radius: 10px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
        ">← Back</button>

        <h1 style="
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 30px;
          background: linear-gradient(45deg, #00ff00, #00ffff, #ff00ff, #ffff00);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          animation: gradient 5s ease infinite;
          background-size: 300% 300%;
        ">
          Math Challenge
        </h1>
        
        <div style="
          display: grid;
          gap: 15px;
          max-width: 300px;
          margin: 0 auto;
        ">
          <button onclick="startGame('easy')" class="difficulty-btn easy">Easy</button>
          <button onclick="startGame('medium')" class="difficulty-btn medium">Medium</button>
          <button onclick="startGame('hard')" class="difficulty-btn hard">Hard</button>
          <button onclick="startGame('extreme')" class="difficulty-btn extreme">Extreme</button>
          <button onclick="startGame('skull')" class="difficulty-btn skull">☠️ Nightmare ☠️</button>
        </div>
      </div>

      <style>
        .back-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 0 15px rgba(0, 255, 128, 0.3);
          background: rgba(0, 255, 128, 0.3);
        }

        .difficulty-btn {
          padding: 15px 40px;
          font-size: 20px;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .difficulty-btn::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.3s ease;
        }

        .difficulty-btn:hover::after {
          transform: rotate(45deg) translate(50%, 50%);
        }

        .difficulty-btn.easy {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.9), rgba(76, 175, 80, 0.7));
          box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        }

        .difficulty-btn.medium {
          background: linear-gradient(135deg, rgba(255, 165, 0, 0.9), rgba(255, 165, 0, 0.7));
          box-shadow: 0 4px 15px rgba(255, 165, 0, 0.3);
        }

        .difficulty-btn.hard {
          background: linear-gradient(135deg, rgba(244, 67, 54, 0.9), rgba(244, 67, 54, 0.7));
          box-shadow: 0 4px 15px rgba(244, 67, 54, 0.3);
        }

        .difficulty-btn.extreme {
          background: linear-gradient(135deg, rgba(156, 39, 176, 0.9), rgba(156, 39, 176, 0.7));
          box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
        }

        .difficulty-btn.skull {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(40, 40, 40, 0.9));
          border: 2px solid #ff0000;
          box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
        }

        .difficulty-btn:hover {
          transform: translateY(-3px) scale(1.05);
          filter: brightness(1.2);
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      </style>

      <script>
        function startGame(difficulty) {
          window.location.href = '/game/' + difficulty;
        }
      </script>
    </div>
  `)
})

app.get('/game/:difficulty', (c) => {
  const difficulty = c.req.param('difficulty');
  return c.html(`
    <div style="
      min-height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
      background: url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3') center/cover,
        linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7));
      background-blend-mode: overlay;
      display: flex;
      font-family: Arial, sans-serif;
      position: relative;
    ">
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
      "></div>
      
      <div style="
        display: flex;
        gap: 20px;
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      ">
        <!-- Game Section -->
        <div style="flex: 1; max-width: 800px; margin: 0 auto;">
          <!-- Timer Bar Container -->
          <div style="
            width: calc(100% - 40px);
            height: 25px;
            background: linear-gradient(to right, rgba(26, 26, 26, 0.8), rgba(42, 42, 42, 0.8));
            border-radius: 15px;
            margin: 0 20px 20px 20px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 15px rgba(0,0,0,0.4), inset 0 1px 3px rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.1);
            backdrop-filter: blur(5px);
          ">
            <!-- Background Glow Effect -->
            <div style="
              position: absolute;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
              animation: shimmer 2s infinite linear;
            "></div>
            
            <!-- Timer Bar -->
            <div id="timerBar" style="
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, 
                rgba(0, 255, 0, 0.8), 
                rgba(255, 255, 0, 0.8), 
                rgba(255, 136, 0, 0.8)
              );
              border-radius: 15px;
              transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              position: absolute;
              left: 0;
              top: 0;
              box-shadow: 0 0 20px rgba(0,255,0,0.3);
            ">
              <!-- Moving Particles Effect -->
              <div class="particles"></div>
            </div>
          </div>

          <!-- Timer Display -->
          <div id="timer" style="
            font-size: 24px;
            color: white;
            text-align: center;
            margin-bottom: 20px;
          ">20</div>

          <!-- Extend Time Button -->
          <button id="extendTimeBtn" onclick="extendTime()" style="
            padding: 5px 10px;
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
            font-weight: bold;
            transition: all 0.3s;
            z-index: 3;
            box-shadow: 0 0 10px rgba(78, 205, 196, 0.5);
            display: block;
            margin: 0 auto 20px auto;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
          ">+30s (50pts)</button>

          <!-- Question Display -->
          <div id="questionDisplay" style="
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 40px;
            text-align: center;
            color: white;
            font-size: 32px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
          ">
            Loading question...
          </div>

          <!-- Answer Options Grid -->
          <div style="
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            margin-bottom: 30px;
          ">
            <button class="answer-btn" style="
              padding: 25px;
              font-size: 24px;
              border: none;
              border-radius: 15px;
              cursor: pointer;
              background: linear-gradient(135deg, rgba(255, 0, 0, 0.8), rgba(255, 100, 100, 0.8));
              color: white;
              transition: transform 0.2s, filter 0.3s;
              box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            " data-original-color="linear-gradient(135deg, rgba(255, 0, 0, 0.8), rgba(255, 100, 100, 0.8))">Option 1</button>

            <button class="answer-btn" style="
              padding: 25px;
              font-size: 24px;
              border: none;
              border-radius: 15px;
              cursor: pointer;
              background: linear-gradient(135deg, rgba(0, 0, 255, 0.8), rgba(100, 100, 255, 0.8));
              color: white;
              transition: transform 0.2s, filter 0.3s;
              box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            " data-original-color="linear-gradient(135deg, rgba(0, 0, 255, 0.8), rgba(100, 100, 255, 0.8))">Option 2</button>

            <button class="answer-btn" style="
              padding: 25px;
              font-size: 24px;
              border: none;
              border-radius: 15px;
              cursor: pointer;
              background: linear-gradient(135deg, rgba(255, 165, 0, 0.8), rgba(255, 200, 100, 0.8));
              color: white;
              transition: transform 0.2s, filter 0.3s;
              box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            " data-original-color="linear-gradient(135deg, rgba(255, 165, 0, 0.8), rgba(255, 200, 100, 0.8))">Option 3</button>

            <button class="answer-btn" style="
              padding: 25px;
              font-size: 24px;
              border: none;
              border-radius: 15px;
              cursor: pointer;
              background: linear-gradient(135deg, rgba(0, 128, 0, 0.8), rgba(100, 255, 100, 0.8));
              color: white;
              transition: transform 0.2s, filter 0.3s;
              box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            " data-original-color="linear-gradient(135deg, rgba(0, 128, 0, 0.8), rgba(100, 255, 100, 0.8))">Option 4</button>
          </div>

          <!-- Score Display -->
          <div style="
            text-align: center;
            color: white;
            font-size: 20px;
          ">
            Score: <span id="score">0</span>
          </div>

          <button onclick="window.location.href='/'" style="
            padding: 10px 20px;
            margin-top: 20px;
            background-color: rgba(51, 51, 51, 0.9);
            color: #00ff00;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0,255,0,0.2);
            transition: all 0.2s;
            display: block;
            margin-left: auto;
            margin-right: auto;
          " class="back-btn">Back to Menu</button>
        </div>

        <!-- Graphing Calculator and Scientific Calculator Container -->
        ${difficulty === 'skull' || difficulty === 'extreme' ? `
        <div style="
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 70px;
          max-height: calc(100vh - 100px);
          overflow-y: auto;
        ">
          ${difficulty === 'skull' ? `
          <!-- Graphing Calculator -->
          <div style="
            background: rgba(0, 0, 0, 0.8);
            padding: 20px;
            border-radius: 10px;
          ">
            <div id="graphing-calc" style="
              width: 100%;
              height: 200px;
              background: #2a2a2a;
              border-radius: 5px;
              margin-bottom: 10px;
            "></div>
            <input type="text" id="function-input" placeholder="Enter function (e.g., x^2)" style="
              width: 100%;
              padding: 5px;
              margin-bottom: 10px;
              background: rgba(255, 255, 255, 0.1);
              border: none;
              color: white;
            ">
            <button onclick="plotFunction()" class="calc-btn">Plot</button>
          </div>
          ` : ''}

          <!-- Scientific Calculator -->
          <div style="
            background: rgba(0, 0, 0, 0.8);
            padding: 20px;
            border-radius: 10px;
          ">
            <div id="sci-calc-display" style="
              background: #1a1a1a;
              color: #00ff00;
              padding: 10px;
              font-family: monospace;
              font-size: 20px;
              margin-bottom: 10px;
              border-radius: 5px;
              min-height: 30px;
              text-align: right;
            ">0</div>
            
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px;">
              <!-- Scientific Calculator buttons remain the same -->
              <button onclick="sciCalcFn('sin')" class="calc-btn">sin</button>
              <button onclick="sciCalcFn('cos')" class="calc-btn">cos</button>
              <button onclick="sciCalcFn('tan')" class="calc-btn">tan</button>
              <button onclick="sciCalcFn('π')" class="calc-btn">π</button>
              <button onclick="sciCalcFn('log')" class="calc-btn">log</button>
              <button onclick="sciCalcFn('ln')" class="calc-btn">ln</button>
              <button onclick="sciCalcFn('e')" class="calc-btn">e</button>
              <button onclick="sciCalcFn('^')" class="calc-btn">^</button>
              <button onclick="sciCalcFn('√')" class="calc-btn">√</button>
              <button onclick="sciCalcFn('(')" class="calc-btn">(</button>
              <button onclick="sciCalcFn(')')" class="calc-btn">)</button>
              <button onclick="sciCalcFn('!')" class="calc-btn">!</button>
              
              <!-- Basic Calculator Buttons -->
              <button onclick="sciCalcFn('7')" class="calc-btn">7</button>
              <button onclick="sciCalcFn('8')" class="calc-btn">8</button>
              <button onclick="sciCalcFn('9')" class="calc-btn">9</button>
              <button onclick="sciCalcFn('/')" class="calc-btn">÷</button>
              <button onclick="sciCalcFn('4')" class="calc-btn">4</button>
              <button onclick="sciCalcFn('5')" class="calc-btn">5</button>
              <button onclick="sciCalcFn('6')" class="calc-btn">6</button>
              <button onclick="sciCalcFn('*')" class="calc-btn">×</button>
              <button onclick="sciCalcFn('1')" class="calc-btn">1</button>
              <button onclick="sciCalcFn('2')" class="calc-btn">2</button>
              <button onclick="sciCalcFn('3')" class="calc-btn">3</button>
              <button onclick="sciCalcFn('-')" class="calc-btn">-</button>
              <button onclick="sciCalcFn('0')" class="calc-btn">0</button>
              <button onclick="sciCalcFn('.')" class="calc-btn">.</button>
              <button onclick="sciCalcFn('=')" class="calc-btn">=</button>
              <button onclick="sciCalcFn('+')" class="calc-btn">+</button>
              <button onclick="sciCalcFn('C')" class="calc-btn" style="grid-column: span 2;">C</button>
              <button onclick="sciCalcFn('⌫')" class="calc-btn" style="grid-column: span 2;">⌫</button>
            </div>
          </div>
        </div>

        ${difficulty === 'skull' ? `
        <!-- Add Desmos API -->
        <script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
        ` : ''}
        ` : ''}
      </div>

      <style>
        .answer-btn:hover {
          transform: scale(1.02);
          filter: brightness(1.2);
        }
        .back-btn:hover {
          transform: scale(1.02);
          filter: brightness(1.2);
          box-shadow: 0 6px 12px rgba(0,255,0,0.3);
        }
        .calc-btn {
          padding: 10px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          cursor: pointer;
          transition: all 0.2s;
        }
        .calc-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        #extendTimeBtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(78, 205, 196, 0.8);
          background: linear-gradient(135deg, #ff8787, #6ee7db);
        }
        #extendTimeBtn:active {
          transform: translateY(1px);
          box-shadow: 0 0 5px rgba(78, 205, 196, 0.3);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes particleFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.1) 20px,
            rgba(255,255,255,0.1) 40px
          );
          background-size: 200% 100%;
          animation: particleFlow 2s linear infinite;
          border-radius: 15px;
          overflow: hidden;
        }
      </style>

      <script>
        let timeLeft = 20;
        let score = 0;
        let currentAnswer = null;
        let timerInterval;
        let calcDisplay = '0';
        let lastResult = 0;
        let newNumber = true;
        let calculator = null;

        function initializeGame() {
          const loadingIndicator = document.getElementById('loadingIndicator');
          if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
          }
          updateQuestion();
          startTimer();
          
          // Initialize graphing calculator for skull mode
          if ('${difficulty}' === 'skull') {
            calculator = Desmos.GraphingCalculator(
              document.getElementById('graphing-calc'),
              { expressions: false, backgroundColor: '#2a2a2a' }
            );
          }
        }

        function startTimer() {
          if (timerInterval) {
            clearInterval(timerInterval);
          }
          
          // Different time limits based on difficulty
          switch('${difficulty}') {
            case 'easy':
              timeLeft = 20;
              break;
            case 'medium':
              timeLeft = 30;
              break;
            case 'hard':
              timeLeft = 45;
              break;
            case 'extreme':
              timeLeft = 60;
              break;
            case 'skull':
              timeLeft = 180; // Increased to 3 minutes
              break;
            default:
              timeLeft = 20;
          }
          
          updateTimer();
          timerInterval = setInterval(updateTimer, 1000);
        }

        function updateTimer() {
          const timer = document.getElementById('timer');
          const timerBar = document.getElementById('timerBar');
          
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            updateQuestion();
            startTimer();
            return;
          }
          
          timeLeft--;
          timer.textContent = timeLeft;
          timer.style.color = 'white';
          
          const totalTime = {
            'easy': 20,
            'medium': 30,
            'hard': 45,
            'extreme': 60,
            'skull': 180
          }['${difficulty}'] || 20;
          
          const percentage = Math.floor((timeLeft / totalTime) * 100);
          
          // Simplified animation and color transitions
          timerBar.style.width = percentage + '%';
          
          if (percentage <= 25) {
            timerBar.style.background = 'linear-gradient(90deg, #ff4444, #ff8800)';
            timerBar.style.boxShadow = '0 0 20px rgba(255,68,68,0.5)';
          } else if (percentage <= 50) {
            timerBar.style.background = 'linear-gradient(90deg, #ffff00, #ff8800)';
            timerBar.style.boxShadow = '0 0 20px rgba(255,255,0,0.4)';
          } else {
            timerBar.style.background = 'linear-gradient(90deg, #00ff00, #ffff00, #ff8800)';
            timerBar.style.boxShadow = '0 0 20px rgba(0,255,0,0.3)';
          }
        }

        function updateQuestion() {
          try {
            const difficulty = '${difficulty}';
            const { question, answer, hints } = generateQuestion(difficulty);
            document.getElementById('questionDisplay').innerHTML = \`
              \${question}
              <button id="showHintsBtn" style="
                margin-top: 15px;
                padding: 8px 15px;
                background: rgba(255, 255, 255, 0.2);
                border: none;
                border-radius: 5px;
                color: #fff;
                cursor: pointer;
                font-size: 16px;
              ">Show Hints</button>
              <div id="hintsContainer" style="
                display: none;
                font-size: 16px;
                color: #888;
                margin-top: 10px;
                font-style: italic;
              ">
                <div>Hint 1: \${hints[0]}</div>
                <div>Hint 2: \${hints[1]}</div>
                <div>Hint 3: \${hints[2]}</div>
              </div>
            \`;
            
            // Add event listener after creating the button
            const showHintsBtn = document.getElementById('showHintsBtn');
            if (showHintsBtn) {
              showHintsBtn.onclick = function() {
                const hintsContainer = document.getElementById('hintsContainer');
                if (hintsContainer) {
                  if (hintsContainer.style.display === 'none') {
                    hintsContainer.style.display = 'block';
                    this.textContent = 'Hide Hints';
                  } else {
                    hintsContainer.style.display = 'none';
                    this.textContent = 'Show Hints';
                  }
                }
              };
            }
            
            const options = generateOptions(answer);
            const buttons = document.querySelectorAll('.answer-btn');
            
            buttons.forEach((btn, i) => {
              if (options[i] !== undefined) {
                btn.textContent = options[i];
                btn.onclick = () => checkAnswer(options[i]);
                btn.style.pointerEvents = 'auto';
                btn.style.backgroundColor = btn.getAttribute('data-original-color') || '';
              }
            });
          } catch (error) {
            console.error('Error generating question:', error);
            document.getElementById('questionDisplay').textContent = 'Error loading question. Please refresh the page.';
          }
        }

        function checkAnswer(selected) {
          if (!currentAnswer) return;
          
          const buttons = document.querySelectorAll('.answer-btn');
          clearInterval(timerInterval);
          
          buttons.forEach(btn => {
            btn.style.pointerEvents = 'none';
          });

          const resultMessage = document.createElement('div');
          resultMessage.style.cssText = \`
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            padding: 20px;
            border-radius: 10px;
            color: white;
            font-size: 24px;
            text-align: center;
            z-index: 1000;
          \`;
          
          const isCorrect = Math.abs(selected - currentAnswer) < 0.0001;
          const waitTime = isCorrect ? 10 : 5; // 10 seconds for correct, 5 for wrong
          
          resultMessage.innerHTML = \`
            \${isCorrect ? 'Correct! 🎉' : 'Wrong! 😕'}<br>
            The answer is: \${currentAnswer}<br>
            <div style="font-size: 18px; margin-top: 10px;">Next question in <span id="countdown">\${waitTime}</span> seconds</div>
          \`;
          
          document.body.appendChild(resultMessage);

          buttons.forEach(btn => {
            const btnValue = parseFloat(btn.textContent);
            if (Math.abs(btnValue - selected) < 0.0001) {
              btn.style.backgroundColor = isCorrect ? 'rgba(0, 255, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)';
            } else if (Math.abs(btnValue - currentAnswer) < 0.0001 && !isCorrect) {
              btn.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
            }
          });

          if (isCorrect) {
            // Extreme mode gets 5x points
            const basePoints = Math.ceil(timeLeft / 2);
            const multiplier = '${difficulty}' === 'extreme' ? 5 : 1;
            score += basePoints * multiplier;
            document.getElementById('score').textContent = score;
          }

          let countdown = waitTime;
          const countdownInterval = setInterval(() => {
            countdown--;
            const countdownElement = document.getElementById('countdown');
            if (countdownElement) {
              countdownElement.textContent = countdown.toString();
            }
            if (countdown <= 0) {
              clearInterval(countdownInterval);
            }
          }, 1000);

          setTimeout(() => {
            clearInterval(countdownInterval);
            resultMessage.remove();
            updateQuestion();
            startTimer();
          }, waitTime * 1000);
        }

        function calcFn(key) {
          const display = document.getElementById('calc-display');
          if (!display) return;
          
          try {
            if (key === 'C') {
              calcDisplay = '0';
              lastResult = 0;
              newNumber = true;
            } else if (key === '⌫') {
              calcDisplay = calcDisplay.slice(0, -1) || '0';
            } else if (key === '=') {
              let expr = calcDisplay
                .replace(/sin/g, 'Math.sin')
                .replace(/cos/g, 'Math.cos')
                .replace(/tan/g, 'Math.tan')
                .replace(/log/g, 'Math.log10')
                .replace(/ln/g, 'Math.log')
                .replace(/π/g, 'Math.PI')
                .replace(/e/g, 'Math.E')
                .replace(/\^/g, '**');
              lastResult = eval(expr);
              calcDisplay = String(Math.round(lastResult * 1000) / 1000);
              newNumber = true;
            } else {
              if (newNumber) {
                calcDisplay = key;
                newNumber = false;
              } else {
                calcDisplay += key;
              }
            }
            display.textContent = calcDisplay;
          } catch (error) {
            console.error('Calculator error:', error);
            display.textContent = 'Error';
            newNumber = true;
          }
        }

        function generateQuestion(difficulty) {
          let question, answer, hints = [];
          
          try {
            switch(difficulty) {
              case 'easy':
                const num1 = Math.floor(Math.random() * 100) + 1;
                const num2 = Math.floor(Math.random() * 100) + 1;
                const op = Math.random() < 0.5 ? '+' : '-';
                question = \`\${num1} \${op} \${num2} = ?\`;
                answer = op === '+' ? num1 + num2 : num1 - num2;
                hints = [
                  'Try breaking down the numbers',
                  'Think about place values',
                  'Use mental math strategies'
                ];
                break;
                
              case 'medium':
                const type = Math.floor(Math.random() * 3);
                if (type === 0) {
                  const base = Math.floor(Math.random() * 100) + 1;
                  question = \`√\${base} = ?\`;
                  answer = Math.round(Math.sqrt(base) * 100) / 100;
                  hints = [
                    \`Try squaring numbers close to \${Math.floor(Math.sqrt(base))}\`,
                    'Think about perfect squares',
                    'Use estimation to get close'
                  ];
                } else if (type === 1) {
                  const dividend = Math.floor(Math.random() * 100) + 1;
                  const divisor = Math.floor(Math.random() * 20) + 1;
                  question = \`\${dividend} ÷ \${divisor} = ?\`;
                  answer = Math.round((dividend / divisor) * 100) / 100;
                  hints = [
                    \`Multiply \${divisor} by whole numbers to get close to \${dividend}\`,
                    'Think about the relationship between dividend and divisor',
                    'Use the calculator strategically'
                  ];
                } else {
                  const factor1 = Math.floor(Math.random() * 20) + 1;
                  const factor2 = Math.floor(Math.random() * 20) + 1;
                  question = \`\${factor1} × \${factor2} = ?\`;
                  answer = factor1 * factor2;
                  hints = [
                    'Break down into smaller multiplications',
                    'Think about the distributive property',
                    'Use the calculator strategically'
                  ];
                }
                break;
                
              case 'hard':
                const hardType = Math.floor(Math.random() * 4);
                if (hardType === 0) {
                  const base = Math.floor(Math.random() * 10) + 1;
                  const power = Math.floor(Math.random() * 3) + 2;
                  question = \`\${base}^\${power} = ?\`;
                  answer = Math.pow(base, power);
                  hints = [
                    'Break the problem into smaller parts',
                    'Use the calculator strategically',
                    'Think about similar simpler problems'
                  ];
                } else {
                  const n1 = Math.floor(Math.random() * 1000) + 1;
                  const n2 = Math.floor(Math.random() * 1000) + 1;
                  const ops = ['×', '÷', '+', '-'];
                  const hardOp = ops[hardType - 1];
                  question = \`\${n1} \${hardOp} \${n2} = ?\`;
                  answer = hardOp === '×' ? n1 * n2 :
                          hardOp === '÷' ? Math.round((n1 / n2) * 100) / 100 :
                          hardOp === '+' ? n1 + n2 : n1 - n2;
                  hints = [
                    'Break the problem into smaller parts',
                    'Use the calculator strategically',
                    'Think about similar simpler problems'
                  ];
                }
                break;
                
              case 'extreme':
              case 'skull':
                const extremeType = Math.floor(Math.random() * 3);
                const angle = Math.floor(Math.random() * 360);
                const trigFns = ['sin', 'cos', 'tan'];
                const trigFn = trigFns[extremeType];
                question = \`\${trigFn}(\${angle}°) = ?\`;
                
                // Convert angle to radians for calculation
                const radians = (angle * Math.PI) / 180;
                
                // Calculate the answer based on the trigonometric function
                switch(trigFn) {
                  case 'sin':
                    answer = Math.round(Math.sin(radians) * 1000) / 1000;
                    break;
                  case 'cos':
                    answer = Math.round(Math.cos(radians) * 1000) / 1000;
                    break;
                  case 'tan':
                    answer = Math.round(Math.tan(radians) * 1000) / 1000;
                    break;
                }
                
                hints = [
                  'Use the unit circle',
                  'Remember the trigonometric identities',
                  'Use the scientific calculator'
                ];
                break;
                
              default:
                throw new Error('Invalid difficulty level');
            }
            
            currentAnswer = answer;
            return { question, answer, hints };
          } catch (error) {
            console.error('Error in generateQuestion:', error);
            return {
              question: 'Loading new question...',
              answer: 0,
              hints: ['Refresh if this message persists', 'Try a different difficulty', 'Contact support if issue continues']
            };
          }
        }

        function generateOptions(answer) {
          try {
            // Generate 4 unique options including the correct answer
            const options = new Set();
            options.add(answer);
            
            while (options.size < 4) {
              let variation;
              if (Number.isInteger(answer)) {
                // For integer answers, generate nearby whole numbers
                variation = answer + (Math.random() < 0.5 ? 1 : -1) * (Math.floor(Math.random() * Math.max(Math.abs(answer) * 0.2, 1)) + 1));
              } else {
                // For decimal answers (like trig functions), stay within reasonable bounds
                variation = answer + (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 0.5 + 0.1);
                variation = Math.round(variation * 1000) / 1000;
              }
              
              // Ensure the variation is different enough from existing options
              if (![...options].some(opt => Math.abs(opt - variation) < 0.001)) {
                options.add(variation);
              }
            }
            
            // Convert to array and shuffle
            return [...options].sort(() => Math.random() - 0.5);
          } catch (error) {
            console.error('Error in generateOptions:', error);
            return [0, 1, 2, 3]; // Fallback options
          }
        }

        // Initialize the game when the page loads
        document.addEventListener('DOMContentLoaded', initializeGame);
      </script>
    </div>
  `)
})

app.get('/adventure', (c: Context<{ Bindings: CloudflareBindings }>) => {
  return c.html(`
    <div style="
      min-height: 100vh;
      padding: 0;
      margin: 0;
      background: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600') center/cover fixed;
      font-family: Arial, sans-serif;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column; // Ensure elements stack vertically
      align-items: center;
      padding-top: 40px; // Increase padding to create more space
      margin-bottom: 20px; // Add margin to create space below
    ">
      <!-- Story Container -->
      <div id="storyContainer" style="
        max-width: 800px;
        padding: 40px;
        color: white;
        text-align: center;
        opacity: 1;
        transform: translateY(0);
        transition: all 1s ease;
        position: relative;
        z-index: 2;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 20px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 30px rgba(148, 0, 211, 0.3);
      ">
        <h1 style="
          font-size: 64px;
          margin-bottom: 30px;
          background: linear-gradient(45deg, #FFD700, #FFA500, #FF4500);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          animation: titleGlow 2s ease-in-out infinite;
          font-family: 'Arial Black', sans-serif;
          letter-spacing: 2px;
        ">The Kingdom of Numerica</h1>
        
        <p id="storyText" style="
          font-size: 24px;
          line-height: 1.6;
          margin-bottom: 40px;
          min-height: 100px;
          background: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          font-weight: bold;
          animation: gradientFlow 8s linear infinite;
          background-size: 300% 300%;
          padding: 10px;
          border-radius: 15px;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        "></p>

        <div id="choiceButtons" style="
          display: none;
          gap: 20px;
          justify-content: center;
        ">
          <button onclick="handleChoice(true)" style="
            padding: 15px 40px;
            font-size: 20px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            color: white;
            background: linear-gradient(135deg, #4CAF50, #45a049);
            box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
            transition: all 0.3s ease;
            transform: scale(1);
            animation: buttonPulse 2s infinite;
          ">Begin Journey</button>
          <button onclick="handleChoice(false)" style="
            padding: 15px 40px;
            font-size: 20px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            color: white;
            background: linear-gradient(135deg, #f44336, #d32f2f);
            box-shadow: 0 4px 15px rgba(244, 67, 54, 0.3);
            transition: all 0.3s ease;
          ">Not Yet</button>
        </div>

        <button onclick="skipIntro()" style="
          position: absolute;
          bottom: 30px;
          right: 30px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 5px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        ">Skip Intro</button>
      </div>

      <style>
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
          50% { text-shadow: 0 0 40px rgba(255, 215, 0, 0.8); }
        }

        @keyframes buttonPulse {
          0% { transform: scale(1); box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3); }
          50% { transform: scale(1.05); box-shadow: 0 4px 25px rgba(76, 175, 80, 0.5); }
          100% { transform: scale(1); box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3); }
        }

        @keyframes floatSymbol {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        .floating-symbols::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(148, 0, 211, 0.1) 0%, transparent 50%);
          animation: symbolsFloat 20s infinite linear;
        }

        .particle-system {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #FFD700;
          border-radius: 50%;
          pointer-events: none;
          animation: particleFloat 3s infinite linear;
        }

        @keyframes symbolsFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }

        @keyframes particleFloat {
          0% { transform: translateY(100vh) translateX(-50%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50%); opacity: 0; }
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 150%; }
          100% { background-position: 0% 50%; }
        }
      </style>

      <script>
        // Create floating mathematical symbols
        function createFloatingSymbols() {
          const symbols = ['∑', '∫', 'π', '√', '∞', 'θ', 'Δ', 'λ'];
          const container = document.querySelector('.floating-symbols');
          
          setInterval(() => {
            const symbol = document.createElement('div');
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.cssText = \`
              position: absolute;
              left: \${Math.random() * 100}%;
              bottom: -20px;
              color: rgba(255, 255, 255, 0.3);
              font-size: \${Math.random() * 30 + 20}px;
              animation: floatSymbol \${Math.random() * 5 + 5}s linear forwards;
            \`;
            container.appendChild(symbol);
            setTimeout(() => symbol.remove(), 10000);
          }, 500);
        }

        // Create particle effect
        function createParticles() {
          const container = document.querySelector('.particle-system');
          
          setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = \`\${Math.random() * 100}%\`;
            particle.style.animationDuration = \`\${Math.random() * 3 + 2}s\`;
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 5000);
          }, 100);
        }

        // Initialize effects when page loads
        document.addEventListener('DOMContentLoaded', () => {
          createFloatingSymbols();
          createParticles();
        });

        // Update story text with enhanced animation
        const story = [
          "Four ancient realms stand as pillars of knowledge, each holding secrets of immense power...",
          "Will you accept this noble quest and become the Champion of Numerica?",
          // Remove any additional story elements that might cause text fragments
        ];

        let currentIndex = 0;
        let currentText = '';
        let letterIndex = 0;

        function type() {
          const storyText = document.getElementById('storyText');
          if (!storyText) return;

          if (letterIndex < story[currentIndex].length) {
            currentText += story[currentIndex][letterIndex];
            storyText.textContent = currentText;
            letterIndex++;
            setTimeout(type, 30);
          } else {
            letterIndex = 0;
            setTimeout(() => {
              currentIndex++;
              if (currentIndex < story.length) {
                currentText = '';
                type();
              } else {
                document.getElementById('choiceButtons').style.display = 'flex';
              }
            }, 2000);
          }
        }

        // Start the story when the page loads
        document.addEventListener('DOMContentLoaded', type);

        // Add skip intro functionality
        function skipIntro() {
          // Stop the current typing animation
          currentIndex = story.length - 1;
          currentText = story[currentIndex];
          
          // Update the story text immediately
          const storyText = document.getElementById('storyText');
          if (storyText) {
            storyText.textContent = currentText;
          }
          
          // Show the choice buttons
          const choiceButtons = document.getElementById('choiceButtons');
          if (choiceButtons) {
            choiceButtons.style.display = 'flex';
          }
        }

        // Add choice handling
        function handleChoice(accepted) {
          if (accepted) {
            window.location.href = '/adventure/realms';
          } else {
            // Fade out the story container
            const storyContainer = document.getElementById('storyContainer');
            if (storyContainer) {
              storyContainer.style.opacity = '0';
              storyContainer.style.transform = 'translateY(20px)';
              setTimeout(() => {
                window.location.href = '/';
              }, 1000);
            }
          }
        }
      </script>
    </div>
  `);
});

// Add the level route AFTER the adventure route
app.get('/adventure/realms', (c) => {
  return c.html(`
    <div style="
      min-height: 100vh;
      width: 100%;
      padding: 20px;
      margin: 0;
      background: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600') center/cover fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    ">
      <div style="
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 10;
      ">
        <a href="/adventure" class="back-button">Back to Realms</a>
      </div>
      <div style="
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(0, 100, 0, 0.8);
        padding: 10px 20px;
        border-radius: 10px;
        color: #00ff00;
        font-family: 'Courier New', monospace;
        z-index: 10;
      ">
        XP: <span id="xpDisplay">0</span>
      </div>

      <!-- Background overlay with animated gradient -->
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, 
          rgba(0, 0, 0, 0.8),
          rgba(75, 0, 130, 0.7),
          rgba(148, 0, 211, 0.6)
        );
        animation: gradientShift 10s ease infinite;
        background-size: 200% 200%;
        z-index: 1;
      "></div>

      <!-- Main content container -->
      <div style="
        position: relative;
        z-index: 2;
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 80px;
      ">
        <!-- Transition animation container -->
        <div id="transitionContainer" style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.9);
          transition: opacity 0.3s;
        ">
          <div id="transitionSpaceship" style="
            width: 200px;
            height: 200px;
            background: url('https://media.giphy.com/media/3og0IFrHkIglEOg8Ba/giphy.gif') center/contain no-repeat;
            transform: scale(0);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          "></div>
        </div>

        <script>
          function startTransitionAnimation(destination) {
            const container = document.getElementById('transitionContainer');
            const spaceship = document.getElementById('transitionSpaceship');
            
            // Show container and start animation
            container.style.opacity = '1';
            
            // Scale up spaceship
            setTimeout(() => {
              spaceship.style.transform = 'scale(1)';
            }, 100);
            
            // Navigate after animation
            setTimeout(() => {
              window.location.href = destination;
            }, 1000);
          }
        </script>

        <h1 style="
          text-align: center;
          font-size: 48px;
          color: #FFD700;
          margin: 80px 0 50px 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">Choose Your Realm</h1>

        <div style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          padding: 20px;
        ">
          <!-- Arithmetic Realm -->
          <div class="realm-card" onclick="startTransitionAnimation('/adventure/level?realm=arithmetic&level=1')" style="
            background: linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 100, 100, 0.1));
            border: 2px solid rgba(255, 0, 0, 0.3);
            padding: 30px;
            border-radius: 20px;
            cursor: pointer;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          ">
            <div class="realm-glow"></div>
            <div class="realm-icon" style="font-size: 48px; margin-bottom: 20px;">➕</div>
            <h2 style="
              color: #ff4444;
              margin-bottom: 15px;
              font-size: 24px;
              text-shadow: 0 0 10px rgba(255, 68, 68, 0.3);
            ">Arithmetic Realm</h2>
            <p style="color: white; font-size: 16px;">Master the fundamental forces of addition, subtraction, multiplication, and division.</p>
          </div>

          <!-- Algebra Realm -->
          <div class="realm-card" onclick="window.location.href='/adventure/level?realm=algebra&level=1'" style="
            background: linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(100, 255, 100, 0.1));
            border: 2px solid rgba(0, 255, 0, 0.3);
            padding: 30px;
            border-radius: 20px;
            cursor: pointer;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          ">
            <div class="realm-glow"></div>
            <div class="realm-icon" style="font-size: 48px; margin-bottom: 20px;">✖️</div>
            <h2 style="
              color: #44ff44;
              margin-bottom: 15px;
              font-size: 24px;
              text-shadow: 0 0 10px rgba(68, 255, 68, 0.3);
            ">Algebra Realm</h2>
            <p style="color: white; font-size: 16px;">Unlock the mysteries of variables and equations in this challenging realm.</p>
          </div>

          <!-- Geometry Realm -->
          <div class="realm-card" onclick="window.location.href='/adventure/level?realm=geometry&level=1'" style="
            background: linear-gradient(135deg, rgba(0, 0, 255, 0.1), rgba(100, 100, 255, 0.1));
            border: 2px solid rgba(0, 0, 255, 0.3);
            padding: 30px;
            border-radius: 20px;
            cursor: pointer;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          ">
            <div class="realm-glow"></div>
            <div class="realm-icon" style="font-size: 48px; margin-bottom: 20px;">📐</div>
            <h2 style="
              color: #4444ff;
              margin-bottom: 15px;
              font-size: 24px;
              text-shadow: 0 0 10px rgba(68, 68, 255, 0.3);
            ">Geometry Realm</h2>
            <p style="color: white; font-size: 16px;">Explore the shapes and patterns that form the fabric of space itself.</p>
          </div>

          <!-- Trigonometry Realm -->
          <div class="realm-card" onclick="window.location.href='/adventure/level?realm=trigonometry&level=1'" style="
            background: linear-gradient(135deg, rgba(148, 0, 211, 0.1), rgba(75, 0, 130, 0.1));
            border: 2px solid rgba(148, 0, 211, 0.3);
            padding: 30px;
            border-radius: 20px;
            cursor: pointer;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          ">
            <div class="realm-glow"></div>
            <div class="realm-icon" style="font-size: 48px; margin-bottom: 20px;">📏</div>
            <h2 style="
              color: #9400d3;
              margin-bottom: 15px;
              font-size: 24px;
              text-shadow: 0 0 10px rgba(148, 0, 211, 0.3);
            ">Trigonometry Realm</h2>
            <p style="color: white; font-size: 16px;">Master the ancient arts of angles and circles in this mystical domain.</p>
          </div>
        </div>
      </div>
    </div>
  `);
});

// Add the level route AFTER the adventure route
app.get('/adventure/level', (c) => {
  const html = `
    <div class="game-container">
      <div class="nav-bar">
        <a href="/adventure/realms" class="back-button">Back to Realms</a>
        <div class="xp-display">XP: <span id="xpDisplay">0</span></div>
      </div>

      <div class="main-content">
        <h1><span id="realmName">Realm</span> - Level <span id="levelNumber">1</span></h1>
        <div id="questionContainer">
          <div id="question">Loading question...</div>
          <div id="options"></div>
        </div>
      </div>

      <style>
        .game-container {
          min-height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
          background: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600') center/cover fixed;
          position: relative;
          color: white;
          font-family: Arial, sans-serif;
        }
        .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: rgba(0,0,0,0.8);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          z-index: 1000;
        }
        .back-button {
          padding: 8px 16px;
          background: rgba(148, 0, 211, 0.2);
          border: 2px solid rgba(148, 0, 211, 0.3);
          color: #9400d3;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
        }
        .xp-display {
          background: rgba(0, 100, 0, 0.8);
          padding: 8px 16px;
          border-radius: 8px;
          color: #00ff00;
          font-family: 'Courier New', monospace;
        }
        .main-content {
          padding-top: 80px;
          padding-bottom: 20px;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        h1 {
          text-align: center;
          color: white;
          margin: 40px 0;
          font-size: 36px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        #questionContainer {
          background: rgba(0,0,0,0.7);
          padding: 30px;
          border-radius: 15px;
          margin: 20px;
          text-align: center;
        }
        #question {
          font-size: 24px;
          margin-bottom: 30px;
        }
        #options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 30px;
        }
        .option-button {
          padding: 15px;
          font-size: 20px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .option-button:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
      </style>

      <script>
        (function() {
          // Type definitions
          interface GameState {
            xp: number;
            level: number;
          }

          // Get realm and level from URL
          const urlParams = new URLSearchParams(window.location.search);
          const realm = urlParams.get('realm') || 'arithmetic';
          const level = parseInt(urlParams.get('level') || '1', 10);

          // Update header
          document.getElementById('realmName').textContent = realm.charAt(0).toUpperCase() + realm.slice(1);
          document.getElementById('levelNumber').textContent = level.toString();

          // Load saved XP
          const gameState: GameState = JSON.parse(localStorage.getItem('gameState') || '{"xp":0, "level":1}');
          document.getElementById('xpDisplay').textContent = gameState.xp.toString();

          function generateQuestion() {
            let question = '';
            let answer = 0;
            let options: number[] = [];

            switch(realm) {
              case 'arithmetic':
                const num1 = Math.floor(Math.random() * (10 * level)) + 1;
                const num2 = Math.floor(Math.random() * (10 * level)) + 1;
                question = \`\${num1} + \${num2} = ?\`;
                answer = num1 + num2;
                break;
              default:
                question = "Select a realm to begin";
                answer = 0;
            }

            options = [answer];
            while(options.length < 4) {
              const option = answer + Math.floor(Math.random() * 10) - 5;
              if(!options.includes(option)) {
                options.push(option);
              }
            }
            options.sort(() => Math.random() - 0.5);

            return { question, answer, options };
          }

          function displayQuestion() {
            const { question, answer, options } = generateQuestion();
            
            const questionEl = document.getElementById('question');
            if (questionEl) questionEl.textContent = question;
            
            const optionsContainer = document.getElementById('options');
            if (optionsContainer) {
              optionsContainer.innerHTML = options.map(option => 
                \`<button class="option-button" onclick="window.checkAnswer(\${option}, \${answer})">\${option}</button>\`
              ).join('');
            }
          }

          // Expose checkAnswer to window object
          window.checkAnswer = function(selected: number, correct: number) {
            if(selected === correct) {
              gameState.xp += 10;
              localStorage.setItem('gameState', JSON.stringify(gameState));
              const xpDisplay = document.getElementById('xpDisplay');
              if (xpDisplay) xpDisplay.textContent = gameState.xp.toString();
              
              alert('Correct! +10 XP');
              displayQuestion();
            } else {
              alert('Try again!');
            }
          };

          // Initialize
          displayQuestion();
        })();
      </script>
    </div>
  `;
  
  return c.html(html);
});

function generateGameLogic() {
  return `
    interface GameState {
      playerXP: number;
      playerLevel: number;
      xpNeeded: number;
    }

    interface Question {
      question: string;
      answer: number;
      options: number[];
      xpReward: number;
    }

    let currentQuestion: Question | null = null;
    const realmId = new URLSearchParams(window.location.search).get('realm') || 'arithmetic';
    const levelNumber = parseInt(new URLSearchParams(window.location.search).get('level') || '1', 10);

    const gameState: GameState = JSON.parse(localStorage.getItem('gameState') || '{"playerLevel":1,"playerXP":0,"xpNeeded":100}');

    // Rest of your game logic...
  `;
}

export default {
  fetch: app.fetch
} as ExportedHandler<{ Bindings: CloudflareBindings }>;