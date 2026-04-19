document.addEventListener('DOMContentLoaded', () => {
    // --- Section Navigation ---
    const navButtons = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const rightPanel = document.getElementById('rightPanel');

    function switchSection(sectionId) {
        sections.forEach(s => s.classList.remove('active'));
        navButtons.forEach(b => b.classList.remove('active'));

        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.add('active');
            rightPanel.scrollTop = 0;
        }

        navButtons.forEach(b => {
            if (b.dataset.section === sectionId) {
                b.classList.add('active');
            }
        });
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchSection(btn.dataset.section);
            // Close mobile menu if open
            closeMobileMenu();
        });
    });

    // --- Expandable Cards (Publications, Hackathons, Research Interests) ---
    const expandableCards = document.querySelectorAll('.pub-card, .hack-card, .research-interest-card');

    expandableCards.forEach(card => {
        const header = card.querySelector('.pub-card-header');
        if (!header) return;

        header.addEventListener('click', (e) => {
            // Don't toggle when clicking a link
            if (e.target.closest('a')) return;

            const isExpanded = card.dataset.expanded === 'true';
            card.dataset.expanded = isExpanded ? 'false' : 'true';
        });
    });

    // --- Minimize All / Expand All Buttons ---
    document.querySelectorAll('.collapse-all-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const container = document.getElementById(targetId);
            if (!container) return;

            const cards = container.querySelectorAll('[data-expanded]');
            const allCollapsed = Array.from(cards).every(c => c.dataset.expanded === 'false');

            cards.forEach(card => {
                card.dataset.expanded = allCollapsed ? 'true' : 'false';
            });

            // Toggle button text
            const icon = btn.querySelector('i');
            if (allCollapsed) {
                icon.className = 'fas fa-compress-alt';
                btn.childNodes[btn.childNodes.length - 1].textContent = ' Minimize All';
            } else {
                icon.className = 'fas fa-expand-alt';
                btn.childNodes[btn.childNodes.length - 1].textContent = ' Expand All';
            }
        });
    });

    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxDots = document.getElementById('lightboxDots');

    let currentImages = [];
    let currentIndex = 0;

    function openLightbox(images, index) {
        currentImages = images;
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightbox() {
        if (currentImages.length === 0) return;
        lightboxImg.src = currentImages[currentIndex].src;
        lightboxImg.alt = currentImages[currentIndex].alt || 'Image';

        // Update dots
        lightboxDots.innerHTML = '';
        currentImages.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'lightbox-dot' + (i === currentIndex ? ' active' : '');
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateLightbox();
            });
            lightboxDots.appendChild(dot);
        });
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightboxPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightbox();
    });

    lightboxNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightbox();
    });

    // Close lightbox on overlay click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox on Escape key
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            updateLightbox();
        }
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % currentImages.length;
            updateLightbox();
        }
    });

    // Attach click to all scrollable images
    document.querySelectorAll('.image-scroll-container img').forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            const container = img.closest('.image-scroll-container');
            const images = Array.from(container.querySelectorAll('img'));
            const index = images.indexOf(img);
            openLightbox(images, index);
        });
    });

    // --- Mobile Menu ---
    // Dynamically inject mobile button and overlay
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(mobileBtn);

    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-overlay';
    document.body.appendChild(mobileOverlay);

    const leftPanel = document.getElementById('leftPanel');

    function openMobileMenu() {
        leftPanel.classList.add('open');
        mobileOverlay.classList.add('active');
    }

    function closeMobileMenu() {
        leftPanel.classList.remove('open');
        mobileOverlay.classList.remove('active');
    }

    mobileBtn.addEventListener('click', () => {
        if (leftPanel.classList.contains('open')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    mobileOverlay.addEventListener('click', closeMobileMenu);
});
