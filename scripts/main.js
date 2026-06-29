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

    // 4. Articles Slider Logic
    const articles = [
        {
            title: "The due diligence don't [sic] work",
            excerpt: "Most impact investors are checking the wrong things. Here's what the evidence says they're missing, and what fixing it actually looks like.",
            link: "https://ethicsinsight.substack.com/p/the-due-diligence-dont-sic-work?utm_source=publication-search",
            pub: "The Integrity Gap (Substack)",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Smells like 2007, and why AI needs a reality check",
            excerpt: "Exploring the parallels between past financial crises and the current AI landscape in risk management and corporate compliance.",
            link: "https://ethicsinsight.substack.com/p/smells-like-2007-and-why-ai-needs",
            pub: "The Integrity Gap (Substack)",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "When assessing threat, know your sharks from your mosquitoes",
            excerpt: "A deep dive into correctly categorizing and responding to different levels of corporate, behavioural, and operational threats.",
            link: "https://www.grip.globalrelay.com/when-assessing-threat-know-your-sharks-from-your-mosquitoes/",
            pub: "Global Relay Intelligence & Practice",
            image: "webimage-G-GRIP-SHARKS-THREAT-e1687954153465 (1).webp"
        },
        {
            title: "How to assess the biggest source of risk",
            excerpt: "Human behavior remains the largest unquantified risk in modern business. Here is a practical guide on how to measure and manage it.",
            link: "https://grcoutlook.com/how-to-assess-the-biggest-source-of-risk/",
            pub: "GRC Outlook",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Trash collection and compliance plateaus",
            excerpt: "Why standard compliance programs stall, and how looking at everyday operational friction provides the missing solution.",
            link: "https://complianceandethics.org/trash-collection-and-compliance-plateaus/",
            pub: "Compliance & Ethics Professional",
            image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const titleEl = document.getElementById('a-title');
    const excerptEl = document.getElementById('a-excerpt');
    const linkEl = document.getElementById('a-link');
    const imageEl = document.getElementById('a-image');
    const pubEl = document.getElementById('a-pub');
    const prevBtn = document.getElementById('a-prev');
    const nextBtn = document.getElementById('a-next');

    let currentArticleIndex = 0;

    function renderArticle(index) {
        const article = articles[index];
        
        // Fade out
        titleEl.style.opacity = 0;
        excerptEl.style.opacity = 0;
        
        setTimeout(() => {
            titleEl.textContent = article.title;
            excerptEl.textContent = article.excerpt;
            linkEl.href = article.link;
            pubEl.textContent = article.pub;
            imageEl.style.backgroundImage = `url('${article.image}')`;
            
            // Fade in
            titleEl.style.opacity = 1;
            excerptEl.style.opacity = 1;
            titleEl.style.transition = "opacity 0.3s ease";
            excerptEl.style.transition = "opacity 0.3s ease";
        }, 300);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentArticleIndex = (currentArticleIndex - 1 + articles.length) % articles.length;
            renderArticle(currentArticleIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentArticleIndex = (currentArticleIndex + 1) % articles.length;
            renderArticle(currentArticleIndex);
        });
        
        // Initialize first article
        renderArticle(currentArticleIndex);
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
