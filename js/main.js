
           
           // ===================
            // ================================= 
// Burger Menu Functionality
// =================================

const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-links a');
  
           
// Toggle menu عند الضغط على البرجر
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // منع الـ scroll لما القائمة تكون مفتوحة
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// إغلاق القائمة عند الضغط على أي لينك
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
        if (navMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// إغلاق القائمة عند تكبير الشاشة
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});





            // ✍️ تأثير الكتابة مع صوت الكتابة
            const textElement = document.getElementById("typing-text");
            const logo = document.querySelector(".logo-box");
            const introScreen = document.querySelector(".intro-screen");

            const sentences = [
                "Awad Academy",
            ];

            let index = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingFinished = false;

            // صوت الكتابة 
            const typingSound = new Audio("sounds/typing.wav");
            typingSound.volume = 0.2;
            typingSound.playbackRate = 1.2; 
            typingSound.preload = "auto";

            // تشغيل الصوت بشكل مضبوط
            function playTypingSound() {
                if (typingFinished) return;

                // نرجّع الصوت لأول جزء بس لما يبدأ حرف جديد
                typingSound.currentTime = 0;
                typingSound.play().catch(() => { });
            }

            function typeEffect() {
                const current = sentences[index];

                if (!isDeleting) {
                    textElement.textContent = current.substring(0, charIndex + 1);
                    playTypingSound();
                    charIndex++;

                    if (charIndex === current.length) {
                        setTimeout(() => isDeleting = true, 600);
                    }

                } else {
                    textElement.textContent = current.substring(0, charIndex - 1);
                    charIndex--;

                    if (charIndex === 0) {
                        isDeleting = false;
                        index++;
                    }

                    if (index === sentences.length) {
                        typingFinished = true;

                        // وقف الصوت نهائيًا
                        typingSound.pause();
                        typingSound.currentTime = 0;

                        setTimeout(() => {
                            logo.classList.add("show");

                            setTimeout(() => {
                                introScreen.classList.add("fade-out");
                            }, 1200);

                        }, 500);

                        return;
                    }
                }

                setTimeout(typeEffect, isDeleting ? 80 : 100);
            }

            typeEffect();



             // Theme Toggle
            const themeToggle = document.getElementById('themeToggle');
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const isDark = document.body.classList.contains('dark-mode');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            });
        

            // AOS animation
            AOS.init();