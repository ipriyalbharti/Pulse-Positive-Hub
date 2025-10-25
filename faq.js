// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Highlight active link dynamically
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active');
  }
});



    // Toggle FAQ Answers
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(question => {
      question.addEventListener('click', () => {
        question.nextElementSibling.classList.toggle('show');
      });
    });
     