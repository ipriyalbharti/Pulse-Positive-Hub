const quotes = [
  "Believe in yourself; you are capable of amazing things.",
  "Take a deep breath, every little step counts.",
  "Stress is temporary. Keep moving forward.",
  "A small break can refresh your mind and soul.",
  "Focus on what you can control, let go of what you can't.",
  "Every day is a new beginning. Stay positive.",
  "Your mind is powerful—feed it with positivity.",
  "Even small progress is progress. Keep going.",
  "Happiness is not by chance, but by choice.",
  "Stay calm, stay strong, and keep moving forward."
];

const quoteEl = document.getElementById("dailyQuote");
const nextBtn = document.getElementById("nextQuoteBtn");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
}

// Show a quote on page load
showRandomQuote();

// Change quote on button click
nextBtn.addEventListener("click", showRandomQuote);

// ✅ Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
