// Game state management
let gameState = {
    xp: 0,
    level: 1,
    completedLevels: [],
    currentRealm: null,
    currentDifficulty: null
};

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load saved game state
    loadGameState();
    
    // Video fallback
    const video = document.getElementById('bgVideo');
    if (video) {
        video.addEventListener('error', handleVideoError);
    }

    // Initialize card hover effects
    initializeCardEffects();

    // Initialize difficulty buttons if they exist
    initializeDifficultyButtons();

    // Initialize realm cards if they exist
    initializeRealmCards();

    // Initialize game UI if in game mode
    if (window.location.pathname.includes('game.html')) {
        initializeGame();
    }
});

// Handle video errors
function handleVideoError() {
    const video = document.getElementById('bgVideo');
    const fallbackBg = document.querySelector('.fallback-bg');
    
    if (video && fallbackBg) {
        video.style.display = 'none';
        fallbackBg.style.display = 'block';
    }
}

// Initialize card hover effects
function initializeCardEffects() {
    const cards = document.querySelectorAll('.game-card, .realm-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const glow = card.querySelector('.card-glow');
            if (glow) glow.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            const glow = card.querySelector('.card-glow');
            if (glow) glow.style.opacity = '0';
        });
    });
}

// Game state management
function loadGameState() {
    const savedState = localStorage.getItem('mathAdventureState');
    if (savedState) {
        gameState = JSON.parse(savedState);
    } else {
        // Initialize new game state
        gameState = {
            xp: 0,
            level: 1,
            completedLevels: [],
            currentRealm: null,
            currentDifficulty: null
        };
        saveGameState();
    }
    updateUI();
}

function saveGameState() {
    localStorage.setItem('mathAdventureState', JSON.stringify(gameState));
}

function updateUI() {
    // Update level display
    const levelDisplay = document.getElementById('level');
    if (levelDisplay) {
        levelDisplay.textContent = `Level ${gameState.level}`;
    }

    // Update XP display
    const xpDisplay = document.getElementById('xp');
    if (xpDisplay) {
        xpDisplay.textContent = `XP: ${gameState.xp}`;
    }
}

// Difficulty button initialization
function initializeDifficultyButtons() {
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    
    difficultyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const difficulty = button.dataset.difficulty;
            gameState.currentDifficulty = difficulty;
            saveGameState();
            window.location.href = 'game.html';
        });
    });
}

// Realm card initialization
function initializeRealmCards() {
    const realmCards = document.querySelectorAll('.realm-card');
    
    realmCards.forEach(card => {
        card.addEventListener('click', () => {
            const realm = card.dataset.realm;
            gameState.currentRealm = realm;
            saveGameState();
            window.location.href = `level.html?realm=${realm}`;
        });
    });
}

// Game initialization
function initializeGame() {
    let timeLeft = getDifficultyTime();
    let score = 0;
    let currentQuestion = null;

    // Initialize timer
    const timerBar = document.querySelector('.timer-progress');
    const questionContainer = document.querySelector('.question-container');
    const scoreDisplay = document.querySelector('.score');

    function getDifficultyTime() {
        switch(gameState.currentDifficulty) {
            case 'easy': return 30;
            case 'medium': return 20;
            case 'hard': return 15;
            case 'extreme': return 10;
            case 'skull': return 5;
            default: return 20;
        }
    }

    function generateQuestion() {
        const operations = ['+', '-', '*'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let num1, num2;

        switch(gameState.currentDifficulty) {
            case 'easy':
                num1 = Math.floor(Math.random() * 10) + 1;
                num2 = Math.floor(Math.random() * 10) + 1;
                break;
            case 'medium':
                num1 = Math.floor(Math.random() * 20) + 1;
                num2 = Math.floor(Math.random() * 20) + 1;
                break;
            case 'hard':
                num1 = Math.floor(Math.random() * 50) + 1;
                num2 = Math.floor(Math.random() * 50) + 1;
                break;
            case 'extreme':
                num1 = Math.floor(Math.random() * 100) + 1;
                num2 = Math.floor(Math.random() * 100) + 1;
                break;
            case 'skull':
                num1 = Math.floor(Math.random() * 1000) + 1;
                num2 = Math.floor(Math.random() * 1000) + 1;
                break;
            default:
                num1 = Math.floor(Math.random() * 10) + 1;
                num2 = Math.floor(Math.random() * 10) + 1;
        }

        let answer;
        switch(operation) {
            case '+': answer = num1 + num2; break;
            case '-': answer = num1 - num2; break;
            case '*': answer = num1 * num2; break;
        }

        const question = `${num1} ${operation} ${num2} = ?`;
        const options = generateOptions(answer);

        return {
            question,
            options,
            correctAnswer: answer
        };
    }

    function generateOptions(correctAnswer) {
        const options = [correctAnswer];
        while (options.length < 4) {
            const offset = Math.floor(Math.random() * 10) - 5;
            const option = correctAnswer + offset;
            if (!options.includes(option)) {
                options.push(option);
            }
        }
        return shuffleArray(options);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function displayQuestion() {
        currentQuestion = generateQuestion();
        const optionsGrid = document.createElement('div');
        optionsGrid.className = 'options-grid';

        questionContainer.innerHTML = `
            <div class="question">${currentQuestion.question}</div>
        `;

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            optionsGrid.appendChild(button);
        });

        questionContainer.appendChild(optionsGrid);
    }

    function checkAnswer(selectedAnswer) {
        const correct = selectedAnswer === currentQuestion.correctAnswer;
        const buttons = document.querySelectorAll('.option-btn');
        
        buttons.forEach(button => {
            button.disabled = true;
            if (parseInt(button.textContent) === currentQuestion.correctAnswer) {
                button.style.background = 'rgba(0, 255, 0, 0.3)';
            }
            if (parseInt(button.textContent) === selectedAnswer && !correct) {
                button.style.background = 'rgba(255, 0, 0, 0.3)';
            }
        });

        if (correct) {
            score += Math.ceil(timeLeft * getDifficultyMultiplier());
            scoreDisplay.textContent = `Score: ${score}`;
        }

        setTimeout(() => {
            displayQuestion();
        }, 1000);
    }

    function getDifficultyMultiplier() {
        switch(gameState.currentDifficulty) {
            case 'easy': return 1;
            case 'medium': return 2;
            case 'hard': return 3;
            case 'extreme': return 4;
            case 'skull': return 5;
            default: return 1;
        }
    }

    function startGame() {
        displayQuestion();
        
        const timer = setInterval(() => {
            timeLeft--;
            if (timerBar) {
                timerBar.style.width = `${(timeLeft / getDifficultyTime()) * 100}%`;
            }

            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        const xpGained = Math.ceil(score * getDifficultyMultiplier());
        gameState.xp += xpGained;
        
        // Level up if enough XP
        while (gameState.xp >= getXpRequiredForNextLevel()) {
            gameState.level++;
        }
        
        saveGameState();
        
        questionContainer.innerHTML = `
            <div class="game-over">
                <h2>Game Over!</h2>
                <p>Final Score: ${score}</p>
                <p>XP Gained: ${xpGained}</p>
                <p>Current Level: ${gameState.level}</p>
                <button onclick="window.location.reload()">Play Again</button>
                <button onclick="window.location.href='index.html'">Main Menu</button>
            </div>
        `;
    }

    function getXpRequiredForNextLevel() {
        return Math.floor(100 * Math.pow(1.5, gameState.level - 1));
    }

    // Start the game
    startGame();
}

// Particle effect
function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles(); 