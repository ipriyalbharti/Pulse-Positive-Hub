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
// -------------------- Select Elements --------------------
const cards = document.querySelectorAll('.card'); // select all cards

// -------------------- Loop through each card --------------------
cards.forEach(card => {
  const header = card.querySelector('.card-header'); // header inside the card

  // -------------------- Create preview message --------------------
  const preview = document.createElement('div'); // create a new div
  preview.className = 'card-preview'; // add class for styling
  preview.textContent = 'Click to view tips/resources'; // message text

  // Insert preview message before card content
  card.insertBefore(preview, card.querySelector('.card-content'));

  // -------------------- Click event to open/close card --------------------
  header.addEventListener('click', () => {
    const content = card.querySelector('.card-content'); // get the content

    // Toggle active class: open if closed, close if open
    content.classList.toggle('active');

    // Show or hide preview message
    if (content.classList.contains('active')) {
      preview.style.display = 'none'; // hide when content open
    } else {
      preview.style.display = 'block'; // show when content closed
    }
  });
});
