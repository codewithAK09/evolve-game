// --- 1. CORE ANIMATIONS & CANVAS ---
const canvas = document.getElementById('circuit-canvas');
const ctx = canvas.getContext('2d');
let lines = [];
let fireworkParticles = [];
let victoryMode = false;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.onresize = resize;
resize();

// PCB GRID LAYER
function drawPCBGrid() {
    ctx.strokeStyle = "rgba(0, 255, 65, 0.05)";
    ctx.lineWidth = 1;
    const spacing = 50;
    for(let x=0; x<canvas.width; x+=spacing) {
        ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for(let y=0; y<canvas.height; y+=spacing) {
        ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
}

// ORIGINAL PULSE LINES (Falling Green Lines)
class PulseLine {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = -100;
        this.len = Math.random() * 100 + 50;
        this.speed = Math.random() * 8 + 4;
        this.opacity = Math.random() * 0.5;
    }
    update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.reset();
    }
    draw() {
        ctx.strokeStyle = `rgba(0, 255, 65, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(this.x, this.y + this.len); ctx.stroke();
    }
}

// FULL PAGE SPARKLES (Fireworks)
class Sparkle {
    constructor(x, y, color) {
        this.x = x; this.y = y;
        this.color = color || `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.vx = (Math.random() - 0.5) * 15;
        this.vy = (Math.random() - 0.5) * 15;
        this.alpha = 1;
        this.gravity = 0.15;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        this.vy += this.gravity;
        this.alpha -= 0.02;
    }
    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath(); ctx.arc(this.x, this.y, 4, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
    }
}

// Initialize pulse lines
for(let i=0; i<70; i++) lines.push(new PulseLine());

function triggerFullPageFireworks() {
    for(let b=0; b<3; b++) {
        let rx = Math.random() * canvas.width;
        let ry = Math.random() * canvas.height;
        for(let i=0; i<50; i++) fireworkParticles.push(new Sparkle(rx, ry));
    }
}

function animate() {
    ctx.fillStyle = 'rgba(5, 5, 5, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawPCBGrid();
    lines.forEach(l => { l.update(); l.draw(); });

    if(victoryMode && Math.random() < 0.1) triggerFullPageFireworks();

    fireworkParticles.forEach((p, i) => {
        p.update(); p.draw();
        if(p.alpha <= 0) fireworkParticles.splice(i, 1);
    });

    requestAnimationFrame(animate);
}
animate();

// --- 2. GAME LOGIC ---
function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
}

let activeBatch = [];
let qIndex = 0;
let currentScore = 0;
let timerPtr;

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startGame() {
    if (typeof allQuestions === 'undefined' || allQuestions.length === 0) {
        console.error("Questions list is missing or empty!");
        return;
    }
    
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    
    qIndex = 0;
    currentScore = 0;
    victoryMode = false; 
    document.getElementById('score-num').innerText = currentScore;
    
    const count = Math.min(10, allQuestions.length);
    activeBatch = shuffleArray(allQuestions).slice(0, count);
    renderQuestion();
}

function renderQuestion() {
    if (qIndex >= activeBatch.length) return finishGame();
    
    document.getElementById('q-num').innerText = qIndex + 1;
    const data = activeBatch[qIndex];
    document.getElementById('question-display').innerText = data.q;
    
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    
    data.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => validate(opt);
        grid.appendChild(btn);
    });
    runTimer();
}

function runTimer() {
    let timeLeft = 100;
    const bar = document.getElementById('timer-progress');
    clearInterval(timerPtr);
    timerPtr = setInterval(() => {
        timeLeft -= 2; 
        bar.style.width = timeLeft + "%";
        // 100ms interval creates exactly a 5-second timer
        if(timeLeft <= 0) { clearInterval(timerPtr); validate(null); }
    }, 200);
}

function validate(choice) {
    clearInterval(timerPtr);
    const correctAns = activeBatch[qIndex].a;

    if(choice === correctAns) {
        currentScore++;
        document.getElementById('score-num').innerText = currentScore;
        showFeedback('CORRECT', '⚡', 'correct-msg');
        triggerFullPageFireworks();
    } else {
        showFeedback('WRONG', '⚠️', 'wrong-msg');
    }
    
    qIndex++;
    setTimeout(renderQuestion, 1000);
}

function showFeedback(text, icon, typeClass) {
    const pop = document.createElement('div');
    pop.className = `feedback-popup ${typeClass}`;
    pop.innerHTML = `<h1 style="font-size:8rem; margin:0">${icon}</h1><h2 style="font-size:3rem">${text}</h2>`;
    document.body.appendChild(pop);
    setTimeout(() => pop.remove(), 900);
}

function finishGame() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('dash-screen').classList.add('active');
    document.getElementById('final-results').innerHTML = `<h1 style="font-size:5rem">${currentScore * 10}% ACCURACY</h1>`;
    
    if(currentScore >= 8) {
        victoryMode = true;
        document.getElementById('dash-status').innerText = "REWARD UNLOCKED 🍬";
        document.getElementById('review-comment').innerText = "SYSTEM SECURE. REWARD PROTOCOL ACTIVATED.";
    } else {
        document.getElementById('dash-status').innerText = "YOU FAILED ❌";
        document.getElementById('review-comment').innerText = "MINIMUM 8/10 REQUIRED. RETRY SYSTEM.";
    }
}
