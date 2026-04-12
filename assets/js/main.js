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
        if (nav) nav.classList.add('visible');
        if (backToTopBtn) backToTopBtn.classList.add('visible');
    } else {
        if (nav) nav.classList.remove('visible');
        if (backToTopBtn) backToTopBtn.classList.remove('visible');
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

// Video Overlay Logic
function playVideo(element, videoUrl) {
    // If iframe already exists, don't do anything
    if (element.querySelector('iframe')) return;

    const placeholder = element.querySelector('.video-placeholder');
    if (placeholder) {
        placeholder.style.opacity = '0';
        setTimeout(() => {
            placeholder.style.display = 'none';
        }, 500);
    }

    const iframe = document.createElement('iframe');
    // Ensure autoplay is enabled
    const finalUrl = videoUrl.includes('?') ? `${videoUrl}&autoplay=1` : `${videoUrl}?autoplay=1`;
    
    iframe.src = finalUrl;
    iframe.setAttribute('allow', 'autoplay; fullscreen');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', '0');
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    
    element.appendChild(iframe);
}

// Ensure all video placeholders are clickable
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.featured-media, .vertical-video-container').forEach(container => {
        const videoUrl = container.getAttribute('data-video-url');
        if (videoUrl) {
            container.addEventListener('click', () => playVideo(container, videoUrl));
        }
    });
});

// Thumbnails are now handled via static paths to high-quality gameplay screenshots.

