# 📘 Awad Academy — Full SDLC Documentation

> **Project Name:** Awad Academy  
> **Version:** 1.0  
> **Author:** Mahmoud Awad (Front-End Developer & Content Creator)  
> **Live Demo:** [https://awadcoding.github.io/awad-academy/](https://awadcoding.github.io/awad-academy/)  
> **Repository:** [GitHub - AwadCoding/awad-academy](https://github.com/AwadCoding/awad-academy)  
> **Document Created:** April 2026  
> **Last Updated:** April 2026

---

## 📑 Table of Contents

1. [Phase 1: Planning & Requirements Analysis](#phase-1-planning--requirements-analysis)
2. [Phase 2: System Design](#phase-2-system-design)
3. [Phase 3: Implementation (Development)](#phase-3-implementation-development)
4. [Phase 4: Testing & Quality Assurance](#phase-4-testing--quality-assurance)
5. [Phase 5: Deployment](#phase-5-deployment)
6. [Phase 6: Maintenance & Future Enhancements](#phase-6-maintenance--future-enhancements)
7. [Appendices](#appendices)

---

---

# Phase 1: Planning & Requirements Analysis

## 1.1 Project Overview

**Awad Academy** is a modern educational web platform designed to deliver structured learning content in web development, programming, design, and productivity tools. The platform serves as the primary web interface for the Awad Coding YouTube channel, connecting students with courses and tutorials in an organized and professional manner.

### 🎯 Main Objective

Build an educational website that showcases YouTube courses in a structured and visually appealing way, while delivering a smooth and modern user experience that includes:
- Course display with full metadata (duration, rating, student count)
- Real-time search and category-based filtering system
- Dark Mode with persistent user preference
- Welcome screen with Typing Animation effect
- Fully responsive design across all devices

---

## 1.2 Stakeholders

| Role | Person / Entity | Responsibility |
|------|----------------|----------------|
| Owner / Developer | Mahmoud Awad | Full design & development of the platform |
| End Users | Programming & tech students | Browse courses and learn |
| Content Platform | YouTube | Hosting the educational video content |

---

## 1.3 Functional Requirements

| # | Requirement | Description | Priority |
|---|-------------|-------------|----------|
| FR-01 | Home Page | Display Hero Section + Latest Courses + Recommendations + About + Contact | High |
| FR-02 | Courses Page | Display all courses with dynamic search and category filtering | High |
| FR-03 | Category System | Filter courses by category (Web Dev, Programming, Tools, Frameworks) | High |
| FR-04 | Search System | Real-time search across course titles and descriptions | High |
| FR-05 | Course Detail Modal | Display full course details with video playlist | High |
| FR-06 | Dark/Light Mode | Theme toggle with localStorage persistence | Medium |
| FR-07 | Welcome Screen | Intro screen with typing animation + logo reveal | Medium |
| FR-08 | Mobile Navigation | Burger Menu for small devices with overlay backdrop | High |
| FR-09 | Scroll Animations | Motion effects on scroll using AOS.js | Low |
| FR-10 | Contact Section | Display contact information (email, WhatsApp, portfolio link) | Medium |

---

## 1.4 Non-Functional Requirements

| # | Requirement | Description |
|---|-------------|-------------|
| NFR-01 | Performance | Page load time under 3 seconds |
| NFR-02 | Compatibility | Works on Chrome, Firefox, Safari, Edge |
| NFR-03 | Responsiveness | Responsive design for Mobile, Tablet, and Desktop |
| NFR-04 | SEO | Search engine optimization with Open Graph Tags |
| NFR-05 | UX/UI | Smooth user experience with animations and visual effects |
| NFR-06 | Maintainability | Clean, well-commented code with separation of concerns (HTML, CSS, JS) |
| NFR-07 | Security | No sensitive data — fully Static Site |

---

## 1.5 Technology Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Markup | HTML5 | 5 | Page structure |
| Styling | CSS3 | 3 | Design and layout |
| Logic | JavaScript (Vanilla) | ES6+ | Interactivity and logic |
| Animation | AOS.js | Latest | Scroll-based animations |
| Icons | Font Awesome | 5.15.4 / 6.5.1 | Icon library |
| Data | JSON | — | Course data storage |
| Storage | localStorage | Web API | Theme preference persistence |
| Audio | HTML5 Audio API | — | Typing sound effect |
| Hosting | GitHub Pages | — | Free static hosting |

---

---

# Phase 2: System Design

## 2.1 System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                      │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │              Presentation Layer                    │   │
│  │                                                    │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────┐   │   │
│  │  │index.html│  │courses   │  │  CSS Files   │   │   │
│  │  │(Home)    │  │.html     │  │  (3 files)   │   │   │
│  │  └──────────┘  └──────────┘  └──────────────┘   │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │              Logic Layer (JavaScript)              │   │
│  │                                                    │   │
│  │  ┌──────────┐  ┌──────────┐                       │   │
│  │  │ main.js  │  │courses.js│                       │   │
│  │  │(Home)    │  │(Courses) │                       │   │
│  │  └──────────┘  └──────────┘                       │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │              Data Layer                            │   │
│  │                                                    │   │
│  │  ┌──────────────┐  ┌──────────────────┐          │   │
│  │  │courses.json  │  │  localStorage    │          │   │
│  │  │(Courses Data)│  │  (Theme Pref)    │          │   │
│  │  └──────────────┘  └──────────────────┘          │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │           External Services (CDN)                  │   │
│  │                                                    │   │
│  │  • AOS.js (Animation Library)                      │   │
│  │  • Font Awesome (Icon Library)                     │   │
│  │  • YouTube (Video Hosting)                         │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Architectural Pattern: Static Multi-Page Application (MPA)

The website follows a **Static Multi-Page Architecture**:
- **No Backend or Database** — all data lives in a static JSON file
- **No Server-Side Rendering** — everything runs client-side in the browser
- **Separation of Concerns** — clear separation between HTML, CSS, and JS

---

## 2.2 Project Structure

```
awad-academy/
│
├── 📄 index.html                    # Home Page (292 lines)
├── 📄 courses.html                  # Courses Page (164 lines)
├── 📄 README.md                     # Project Documentation (137 lines)
│
├── 📁 css/                          # Stylesheets
│   ├── 📄 Base.css                  # Base styles & design tokens (574 lines)
│   ├── 📄 style.css                 # Home page styles (770 lines)
│   └── 📄 courses.css               # Courses page styles (439 lines)
│
├── 📁 js/                           # JavaScript files
│   ├── 📄 main.js                   # Home page logic (152 lines)
│   └── 📄 courses.js                # Courses page logic (236 lines)
│
├── 📁 data/                         # Data files
│   └── 📄 courses.json              # Course data (82 lines, 4 courses)
│
├── 📁 images/                       # Image assets
│   ├── 📄 favicon.ico               # Browser tab icon
│   ├── 📄 logo.jpeg                 # Academy logo
│   ├── 📄 hero.png                  # Hero Section image
│   ├── 📄 awad-about.png            # Personal photo
│   ├── 📁 Playlists/                # Course thumbnail images
│   │   ├── Web_dev.png
│   │   ├── Notion.png
│   │   ├── Basics_cpp.png
│   │   └── Seteps_programing.png
│   ├── 📁 Recommendation/           # Recommendation images
│   │   ├── Noha Azzam.png
│   │   └── MahmoudAllam.jpg
│   └── 📁 image-seo/               # Open Graph images for social sharing
│       ├── home.png
│       └── courses.png
│
├── 📁 sounds/                       # Audio files
│   └── 📄 typing.wav                # Typing sound effect (452 KB)
│
└── 📁 .git/                         # Git Version Control
```

---

## 2.3 Design System

### 2.3.1 Color Palette

The project uses a comprehensive **Design Token** system stored in CSS Custom Properties:

```
🎨 PRIMARY COLORS
├── --primary:         #02754b     (Main Green)
├── --primary-dark:    #003e1f     (Dark Green)
│
├── 🔼 TINTS (Lighter Variants)
│   ├── --primary-tint-1:  #2b8f62
│   ├── --primary-tint-2:  #5cb98a
│   ├── --primary-tint-3:  #a7e3c5
│   └── --primary-tint-4:  #e8f9f1
│
├── 🔽 SHADES (Darker Variants)
│   ├── --primary-shade-1: #02603f
│   ├── --primary-shade-2: #014d32
│   ├── --primary-shade-3: #00321b
│   └── --primary-shade-4: #001e0f
│
└── ✨ ACCENT COLORS
    ├── --accent-gold:   #d4c5ad
    ├── --accent-cream:  #faf8f5
    ├── --accent-grey:   #4c5f4e
    └── --accent-mint:   #d5f2e3
```

### 2.3.2 Light vs Dark Mode

| Property | Light Mode 🌞 | Dark Mode 🌙 |
|----------|---------------|--------------|
| `--bg` | `#faf8f5` | `#001e0f` |
| `--bg-header` | `rgba(250,248,245,0.8)` | `rgba(0,30,15,0.8)` |
| `--bg-card` | `#ffffff` | `#00321b` |
| `--text` | `#003e1f` | `#e8f9f1` |
| `--text-secondary` | `#4c5f4e` | `#d5f2e3` |
| `--border` | `rgba(0,0,0,0.1)` | `rgba(255,255,255,0.1)` |
| `--shadow` | `0 4px 20px rgba(0,0,0,0.08)` | `0 4px 20px rgba(0,0,0,0.4)` |

### 2.3.3 Typography System

```
📝 TYPOGRAPHY
├── Font Family:
│   ├── --font-main: 'Inter', 'Poppins', sans-serif
│   └── --font-alt:  'Merriweather', serif
│
├── Font Sizes:
│   ├── --fs-xxl:  48px    (Hero Titles)
│   ├── --fs-xl:   36px    (Section Titles)
│   ├── --fs-lg:   28px    (Subtitles)
│   ├── --fs-md:   20px    (Important Text)
│   ├── --fs-base: 16px    (Body Text)
│   ├── --fs-sm:   14px    (Small Text)
│   └── --fs-xs:   12px    (Badges)
│
├── Font Weights:
│   ├── --fw-regular:  400
│   ├── --fw-medium:   500
│   ├── --fw-semibold: 600
│   └── --fw-bold:     700
│
└── Line Heights:
    ├── --lh-tight:  1.1
    ├── --lh-normal: 1.5
    └── --lh-loose:  1.8
```

### 2.3.4 Spacing System

```
📐 SPACING SCALE (4px Base Unit)
├── --space-1:   4px
├── --space-2:   8px
├── --space-3:  12px
├── --space-4:  16px
├── --space-5:  20px
├── --space-6:  24px
├── --space-7:  32px
├── --space-8:  40px
├── --space-9:  48px
├── --space-10: 64px
├── --space-11: 80px
└── --space-12: 96px
```

### 2.3.5 Other Design Tokens

```
🔲 BORDER RADIUS
├── --radius-sm:    4px
├── --radius-md:    8px
├── --radius-lg:   16px
├── --radius-xl:   24px
└── --radius-round: 50%

🔵 SHADOWS
├── --shadow-sm:          0 1px 4px rgba(0,0,0,0.08)
├── --shadow-md:          0 4px 16px rgba(0,0,0,0.12)
├── --shadow-lg:          0 8px 30px rgba(0,0,0,0.2)
├── --shadow-glow-primary: 0 0 20px #02754b55
├── --shadow-glow-accent:  0 0 20px #d4c5ad55
└── --text-shadow:         2px 2px 10px black

⏱️ TRANSITIONS
├── --transition-fast:    all 0.2s ease
├── --transition-medium:  all 0.4s ease
└── --transition-slow:    all 1.6s ease

📦 LAYOUT
├── --container-width:  1200px
├── --section-padding:  80px
└── --grid-gap:         24px
```

---

## 2.4 Page Sitemap

```
🌐 Awad Academy
│
├── 📄 index.html (Home Page)
│   ├── #intro     → Welcome Screen (Intro Screen)
│   ├── #hero      → Hero Section
│   ├── Latest Courses → Featured Courses Grid
│   ├── Recommendations → Career Recommendations
│   ├── #about     → About Me Section
│   │   ├── My Story → Personal Journey
│   │   ├── Stats   → Statistics (Projects, Videos, Experience)
│   │   └── Skills  → Skill Cards (Web Dev, React, UI/UX, Content)
│   ├── #contact   → Contact Section
│   └── Footer     → Footer with Social Media Links
│
└── 📄 courses.html (Courses Page)
    ├── Page Header → Page Title & Subtitle
    ├── Controls    → Search Input + Category Filter Buttons
    ├── Courses Grid → Dynamic Course Cards (loaded from JSON)
    ├── Modal       → Course Detail Popup Window
    └── Footer      → Footer with Social Media Links
```

---

## 2.5 Data Model

### 2.5.1 Course Object Structure

```json
{
  "id": number,              // Unique identifier
  "title": string,           // Course title
  "description": string,     // Course description
  "thumbnail": string,       // Path to course thumbnail image
  "level": string,           // Difficulty level (beginner, intermediate, advanced)
  "duration": string,        // Total duration
  "students": number,        // Number of enrolled students
  "rating": number,          // Rating out of 5
  "category": string,        // Category identifier
  "playlist": [              // Array of video items
    {
      "id": number,
      "title": string,
      "duration": string,
      "videoUrl": string,     // YouTube video URL
      "free": boolean        // Free or premium content
    }
  ]
}
```

### 2.5.2 Category Object Structure

```json
{
  "id": string,     // Category identifier (e.g., "web-development")
  "name": string,   // Display name (e.g., "Web Development")
  "icon": string    // Font Awesome icon class
}
```

### 2.5.3 Current Data Summary

| Course | Category | Videos | Duration | Rating |
|--------|----------|--------|----------|--------|
| Web Dev From Zero | web-development | 4 videos | 5 hours | 4.8 |
| Learning Notion | tools | 7 videos | 3 hours | 4.9 |
| Basics Programming in C++ | programming | 5 videos | 1.5 hours | 4.9 |
| Steps in Programming World | programming | 3 videos | 1 hour | 4.7 |

**Available Categories:** All, Web Development, Programming, Frameworks, Tools

---

---

# Phase 3: Implementation (Development)

## 3.1 CSS Architecture

### 3.1.1 Base.css — Foundation File (574 lines)

**Role:** Contains all shared base styles and design tokens used across every page.

| Section | Lines | Purpose |
|---------|-------|---------|
| CSS Custom Properties (`:root`) | 1–124 | All design tokens (colors, fonts, spacing, shadows) |
| Dark Mode Override (`.dark-mode`) | 125–134 | Variable overrides for dark theme |
| CSS Reset | 135–148 | Reset margin/padding/box-sizing + smooth scroll |
| Body Defaults | 150–159 | Base font, background, color, text-transform |
| Links & Headings & Paragraphs | 161–196 | Global element styling |
| Container | 198–204 | Main container (max-width: 1200px + auto center) |
| Special Names & Contact Info | 206–239 | Custom styles for names and email/WhatsApp display |
| Scrollbar Customization | 246–261 | Custom scrollbar styling + text selection |
| Theme Toggle Button | 264–305 | Fixed bottom-left theme toggle button |
| Header & Navigation | 307–520 | Fixed header + mobile slide-in navigation |
| CTA Button | 522–547 | Shared Call-to-Action button component |
| Footer | 548–573 | Footer styling with social media links |

**CSS Techniques Used:**
- ✅ CSS Custom Properties (Variables)
- ✅ Flexbox Layout
- ✅ Backdrop Filter (blur effect)
- ✅ CSS Transitions & Transforms
- ✅ Media Queries (Responsive)
- ✅ Pseudo-elements (::before for overlay)
- ✅ CSS Animations (@keyframes fadeIn)
- ✅ Custom Scrollbar (::-webkit-scrollbar)
- ✅ Custom Text Selection (::selection)

---

### 3.1.2 style.css — Home Page Styles (770 lines)

| Section | Lines | Purpose |
|---------|-------|---------|
| Intro Screen | 10–70 | Full-screen welcome overlay (Fixed, z-index: 9999) |
| Typing Animation | 24–44 | Typewriter effect with cursor blinking |
| Logo Box Animation | 47–70 | Logo reveal with scale + fade transition |
| Header (Duplicate) | 72–285 | Re-declared header styles (can be optimized) |
| Hero Section | 287–343 | CSS Grid layout with floating animation |
| About Section | 346–457 | "Who Am I" section with Stats Cards |
| Skills Section | 460–491 | 4-card skill grid |
| Recommendations | 493–554 | Professional recommendations section |
| Latest Courses | 555–600 | Latest courses grid with hover effects |
| Contact Section | 601–630 | Contact information layout |
| Cards & Buttons | 632–706 | Generic card and button components |
| Toggle System | 708–764 | Dark/Light mode toggle switch |

**Defined Animations:**
```css
/* Continuous floating effect */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-20px); }
}

/* Cursor blink effect */
@keyframes cursorBlink {
    0%, 50%  { border-color: #fff; }
    51%, 100% { border-color: transparent; }
}
```

---

### 3.1.3 courses.css — Courses Page Styles (439 lines)

| Section | Lines | Purpose |
|---------|-------|---------|
| Page Header | 1–24 | Page title area (gradient background, rounded bottom corners) |
| Search & Filter Controls | 26–95 | Search input box + category filter buttons |
| Course Cards Grid | 97–200 | Responsive course grid (auto-fill, 350px minimum) |
| Course Card Details | 105–200 | Card content (thumbnail, level badge, stats, meta info) |
| Modal System | 202–281 | Fixed overlay popup (backdrop blur, slide-down animation) |
| Playlist / Video Items | 294–371 | Individual video items inside the modal |
| Loading State | 373–389 | Spinner loading indicator |
| Empty State | 391–407 | "No courses found" message |
| Responsive | 410–439 | Mobile-specific adjustments |

**Courses Page Animations:**
```css
/* Modal slide-down entrance */
@keyframes slideDown {
    from { transform: translateY(-50px); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
}

/* Loading spinner rotation */
@keyframes spin {
    100% { transform: rotate(360deg); }
}
```

---

## 3.2 JavaScript Implementation

### 3.2.1 main.js — Home Page Logic (152 lines)

#### Core Components:

**1. Burger Menu System (Lines 1–53)**

```
📋 Burger Menu Flow:
┌─────────────┐
│ Click Burger│
└──────┬──────┘
       │
       ▼
┌──────────────┐     ┌───────────────────┐
│Toggle .active│────▶│ body overflow:    │
│on Burger +Nav│     │ hidden (if open)  │
└──────────────┘     │ auto (if closed)  │
                     └───────────────────┘

Menu closes when:
• Any navigation link is clicked
• User clicks outside the menu (document click)
• Window is resized above 768px
```

**2. Typing Animation Engine (Lines 59–132)**

```
📝 Typing Animation Flow:
┌─────────────┐
│ Start       │
│ typeEffect()│
└──────┬──────┘
       │
       ▼
┌──────────────┐  charIndex < length   ┌──────────────┐
│  Type char   │ ◀──────────────────── │ isDeleting =  │
│  + play sound│                       │   false       │
└──────┬───────┘                       └───────────────┘
       │ charIndex === length
       ▼
┌──────────────┐                       ┌───────────────┐
│ Wait 600ms   │ ─────────────────────▶│ isDeleting =  │
│              │                       │   true        │
└──────────────┘                       └───────┬───────┘
                                               │
                                               ▼
                                       ┌───────────────┐
                                       │ Delete chars  │
                                       │ one by one    │
                                       └───────┬───────┘
                                               │ charIndex === 0
                                               ▼
                                       ┌───────────────┐
                                       │ All sentences │
                                       │ done?         │
                                       │ → Show Logo   │
                                       │ → Fade Screen │
                                       └───────────────┘
```

**State Variables:**
| Variable | Type | Initial Value | Purpose |
|----------|------|---------------|---------|
| `sentences` | Array | `["Awad Academy"]` | Text strings to be typed |
| `index` | Number | `0` | Current sentence index |
| `charIndex` | Number | `0` | Current character index |
| `isDeleting` | Boolean | `false` | Whether characters are being deleted |
| `typingFinished` | Boolean | `false` | Whether the animation is complete |

**Audio Configuration:**
| Property | Value | Purpose |
|----------|-------|---------|
| `volume` | `0.2` | Sound level (20%) |
| `playbackRate` | `1.2` | Playback speed (20% faster) |
| `preload` | `"auto"` | Pre-load the audio file |

**3. Theme Toggle (Lines 136–148)**

```
🌓 Theme Toggle Flow:
┌──────────────┐
│  Page Load   │
└──────┬───────┘
       │
       ▼
┌──────────────────────────┐
│ Check localStorage       │
│ theme === 'dark'?        │
├───────┬──────────────────┤
│  Yes  │       No         │
│  ▼    │       ▼          │
│ Add   │  Keep light      │
│ .dark │  mode            │
│-mode  │                  │
│ + ☀️  │  + 🌙            │
└───────┴──────────────────┘

On button click:
1. Toggle .dark-mode class on body
2. Save preference to localStorage
3. Update icon (☀️ ↔ 🌙)
```

**4. AOS Initialization (Line 152)**
```javascript
AOS.init();  // Initialize scroll animation library with default settings
```

---

### 3.2.2 courses.js — Courses Page Logic (236 lines)

#### Core Components:

**1. Burger Menu (Lines 1–48)** — Same code as in main.js (duplicated).

**2. Data Loading Pipeline (Lines 50–80)**

```
📦 Data Loading Flow:

┌─────────────────┐
│ DOMContentLoaded│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  loadJSON()     │
│  fetch(courses  │ ← async/await
│  .json)         │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌────────┐ ┌───────────────┐
│ Parse  │ │ Error?        │
│ JSON   │ │ console.error │
└───┬────┘ └───────────────┘
    │
    ▼
┌────────────────┐
│loadCategories()│ → Render category filter buttons
└───────┬────────┘
        ▼
┌────────────────┐
│ loadCourses()  │ → Render course cards
└───────┬────────┘
        ▼
┌─────────────────────┐
│setupEventListeners()│ → Attach all event handlers
└─────────────────────┘
```

**3. Category Filter System (Lines 82–91)**

```javascript
// State Variables:
let currentCategory = 'all';  // Currently selected category
let searchQuery = '';          // Current search query text

// Filter Logic (inside loadCourses):
// matchCategory → Course belongs to selected category or "all"
// matchSearch   → Title or description contains search text
```

**4. Course Card Rendering (Lines 94–146)**

```
🎴 Course Card Structure:
┌─────────────────────────────────┐
│  📸 Thumbnail (200px height)    │
├─────────────────────────────────┤
│  🏷️ Level Badge (beginner)      │
│  📝 Title                       │
│  📄 Description                 │
│                                 │
│  ⭐ Rating    👥 Students       │
│  ────────────────────────       │
│  ⏱️ Duration  ▶️ Videos count   │
└─────────────────────────────────┘
```

**5. Modal System (Lines 198–235)**

```
📺 Modal Interaction Flow:
┌────────────────┐
│ Click Course   │
│ Card           │
└───────┬────────┘
        │
        ▼
┌────────────────────────────────┐
│ openCourseModal(courseId)       │
│ 1. Find course object by ID    │
│ 2. Set modal title & desc      │
│ 3. Render playlist items       │
│ 4. Add .active class to modal  │
│ 5. Lock body scroll            │
└────────────────────────────────┘

📺 Video Item Structure:
┌─────────────────────────────────┐
│ 🔢 Number │ 📝 Title     │ 🟢  │
│            │ ⏱️ Duration  │Badge│
│            │              │ ▶️  │
└─────────────────────────────────┘

Modal closes via:
• ✖ Clicking the close button
• 🖱️ Clicking outside the modal content
• ⌨️ Pressing the ESC key
```

**6. Event Delegation Pattern**

```javascript
// Instead of attaching event listeners to each card individually:
// ❌ cards.forEach(card => card.addEventListener('click', ...))

// Event Delegation is used for better performance:
// ✅ coursesGrid.addEventListener('click', (e) => {
//     const card = e.target.closest('.course-card');
//     ... 
// });
```

---

## 3.3 SEO Implementation

### 3.3.1 Home Page (index.html)

```html
<!-- Meta Keywords -->
<meta name="keywords" content="Awad Academy, programming, 
      web development, design, personal pardning, career goals">

<!-- Meta Description -->
<meta name="description" content="Awad Academy - platform for 
      web development, programming, design, and personal pardning.">

<!-- Open Graph (Social Sharing) -->
<meta property="og:image" content="images/image-seo/home.png">
<meta property="og:title" content="Awad Academy - platform...">
<meta property="og:description" content="Join Awad Academy...">

<!-- Favicon -->
<link rel="icon" type="image/png" href="images/favicon.ico">
```

### 3.3.2 Courses Page (courses.html)

```html
<!-- Extended SEO Tags -->
<meta name="author" content="Awad Academy">
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow">
<meta name="google" content="nositelinkssearchbox">
<meta name="google" content="notranslate">

<!-- Mobile Web App Meta -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Awad Academy">

<!-- Microsoft Tile -->
<meta name="msapplication-TileColor" content="#2b5797">
<meta name="theme-color" content="#2b5797">

<!-- Open Graph -->
<meta property="og:image" content="images/image-seo/courses.png">
<meta property="og:title" content="Programming Courses - Awad Academy">
```

---

## 3.4 Responsive Breakpoints

| Breakpoint | Target | Key Changes |
|------------|--------|-------------|
| `> 769px` | Desktop | Horizontal navigation, full-width layout |
| `≤ 768px` | Tablet/Mobile | Burger menu shown, vertical nav, sliding sidebar |
| `≤ 900px` | Tablet | About image: 400x400px with border |
| `≤ 600px` | Small Mobile | About image: 300x300px, recommendation cards stack vertically |

---

## 3.5 External Dependencies

| Library | Purpose | Loading Method | URL |
|---------|---------|---------------|-----|
| AOS.js | Scroll Animations | CDN (unpkg) | `unpkg.com/aos@next/dist/aos.css` + `.js` |
| Font Awesome 5.15.4 | Icons (Home Page) | CDN (cdnflare) | `cdnjs.cloudflare.com/...5.15.4/...` |
| Font Awesome 6.5.1 | Icons (Courses Page) | CDN (cdnflare) | `cdnjs.cloudflare.com/...6.5.1/...` |

> ⚠️ **Note:** There is a Font Awesome version mismatch between pages (5.15.4 on Home vs 6.5.1 on Courses).

---

---

# Phase 4: Testing & Quality Assurance

## 4.1 Testing Strategy

Since the project is a **Static Frontend** with no Backend or Database, the testing plan focuses on visual, functional, and integration testing:

### 4.1.1 Manual Testing Checklist

| # | Test Case | Type | Status |
|---|-----------|------|--------|
| T-01 | Home page loads without errors | Smoke | ✅ |
| T-02 | Welcome screen animation (Typing + Logo + Fade-out) | Visual | ✅ |
| T-03 | Burger menu opens and closes correctly | Functional | ✅ |
| T-04 | Menu closes when clicking outside | Functional | ✅ |
| T-05 | Menu closes when window resizes above 768px | Functional | ✅ |
| T-06 | Dark/Light mode toggle works | Functional | ✅ |
| T-07 | Theme preference persists via localStorage | Functional | ✅ |
| T-08 | Courses load correctly from JSON file | Integration | ✅ |
| T-09 | Category filter updates course grid | Functional | ✅ |
| T-10 | Search filters courses in real-time | Functional | ✅ |
| T-11 | Course modal opens and displays details | Functional | ✅ |
| T-12 | Modal closes via X button / outside click / ESC key | Functional | ✅ |
| T-13 | Video links open YouTube in a new tab | Integration | ✅ |
| T-14 | AOS scroll animations trigger correctly | Visual | ✅ |
| T-15 | Typing sound plays and stops properly | Audio | ✅ |
| T-16 | Responsive layout on mobile (375px) | UI | ✅ |
| T-17 | Responsive layout on tablet (768px) | UI | ✅ |
| T-18 | Responsive layout on desktop (1200px+) | UI | ✅ |
| T-19 | Empty state displays when no courses match | Edge Case | ✅ |
| T-20 | Loading state appears before data is fetched | UX | ✅ |

---

## 4.2 Code Quality Analysis

### 4.2.1 Strengths ✅

| # | Strength | Description |
|---|----------|-------------|
| 1 | Comprehensive Design System | Consistent use of CSS Variables across all files |
| 2 | Semantic HTML | Proper use of `<header>`, `<section>`, `<nav>`, `<footer>` |
| 3 | Event Delegation | Used in the courses page for better performance |
| 4 | Async/Await | Modern and clean data loading pattern |
| 5 | High UX Quality | Scroll lock, modal UX, empty states, loading states |
| 6 | Polished Animations | Visually appealing effects without over-engineering |
| 7 | Complete Dark Mode | Smooth transition with preference persistence |
| 8 | Well-Commented Code | Comments provided in both Arabic and English |

### 4.2.2 Issues Found ⚠️

| # | Issue | File | Severity | Description |
|---|-------|------|----------|-------------|
| 1 | Duplicate `<body>` tag | `index.html` L29+L31 | 🔴 High | There are two opening `<body>` tags |
| 2 | Duplicated Header/Nav CSS | `Base.css` + `style.css` | 🟡 Medium | Header and navigation CSS is repeated in both files |
| 3 | Duplicated Burger Menu JS | `main.js` + `courses.js` | 🟡 Medium | Burger menu code is copy-pasted (Lines 1–48 in both) |
| 4 | Font Awesome Version Mismatch | `index.html` vs `courses.html` | 🟡 Medium | Version 5.15.4 on Home vs 6.5.1 on Courses |
| 5 | Missing Error UI | `courses.js` | 🟢 Low | JSON fetch errors only log to console, no UI feedback |
| 6 | Incorrect `lang` attribute | Both pages | 🟡 Medium | `lang="ar"` with English content and `dir="ltr"` (should be `lang="en"`) |
| 7 | Typo in meta tags | `index.html` L9, L11 | 🟢 Low | "pardning" instead of "branding" |
| 8 | Hardcoded colors | `style.css` | 🟢 Low | Some colors are hardcoded instead of using CSS variables |
| 9 | Weak alt text | `courses.js` | 🟢 Low | Alt text just uses the course title |
| 10 | No error boundary | `courses.js` | 🟢 Low | No try/catch around individual card rendering |

---

---

# Phase 5: Deployment

## 5.1 Deployment Platform

| Property | Value |
|----------|-------|
| Platform | GitHub Pages |
| URL | `https://awadcoding.github.io/awad-academy/` |
| Branch | `main` (or `gh-pages`) |
| Build Step | None required — directly serves static files |
| SSL | ✅ Free HTTPS from GitHub |
| CDN | ✅ GitHub Pages uses Fastly CDN |

## 5.2 Deployment Architecture

```
┌──────────────┐      ┌──────────────┐      ┌───────────────┐
│   Developer  │ push │   GitHub     │ auto │ GitHub Pages  │
│   (local)    │─────▶│  Repository  │─────▶│   (CDN)       │
└──────────────┘      └──────────────┘      └───────┬───────┘
                                                     │
                                                     ▼
                                            ┌───────────────┐
                                            │   End Users   │
                                            │   (Browser)   │
                                            └───────────────┘
```

## 5.3 Deployment Checklist

| # | Item | Status |
|---|------|--------|
| 1 | Favicon configured | ✅ |
| 2 | OG Images uploaded | ✅ |
| 3 | All links working | ✅ |
| 4 | Assets optimized | ⚠️ Some images could be compressed |
| 5 | HTTPS enabled | ✅ |
| 6 | Custom 404 page | ❌ Not present |
| 7 | robots.txt | ❌ Not present |
| 8 | sitemap.xml | ❌ Not present |

---

---

# Phase 6: Maintenance & Future Enhancements

## 6.1 Adding New Courses

To add a new course, only the `data/courses.json` file needs to be modified:

```json
{
    "id": 5,
    "title": "Course Name",
    "description": "Course description...",
    "thumbnail": "images/Playlists/course_image.png",
    "level": "beginner",
    "duration": "X hours",
    "students": 0,
    "rating": 0,
    "category": "category-id",
    "playlist": [
        {
            "id": 1,
            "title": "Video Title",
            "duration": "MM:SS",
            "videoUrl": "https://youtu.be/...",
            "free": true
        }
    ]
}
```

**Steps:**
1. Add the course thumbnail image to `images/Playlists/`
2. Add the new course object to the `courses` array in `courses.json`
3. If it's a new category, add it to the `categories` array as well
4. Run `git push` — the site updates automatically via GitHub Pages

---

## 6.2 Proposed Improvements

### 🔴 High Priority

| # | Improvement | Description |
|---|-------------|-------------|
| 1 | Fix duplicate `<body>` tag | Remove the extra `<body>` tag in `index.html` |
| 2 | Unify Font Awesome version | Use a single version across all pages |
| 3 | Fix `lang` attribute | Change `lang="ar"` to `lang="en"` |
| 4 | Create `shared.js` | Extract shared code (Burger Menu, Theme Toggle) into a common file |

### 🟡 Medium Priority

| # | Improvement | Description |
|---|-------------|-------------|
| 5 | Remove duplicated CSS | Consolidate header/nav styles into `Base.css` only |
| 6 | Add Error UI | Show a user-friendly error message when JSON fails to load |
| 7 | Image optimization | Compress images to WebP format for faster loading |
| 8 | Add Loading Skeletons | Replace spinner with skeleton placeholder cards |
| 9 | Add 404 page | Create a custom error page for broken links |
| 10 | Add `robots.txt` + `sitemap.xml` | Improve SEO discoverability |

### 🟢 Future Roadmap

| # | Improvement | Description |
|---|-------------|-------------|
| 11 | User Authentication | Allow students to log in |
| 12 | Progress Tracking | Track student progress through courses |
| 13 | React Migration | Convert the project to React/Next.js for scalability |
| 14 | Backend API | Connect to a server and database |
| 15 | Enrollment System | Allow course enrollment and tracking |
| 16 | Comments/Reviews | Student comments and ratings per course |
| 17 | PWA Support | Convert to a Progressive Web App |
| 18 | YouTube API Integration | Fetch video data automatically from YouTube |

---

---

# Appendices

## Appendix A: File Size Summary

| File | Size | Lines |
|------|------|-------|
| `index.html` | 15.5 KB | 292 |
| `courses.html` | 5.8 KB | 164 |
| `Base.css` | 13.8 KB | 574 |
| `style.css` | 18.8 KB | 770 |
| `courses.css` | 12.4 KB | 439 |
| `main.js` | 5.2 KB | 152 |
| `courses.js` | 8.4 KB | 236 |
| `courses.json` | 7.2 KB | 82 |
| `typing.wav` | 452 KB | — |
| **Total Code** | **~87 KB** | **2,709** |

## Appendix B: External Links in Project

| Link Target | Purpose | Location |
|-------------|---------|----------|
| YouTube Playlists (4) | Course videos | Home + Courses |
| Portfolio Website | About & Contact | Home Page |
| LinkedIn Profile | Recommendations + Footer | Home + Footer |
| GitHub Profile | Footer | All Pages |
| Instagram | Footer | All Pages |
| YouTube Channel | Footer | All Pages |
| WhatsApp | Contact | Home Page |
| Gmail | Contact | Home Page |

## Appendix C: Social Media Integration

| Platform | URL | Usage |
|----------|-----|-------|
| LinkedIn | `/in/mahmoudawad11/` | Recommendations + Footer |
| GitHub | `/AwadCoding` | Footer |
| Instagram | `/awad.coding/` | Footer |
| YouTube | `/@awadcoding` | Footer + Courses |
| WhatsApp | `+201557917138` | Contact |
| Email | `mahmoud.awad.offical@gmail.com` | Contact |

## Appendix D: JavaScript Concepts Used

| Concept | Usage |
|---------|-------|
| DOM Manipulation | `getElementById`, `querySelector`, `classList` |
| Event Listeners | `click`, `input`, `keydown`, `resize`, `DOMContentLoaded` |
| Event Delegation | Course card click handling |
| Async/Await | Fetching JSON data |
| Template Literals | Dynamic HTML rendering with embedded expressions |
| Array Methods | `.filter()`, `.map()`, `.find()`, `.forEach()`, `.join()` |
| Arrow Functions | Event handlers and callbacks |
| `localStorage` API | Theme preference persistence |
| `Audio` API | Typing sound effect playback |
| CSS Class Toggle | Dark mode, burger menu, modal state management |
| `setTimeout` | Typing animation timing control |
| Recursive Function | `typeEffect()` calls itself to animate |
| `closest()` | Event delegation target finding |

---

> 📝 **End of Document**  
> This documentation covers the complete Software Development Life Cycle (SDLC) of the **Awad Academy** project.  
> For questions or contributions, contact: **mahmoud.awad.offical@gmail.com**
