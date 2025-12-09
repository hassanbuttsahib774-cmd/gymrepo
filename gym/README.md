# Gym React Application

This is a modern React application converted from the original HTML/CSS/JavaScript gym template.

## Project Structure

```
gym/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Preloader.jsx
│   │   ├── Breadcrumb.jsx
│   │   └── sections/        # Section components
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Blog.jsx
│   │   ├── BMI.jsx
│   │   └── NotFound.jsx
│   ├── styles/              # CSS files
│   │   ├── global.css       # Global styles
│   │   ├── style.css        # Original template styles
│   │   └── *.module.css     # CSS modules for components
│   ├── assets/              # Static assets
│   │   ├── img/            # Images
│   │   ├── fonts/          # Font files
│   │   └── css/            # Additional CSS files
│   ├── App.jsx             # Main app component with routing
│   └── main.jsx            # Entry point
├── package.json
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features

- ✅ Modern React with functional components and hooks
- ✅ React Router for navigation
- ✅ CSS Modules for component styling
- ✅ Responsive design
- ✅ All original pages converted
- ✅ Preserved original UI and animations
- ✅ BMI Calculator functionality
- ✅ Image gallery with modal
- ✅ Contact form
- ✅ Team carousel
- ✅ Testimonials slider

## Pages

- `/` - Home page
- `/about` - About Us
- `/services` - Services
- `/team` - Our Team
- `/contact` - Contact Us
- `/gallery` - Gallery
- `/blog` - Blog
- `/bmi-calculator` - BMI Calculator
- `/404` - 404 Not Found

## Dependencies

- react: ^19.2.0
- react-dom: ^19.2.0
- react-router-dom: ^6.28.0
- react-owl-carousel: ^2.3.0 (optional, for carousels)
- masonry-layout: ^4.2.2 (optional, for gallery)

## Notes

- All images and assets have been copied from the original template
- Original CSS styles are preserved in `src/styles/style.css`
- Component-specific styles use CSS modules
- The application maintains all original functionality and design
