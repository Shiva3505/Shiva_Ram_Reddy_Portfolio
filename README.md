# Portfolio File Structure

This document explains the modular file organization of the portfolio website.

## 📁 Directory Structure

```
portfolio/
├── css/                    # Modular CSS files
│   ├── base.css           # Root variables, reset, global styles
│   ├── navbar.css         # Navigation bar
│   ├── hero.css           # Hero section
│   ├── about.css          # About section
│   ├── skills.css         # Skills section
│   ├── projects.css       # Projects section
│   ├── experience.css     # Experience timeline
│   ├── certifications.css # Certifications grid
│   ├── contact.css        # Contact form
│   ├── footer.css         # Footer
│   └── responsive.css     # Media queries
│
├── js/                     # Modular JavaScript files
│   ├── theme.js           # Dark/light theme toggle
│   ├── typing-animation.js # Hero typing effect
│   ├── 3d-background.js   # Three.js background
│   ├── animations.js      # Scroll animations
│   ├── contact-form.js    # EmailJS integration
│   └── README.md          # JS documentation
│
├── index.html             # Main HTML file
├── style.css              # (old - can be deleted)
└── script.js              # (old - can be deleted)
```

## 🎨 CSS Files

### `base.css` (Core Foundation)
- CSS custom properties (variables)
- Dark/light theme variables
- Global reset and body styles
- Canvas background
- Container and section base styles
- Gradient text animations
- Shared card styles

### `navbar.css`
- Fixed navigation bar
- Logo styling
- Navigation menu
- Theme toggle button
- Hover effects

### `hero.css`
- Hero section layout
- Title and subtitle
- Typing animation cursor
- Social icons
- CTA button with shimmer effect

### `about.css`
- About content layout
- Highlight items
- Icon styling

### `skills.css`
- Skills grid layout
- Category cards
- Skill items
- Hover effects

### `projects.css`
- Projects grid
- Project cards
- Tags
- External link icons
- Dual link group (View/Code)

### `experience.css`
- Timeline layout
- Timeline dots and line
- Experience cards
- Date and company styling

### `certifications.css`
- Certification grid
- Cert cards
- Icons
- Link wrappers

### `contact.css`
- Two-column layout
- Contact details
- Form styling
- Submit button states

### `footer.css`
- Footer layout
- Social links
- Copyright text

### `responsive.css`
- Tablet breakpoints (768px)
- Mobile breakpoints (480px)
- Responsive grid adjustments

## 💻 JavaScript Files

See `js/README.md` for detailed JavaScript documentation.

## 🔧 Customization Guide

### Changing Colors
Edit `css/base.css` - modify CSS variables in `:root` and `[data-theme="light"]`

### Modifying a Section
1. Find the corresponding CSS file (e.g., `css/projects.css` for projects)
2. Edit styles as needed
3. Changes are isolated to that section only

### Adding a New Section
1. Create new CSS file: `css/newsection.css`
2. Add link in `index.html` head: `<link rel="stylesheet" href="css/newsection.css">`
3. Add HTML content in `index.html` body
4. Create corresponding JS file if needed in `js/newsection.js`

### Updating EmailJS
Edit `js/contact-form.js` - update Service ID, Template ID, or Public Key

### Changing Typing Animation
Edit `js/typing-animation.js` - modify the `roles` array

## 📦 Loading Order

### CSS (in `<head>`)
1. `base.css` - Must load first (variables)
2. Section-specific CSS files
3. `responsive.css` - Must load last (overrides)

### JavaScript (before `</body>`)
1. `theme.js` - Theme initialization
2. `typing-animation.js` - Hero effect
3. `3d-background.js` - Background
4. `animations.js` - Scroll effects
5. `contact-form.js` - Form handling

## 🗑️ Old Files

The following files can be safely deleted:
- `style.css` (replaced by modular CSS files)
- `script.js` (replaced by modular JS files)

## ✅ Benefits of Modular Structure

- **Easy Maintenance**: Edit one section without affecting others
- **Better Organization**: Clear separation of concerns
- **Faster Development**: Find and modify code quickly
- **Reusability**: Copy sections to other projects
- **Team Collaboration**: Multiple developers can work simultaneously
- **Smaller Files**: Easier to understand and debug
- **Performance**: Can load only needed sections (future optimization)
"# Shiva_Ram_Reddy_Portfolio" 
