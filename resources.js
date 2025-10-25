// ===================== HAMBURGER MENU TOGGLE =====================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show'); // Toggle the 'show' class to display/hide mobile menu
});

// ===================== ACTIVE LINK HIGHLIGHT =====================
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  // Check if the link matches the current page URL
  if (link.href === window.location.href) {
    link.classList.add('active'); // Highlight active page link
  }
});
