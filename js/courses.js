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

// =================================
// JSON Load + Courses Rendering
// =================================

let coursesData = {};
let currentCategory = 'all';
let searchQuery = '';

// تحميل ملف JSON من فولدر data
async function loadJSON() {
    try {
        const response = await fetch('../data/courses.json');
        coursesData = await response.json();

        loadCategories();
        loadCourses();
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    await loadJSON();   
    setupEventListeners();

    AOS.init({
        duration: 800,
        once: true
    });
});

// Load Categories
function loadCategories() {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = coursesData.categories.map(cat => `
        <button class="category-btn ${cat.id === 'all' ? 'active' : ''}" 
                data-category="${cat.id}">
            <i class="fas ${cat.icon}"></i> ${cat.name}
        </button>
    `).join('');
}

// Load Courses
function loadCourses() {
    const grid = document.getElementById('coursesGrid');
    const filtered = coursesData.courses.filter(course => {
        const matchCategory = currentCategory === 'all' || course.category === currentCategory;
        const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>No courses found</h3>
                <p>Try searching with different keywords</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(course => `
        <div class="course-card" data-course-id="${course.id}" data-aos="fade-up">
            <img src="${course.thumbnail}" alt="${course.title}" class="course-thumbnail">
            <div class="course-content">
                <div class="course-header">
                    <span class="course-level">${course.level}</span>
                </div>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-stats">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${course.rating}</span>
                    </div>
                    <div class="students">
                        <i class="fas fa-users"></i>
                        ${course.students} students
                    </div>
                </div>
                <div class="course-meta">
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${course.duration}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-play-circle"></i>
                        <span>${course.playlist.length} videos</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup Event Listeners
function setupEventListeners() {

    // Category Filter
    document.getElementById('categories').addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            loadCourses();
        }
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        loadCourses();
    });

    // Course Card Click
    document.getElementById('coursesGrid').addEventListener('click', (e) => {
        const card = e.target.closest('.course-card');
        if (card) {
            const courseId = parseInt(card.dataset.courseId);
            openCourseModal(courseId);
        }
    });

    // Modal Close
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('courseModal').addEventListener('click', (e) => {
        if (e.target.id === 'courseModal') closeModal();
    });

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
}

// Open Course Modal
function openCourseModal(courseId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) return;

    document.getElementById('modalTitle').textContent = course.title;
    document.getElementById('modalDescription').textContent = course.description;

    const playlistHTML = course.playlist.map((video, index) => `
        <div class="video-item" onclick="window.open('${video.videoUrl}', '_blank')">
            <div class="video-number">${index + 1}</div>
            <div class="video-info">
                <h4>${video.title}</h4>
                <span class="video-duration">
                    <i class="fas fa-clock"></i> ${video.duration }
                </span>
            </div>
            <span class="video-badge ${video.free ? 'badge-free' : 'badge-premium'}">
                ${video.free ? 'Free' : 'Premium'}
            </span>
            <i class="fas fa-play-circle play-icon"></i>
        </div>
    `).join('');

    document.getElementById('playlist').innerHTML = playlistHTML;
    document.getElementById('courseModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    document.getElementById('courseModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
