/**
 * NEXTGEN IICONIC 2026
 * Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Adjust scroll position for sticky navbar
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Scroll Reveal Animation for elements
    const elementsToAnimate = document.querySelectorAll(
        '.section-heading, .lead-text, .about-text, .about-image-grid, .timeline-item, .slider-item, .pricing-card, .exp-card, .team-card, .finale-content, .contact-card, .vision-content > p'
    );
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        
        // Add staggered delays for repeated items
        if(el.classList.contains('slider-item') || el.classList.contains('timeline-item') || el.classList.contains('exp-card') || el.classList.contains('team-card')) {
            const delayVal = ((index % 4) + 1) * 100;
            el.style.transitionDelay = `${delayVal}ms`;
        }
    });

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    elementsToAnimate.forEach(el => {
        revealOnScroll.observe(el);
    });


    // 4. Mobile Menu Toggle (Basic Implementation)
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Very simple toggle logic, could be expanded with a full mobile menu overlay
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(10, 10, 10, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            }
        });
    }

    // 5. Background Music Toggle
    const musicToggleBtn = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isMusicPlaying = false;

    if (musicToggleBtn && bgMusic) {
        musicToggleBtn.addEventListener('click', () => {
            if (isMusicPlaying) {
                bgMusic.pause();
                musicToggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                musicToggleBtn.classList.remove('playing');
            } else {
                // If there's an actual src, play it. Using catch for browser auto-play policies.
                if(bgMusic.src && bgMusic.src !== window.location.href) {
                    bgMusic.play().catch(e => console.log("Audio play prevented by browser policy", e));
                }
                musicToggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                musicToggleBtn.classList.add('playing');
            }
            isMusicPlaying = !isMusicPlaying;
        });
    }

    // 6. Form Submission Handler
    const regForm = document.getElementById('regForm');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, send data to server
            const btn = regForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            btn.style.opacity = '0.8';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Application Submitted!';
                btn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
                regForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // 7. Initialize Minimalistic Golden Particles
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 40,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#d4af37" },
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false }
                },
                "line_linked": { "enable": false },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": false },
                    "onclick": { "enable": false },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    }
});
