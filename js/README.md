# Portfolio JavaScript Modules

This directory contains modular JavaScript files for the portfolio website.

## File Structure

### `theme.js`
- **Purpose**: Manages dark/light theme switching
- **Features**:
  - Theme toggle button functionality
  - LocalStorage persistence
  - Icon updates (sun/moon)
  - Integration with 3D background theme switching

### `typing-animation.js`
- **Purpose**: Animated typing effect for hero subtitle
- **Features**:
  - Types "Data Analyst" and "Frontend Developer" alternately
  - Smooth typing and deleting animation
  - Configurable speed and pause durations

### `3d-background.js`
- **Purpose**: Three.js 3D particle background
- **Features**:
  - **Dark Mode**: Galaxy starfield with purple/cyan particles
  - **Light Mode**: Geometric network with blue particles
  - Mouse parallax effect
  - Scroll-based camera movement
  - Responsive to window resize

### `animations.js`
- **Purpose**: Scroll animations and smooth scrolling
- **Features**:
  - Smooth scroll for anchor links
  - Intersection Observer for section fade-in
  - Scroll-triggered animations

### `contact-form.js`
- **Purpose**: Contact form handling with EmailJS
- **Features**:
  - Form validation (required fields, email format)
  - EmailJS integration
  - Loading, success, and error states
  - Auto-reset after submission

## Configuration

### EmailJS Settings (in `contact-form.js`)
```javascript
Service ID: service_t5e98kd
Template ID: template_1gde513
Public Key: 6BnjtkHpquwVIuNN1
```

### Typing Animation (in `typing-animation.js`)
```javascript
const roles = ['Data Analyst', 'Frontend Developer'];
```

## Dependencies

- **Three.js** (r128) - For 3D background
- **EmailJS** (v3) - For contact form
- **Font Awesome** (6.4.0) - For icons

## Loading Order

Files are loaded in this order in `index.html`:
1. `theme.js` - First, to set theme before page renders
2. `typing-animation.js` - Hero section animation
3. `3d-background.js` - Background initialization
4. `animations.js` - Scroll effects
5. `contact-form.js` - Form handling (requires EmailJS)
