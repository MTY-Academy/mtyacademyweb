# replit.md

## Overview

This is a static website for MTY Academy, a specialized mathematics tutoring academy focused on grades 5-12. The application is built with vanilla HTML, CSS, and JavaScript, featuring a modern design system with clean styling and responsive layout. The academy offers regular enrichment classes, self-paced options, and AMC contest preparation, with all course materials designed by Dr. Gu.

## System Architecture

### Frontend Architecture
- **Technology**: Vanilla HTML5, CSS3, and JavaScript (ES6+)
- **Structure**: Single Page Application (SPA) with hash-based routing
- **Styling**: Custom CSS with CSS Grid and Flexbox for responsive layouts
- **Interactivity**: Pure JavaScript for navigation, animations, and user interactions
- **Assets**: Static assets served directly from the `attached_assets` directory
- **Accessibility**: WCAG-compliant with keyboard navigation and screen reader support

### Static Site Structure
- **index.html**: Main HTML file with all page content in sections
- **styles.css**: Comprehensive CSS with responsive design and animations
- **script.js**: JavaScript for SPA navigation, mobile menu, and interactive features
- **attached_assets/**: Directory containing PDFs, images, and other static resources

## Key Components

### Site Structure
```
/
├── index.html            # Main HTML file with all page sections
├── styles.css            # Comprehensive CSS styling
├── script.js             # JavaScript for interactivity and SPA navigation
└── attached_assets/      # Static assets directory
    ├── *.pdf            # Course evaluations, syllabi, course map
    └── *.png/*.jpg      # Images and logos
```

### Page Sections
- **Home**: Hero section with academy overview and feature highlights
- **Programs**: Detailed course listings with evaluations and syllabi
- **Registration**: Course map, placement evaluations, and enrollment information
- **Faculty**: Team profiles with contact information

## User Experience Flow

1. **Navigation**: Hash-based routing enables smooth single-page navigation
2. **Content Display**: Sections are dynamically shown/hidden based on navigation
3. **Interactive Elements**: JavaScript handles mobile menu, animations, and user interactions
4. **Asset Loading**: PDFs and images are served directly from static assets
5. **Responsive Design**: CSS Grid and Flexbox ensure compatibility across devices

## Key Features

### Core Functionality
- **Single Page Application**: Seamless navigation without page reloads
- **Mobile-First Design**: Responsive layout optimized for all screen sizes
- **Accessibility**: WCAG-compliant with keyboard navigation and screen reader support
- **Performance**: Optimized loading with intersection observers and lazy loading
- **Static Assets**: Direct serving of PDFs, images, and course materials

### Interactive Elements
- **Mobile Menu**: Collapsible navigation with hamburger menu animation
- **Smooth Scrolling**: Enhanced user experience with CSS smooth scrolling
- **Hover Effects**: Interactive buttons and cards with transform animations
- **Form Handling**: Ready for future contact forms with validation support

## Deployment Strategy

### Static Site Deployment
- **Files**: Direct serving of HTML, CSS, JS, and static assets
- **No Build Process**: Ready to deploy without compilation
- **CDN Compatible**: All files are static and can be served from any CDN
- **Performance**: Optimized loading with CSS and JS minification ready

### Development Workflow
- **Local Development**: Open `index.html` directly in browser or use local server
- **File Serving**: Static files served from root directory
- **Asset Management**: Direct linking to files in `attached_assets/` directory
- **No Dependencies**: Pure HTML/CSS/JS requires no package management

## Changelog

```
Changelog:
- July 03, 2025: Initial setup with general education focus
- July 03, 2025: Updated to math-only tutoring academy specializing in grades 5-12
  - Updated all content to focus on mathematics education
  - Featured Dr. Gu as founder and lead instructor
  - Added specific programs: Regular Enrichment, Self-Paced, AMC contest prep
  - Updated contact information: (512) 589-3349, wg04txstate@gmail.com
  - Modified navigation from "Classes/Teachers" to "Programs/Faculty"
- July 03, 2025: Updated faculty and registration information
  - Added three faculty members: Dr. May Wang, Dr. Weizhen Gu, Mrs. Joyce Cen
  - Removed faculty pictures, replaced with icon-based cards
  - Embedded course map PDF in registration page
  - Updated registration process with Google Classroom integration
  - Added detailed payment and fee information
  - Included "last updated Nov. 4, 2024" date on registration page
  - Added placement evaluation PDFs for grades 5-9 covering various math levels
  - Created downloadable evaluation samples for student placement assessment
  - Added course syllabi PDFs for PreCalculus, Calculus, and AMC preparation classes
  - Created comprehensive self-paced program section with package pricing
  - Enhanced Programs page with detailed course information and syllabus downloads
- July 04, 2025: Content cleanup and design updates
  - Removed teaching philosophy section from Teachers/Faculty page
  - Removed contact section and social media links from Home page
  - Updated color scheme from blue/orange to green/white theme
  - Integrated MTY Academy banner logo throughout the site
  - Moved self-paced class registration from Programs to Registration page
  - Removed contact buttons from header navigation
  - Updated hero section with banner logo and green accent colors
- July 07, 2025: Complete technology rewrite
  - Converted from React/TypeScript to vanilla HTML/CSS/JavaScript
  - Implemented single-page application with hash-based routing
  - Created responsive design with CSS Grid and Flexbox
  - Added mobile-first design with collapsible navigation
  - Integrated scroll animations and smooth transitions
  - Maintained all existing content and functionality
  - Updated to use transparent PNG version of MTY Academy banner
  - Preserved all PDF assets and course materials
  - Added comprehensive syllabus collection for all grade levels (5-10)
  - Fixed button visibility with white backgrounds and proper contrast
  - Reorganized content: all syllabi in Programs section, all evaluations in Registration section
  - Created detailed course descriptions based on actual syllabus content
  - Complete curriculum now spans from basic arithmetic through advanced calculus
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```