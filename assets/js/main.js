// Lightbox Logic
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = "block";
    lightboxImg.src = src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// Close on Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});
// Sticky Nav & Back to Top Logic
const nav = document.querySelector('.sticky-nav');
const backToTopBtn = document.getElementById('backToTop');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        nav.classList.add('visible');
        backToTopBtn.classList.add('visible');
    } else {
        nav.classList.remove('visible');
        backToTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Project Filtering
function filterProjects(category) {
    // Update buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (window.event) {
        window.event.target.classList.add('active');
    }

    // Filter cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Random Cyber Dash Thumbnail
(function () {
    const cyberDashImg = document.getElementById('cyber-dash-thumbnail');
    if (cyberDashImg) {
        const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        cyberDashImg.src = `assets/thumbnails/cyber-dash/${randomImage}`;
    }
})();
