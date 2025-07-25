// Countdown Timer
const weddingDate = new Date('2025-12-31T16:00:00'); // Set your wedding date and time here
const timerElement = document.getElementById('timer');

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        timerElement.textContent = "The wedding day has arrived!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP Form Submission
const form = document.getElementById('rsvp-form');
const thankYouMsg = document.getElementById('thank-you-msg');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    thankYouMsg.style.display = 'block';
    form.reset();
});

// Gallery Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.getElementById('close-modal');
const galleryFigures = document.querySelectorAll('.gallery-grid figure');

galleryFigures.forEach((figure) => {
    figure.addEventListener('click', () => {
        modal.classList.add('open');
        modalImg.src = ''; // No real image, so blank or placeholder
        modalImg.alt = figure.querySelector('figcaption').textContent;
        modalCaption.textContent = figure.getAttribute('data-caption');
        closeModal.focus();
    });
    figure.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            figure.click();
        }
    });
});
// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // adjust for nav height
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

closeModal.addEventListener('click', () => modal.classList.remove('open'));
closeModal.addEventListener('keydown', (e) => {
    if (['Enter', ' ', 'Escape'].includes(e.key)) {
        modal.classList.remove('open');
    }
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
});
