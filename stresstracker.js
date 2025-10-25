// Stress Form Submission
document.getElementById("stressForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        } else {
            alert("Please answer all questions!");
            return;
        }
    }

    let resultText = "";
    if (score >= 30) {
        resultText = "High Stress Level 😟! Take deep breaths, you are stronger than you think.";
    } else if (score >= 20 && score < 30) {
        resultText = "Moderate Stress 😐. Stay positive! A little break can help.";
    } else {
        resultText = "Low Stress 🙂. Great! Keep it up!";
    }

    document.getElementById("result").innerText = resultText;
});

// Hamburger toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});