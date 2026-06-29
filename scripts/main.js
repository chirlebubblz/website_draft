document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if(navLinks.classList.contains('active')) {
            menuToggle.textContent = '✕';
        } else {
            menuToggle.textContent = '☰';
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(18, 18, 18, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Reveal on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. 3D Article Carousel Logic
    const articleCards = document.querySelectorAll('.article-card-3d');
    const articlePrevBtn = document.getElementById('articlePrevBtn');
    const articleNextBtn = document.getElementById('articleNextBtn');
    let currentArticleIndex = 1; // Center item for 4 elements

    function updateArticleCarousel() {
        articleCards.forEach((card, i) => {
            const relativePos = i - currentArticleIndex;
            let transform = '';
            let opacity = 1;
            let filter = 'brightness(1)';
            let zIndex = 1;
            let boxShadow = '';

            if (relativePos === 0) {
                transform = 'translateX(0) scale(1) rotateY(0deg)';
                opacity = 1;
                zIndex = 10;
                boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
                card.style.border = '1px solid var(--accent)';
            } else if (relativePos === -1) {
                transform = 'translateX(-180px) scale(0.9) rotateY(10deg)';
                opacity = 0.6;
                filter = 'brightness(0.75)';
                zIndex = 5;
                card.style.border = '1px solid var(--border-color)';
            } else if (relativePos === 1) {
                transform = 'translateX(180px) scale(0.9) rotateY(-10deg)';
                opacity = 0.6;
                filter = 'brightness(0.75)';
                zIndex = 5;
                card.style.border = '1px solid var(--border-color)';
            } else if (relativePos === -2) {
                transform = 'translateX(-360px) scale(0.85) rotateY(20deg)';
                opacity = 0.4;
                filter = 'brightness(0.6)';
                zIndex = 2;
                card.style.border = '1px solid var(--border-color)';
            } else if (relativePos === 2) {
                transform = 'translateX(360px) scale(0.85) rotateY(-20deg)';
                opacity = 0.4;
                filter = 'brightness(0.6)';
                zIndex = 2;
                card.style.border = '1px solid var(--border-color)';
            } else {
                transform = `translateX(${relativePos * 180}px) scale(0.75) rotateY(${-relativePos * 15}deg)`;
                opacity = 0;
                filter = 'brightness(0.5)';
                zIndex = 1;
                card.style.border = '1px solid var(--border-color)';
            }

            card.style.transform = transform;
            card.style.opacity = opacity;
            card.style.filter = filter;
            card.style.zIndex = zIndex;
            card.style.boxShadow = boxShadow;
        });
    }

    if (articlePrevBtn && articleNextBtn && articleCards.length > 0) {
        articlePrevBtn.addEventListener('click', () => {
            currentArticleIndex = (currentArticleIndex - 1 + articleCards.length) % articleCards.length;
            updateArticleCarousel();
        });

        articleNextBtn.addEventListener('click', () => {
            currentArticleIndex = (currentArticleIndex + 1) % articleCards.length;
            updateArticleCarousel();
        });

        updateArticleCarousel();
    }

    // 5. 3D Podcast Carousel Logic
    const podcastCards = document.querySelectorAll('.podcast-card-3d');
    const podcastPrevBtn = document.getElementById('podcastPrevBtn');
    const podcastNextBtn = document.getElementById('podcastNextBtn');
    let currentPodcastIndex = 2; // Center item for 5 elements

    function updatePodcastCarousel() {
        podcastCards.forEach((card, i) => {
            const relativePos = i - currentPodcastIndex;
            let transform = '';
            let opacity = 1;
            let filter = 'brightness(1)';
            let zIndex = 1;
            let boxShadow = '';

            if (relativePos === 0) {
                transform = 'translateX(0) scale(1) rotateY(0deg)';
                opacity = 1;
                zIndex = 10;
                boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
                card.style.border = '1px solid var(--accent)';
            } else if (relativePos === -1) {
                transform = 'translateX(-180px) scale(0.9) rotateY(10deg)';
                opacity = 0.6;
                filter = 'brightness(0.75)';
                zIndex = 5;
                card.style.border = '1px solid var(--border-color)';
            } else if (relativePos === 1) {
                transform = 'translateX(180px) scale(0.9) rotateY(-10deg)';
                opacity = 0.6;
                filter = 'brightness(0.75)';
                zIndex = 5;
                card.style.border = '1px solid var(--border-color)';
            } else if (relativePos === -2) {
                transform = 'translateX(-360px) scale(0.85) rotateY(20deg)';
                opacity = 0.4;
                filter = 'brightness(0.6)';
                zIndex = 2;
                card.style.border = '1px solid var(--border-color)';
            } else if (relativePos === 2) {
                transform = 'translateX(360px) scale(0.85) rotateY(-20deg)';
                opacity = 0.4;
                filter = 'brightness(0.6)';
                zIndex = 2;
                card.style.border = '1px solid var(--border-color)';
            } else {
                transform = `translateX(${relativePos * 180}px) scale(0.75) rotateY(${-relativePos * 15}deg)`;
                opacity = 0;
                filter = 'brightness(0.5)';
                zIndex = 1;
                card.style.border = '1px solid var(--border-color)';
            }

            card.style.transform = transform;
            card.style.opacity = opacity;
            card.style.filter = filter;
            card.style.zIndex = zIndex;
            card.style.boxShadow = boxShadow;
        });
    }

    if (podcastPrevBtn && podcastNextBtn && podcastCards.length > 0) {
        podcastPrevBtn.addEventListener('click', () => {
            currentPodcastIndex = (currentPodcastIndex - 1 + podcastCards.length) % podcastCards.length;
            updatePodcastCarousel();
        });

        podcastNextBtn.addEventListener('click', () => {
            currentPodcastIndex = (currentPodcastIndex + 1) % podcastCards.length;
            updatePodcastCarousel();
        });

        updatePodcastCarousel();
    }
});
