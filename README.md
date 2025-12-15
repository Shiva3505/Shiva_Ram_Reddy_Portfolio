
```markdown
🌐 Personal Portfolio Website

This repository contains my personal portfolio website, developed to professionally present my projects, technical skills, experience, and certifications.  
The website is designed with a **modular, scalable, and maintainable architecture**, focusing on performance, clarity, and user experience.

🔗 **Live Website:** https://gunnala-shiva-ram-reddy-portfolio.netlify.app/

---

## 📌 Overview

This portfolio serves as a centralized platform to:
- Showcase academic and personal projects
- Highlight technical competencies
- Present professional experience and certifications
- Provide an easy way to connect with me

The project follows best practices in front-end development with a clean separation of concerns.

---

## 📁 Project Structure

portfolio/
├── css/ # Modular CSS architecture
│ ├── base.css # Global variables, reset, and core styles
│ ├── navbar.css # Navigation bar
│ ├── hero.css # Hero section
│ ├── about.css # About section
│ ├── skills.css # Skills section
│ ├── projects.css # Projects showcase
│ ├── experience.css # Experience timeline
│ ├── certifications.css # Certifications section
│ ├── contact.css # Contact form
│ ├── footer.css # Footer
│ └── responsive.css # Responsive breakpoints
│
├── js/ # Modular JavaScript files
│ ├── theme.js # Dark / light theme toggle
│ ├── typing-animation.js # Hero typing animation
│ ├── 3d-background.js # Three.js animated background
│ ├── animations.js # Scroll-based animations
│ ├── contact-form.js # EmailJS form handling
│ └── README.md # JavaScript documentation
│
├── index.html # Main entry point

---

## 🎨 Styling Approach

### Core Styling (`base.css`)
- CSS custom properties for theming
- Dark and light mode support
- Global resets and typography
- Reusable layout and card components
- Shared animations and effects

### Section-Based Styles
Each section has its own CSS file to ensure:
- Isolation of styles
- Easier debugging
- Improved maintainability

### Responsive Design
- Tablet support (≤ 768px)
- Mobile support (≤ 480px)
- Adaptive grids and layouts

---

## 💻 JavaScript Functionality

Detailed JavaScript documentation is available in:

```

js/README.md

```

### Key Features
- Persistent dark / light theme switching
- Dynamic typing animation in the hero section
- Interactive 3D background using Three.js
- Scroll-triggered animations
- Contact form with EmailJS integration

---

## 🔧 Customization & Maintenance

### Theme Customization
Modify theme variables in:
```

css/base.css

```

### Section Updates
- Edit the corresponding CSS file for visual changes
- Update HTML in `index.html`
- Add JavaScript functionality when required

### Adding New Sections
1. Create a new CSS file inside `css/`
2. Link it in `index.html`
3. Add section markup
4. Create a JS file if needed

### Contact Form Configuration
Update EmailJS credentials in:
```

js/contact-form.js

```

---

## 📦 Recommended Asset Loading Order

### CSS
1. `base.css`
2. Section-specific CSS files
3. `responsive.css`

### JavaScript
1. `theme.js`
2. `typing-animation.js`
3. `3d-background.js`
4. `animations.js`
5. `contact-form.js`

---

## ✅ Key Design Decisions

- Modular file structure for scalability
- Clear separation of concerns
- Reusable and maintainable codebase
- Optimized for readability and performance
- Ready for future expansion

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Modular Architecture)
- JavaScript (ES6+)
- Three.js
- EmailJS
- Font Awesome

---

## 📜 License

This project is intended for personal and educational use.  
You may fork and adapt it for your own portfolio with appropriate customization.

---

## 👤 Author

**Shiva Ram Reddy Gunnala**  
*Innovate • Inspire • Impact*
```

