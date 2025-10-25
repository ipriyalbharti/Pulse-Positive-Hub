// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navbar');
menuToggle.addEventListener('click', () => nav.classList.toggle('show'));

// Active link highlight
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if(link.href === window.location.href) link.classList.add('active');
});

// ------------------- Breathing Timer -------------------
const circle = document.querySelector('.breathing-circle');
const breathText = document.getElementById('breathText');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const durationSel = document.getElementById('duration');
const patternSel  = document.getElementById('pattern');

let timer = null;
let running = false;
let remain = 0;
let currentStep = 0;
let stepRemain = 0;

function getPattern(name){
  switch(name){
    case '4-7-8': return [
      { text: 'Inhale…', sec: 4 },
      { text: 'Hold…', sec: 7 },
      { text: 'Exhale…', sec: 8 }
    ];
    case 'box': return [
      { text: 'Inhale…', sec: 4 },
      { text: 'Hold…', sec: 4 },
      { text: 'Exhale…', sec: 4 },
      { text: 'Hold…', sec: 4 }
    ];
    default: return [
      { text: 'Inhale…', sec: 4 },
      { text: 'Exhale…', sec: 4 }
    ];
  }
}

function animateFor(stepText){
  if(stepText.startsWith('Inhale')) circle.style.transform = 'scale(1.25)';
  else if(stepText.startsWith('Exhale')) circle.style.transform = 'scale(1.0)';
  else { circle.style.transform = 'scale(1.12)'; circle.classList.add('hold'); return; }
  circle.classList.remove('hold');
}

function tick(steps){
  stepRemain -= 1; remain -= 1;
  if(stepRemain <= 0){
    currentStep = (currentStep + 1) % steps.length;
    stepRemain = steps[currentStep].sec;
    breathText.textContent = steps[currentStep].text;
    animateFor(steps[currentStep].text);
  }
  if(remain <= 0){
    clearInterval(timer);
    running = false;
    breathText.textContent = 'Session Complete! Well done!';
    circle.style.transform = 'scale(1.0)';
    circle.classList.remove('hold');
  }
}

function startSession(){ if(running) return;
  running = true;
  remain = parseInt(durationSel.value,10);
  const steps = getPattern(patternSel.value);
  currentStep = 0; stepRemain = steps[0].sec;
  breathText.textContent = steps[0].text;
  animateFor(steps[0].text);
  timer = setInterval(()=>tick(steps),1000);
}

function pauseSession(){ running=false; clearInterval(timer); }
function resetSession(){ pauseSession(); breathText.textContent='Click Start to Begin'; circle.style.transform='scale(1.0)'; circle.classList.remove('hold'); }

startBtn.addEventListener('click', startSession);
pauseBtn.addEventListener('click', pauseSession);
resetBtn.addEventListener('click', resetSession);

// ------------------- Nature Sounds -------------------
const soundButtons = document.querySelectorAll('.sound-grid .btn');
const player = document.getElementById('musicPlayer');

soundButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const type = btn.getAttribute('data-sound');
    player.src = `audio/${type}.mp3`;
    player.loop = true;
    player.play();
    soundButtons.forEach(b=>b.classList.remove('btn-active'));
    btn.classList.add('btn-active');
  });
});

// Stop nature sounds if user clicks built-in music (already same player)
player.addEventListener('play', ()=>{
  soundButtons.forEach(b=>b.classList.remove('btn-active'));
});

// ------------------- Quotes -------------------
const quoteEl = document.getElementById('quote');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const quotes = [
  "Take a deep breath. You’re stronger than you think.",
  "Peace in, stress out.",
  "Inhale calm, exhale tension.",
  "You have survived 100% of your worst days.",
  "Slow breath. Clear mind.",
  "This moment is enough."
];

newQuoteBtn.addEventListener('click', ()=>{
  const q = quotes[Math.floor(Math.random()*quotes.length)];
  quoteEl.textContent = `“${q}”`;
});

// ------------------- Continue Button -------------------
const continueBtn = document.getElementById('continueBtn');
continueBtn.addEventListener('click', ()=>{
  window.location.href = 'postGetStarted.html';
});
