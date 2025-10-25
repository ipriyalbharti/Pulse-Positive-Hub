// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Highlight active page dynamically
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active');
  }
});

// Navigate to page when card clicked
function goToPage(url) {
  window.location.href = url;
}