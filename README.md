# Aum Yoga

A modern web application for a yoga studio that allows users to browse yoga services, view class details, and book sessions. Built with React and Vite for optimal performance and developer experience.

## Overview

Aum Yoga is a full-stack web application that provides an intuitive platform for yoga enthusiasts to explore different yoga styles, learn about class benefits, and book sessions. The application features user authentication, service browsing, detailed class information, and a booking system.

## Features

- User Authentication: Sign up and sign in functionality using Firebase Authentication
- Service Catalog: Browse six different yoga services including Hatha Yoga, Vinyasa Flow, Yin Yoga, Power Yoga, Restorative Yoga, and Meditation
- Detailed Service Information: View comprehensive details about each yoga class including benefits, duration, and suitability
- Booking System: Book yoga sessions with authentication protection
- Payment Integration: Payment page for processing bookings
- Responsive Design: Fully responsive layout that works on desktop, tablet, and mobile devices
- Modern UI: Clean and intuitive interface with smooth animations using Framer Motion
- Testimonials: Customer testimonials section
- About Section: Information about the yoga studio

## Technology Stack

### Frontend
- React 18.3.1
- Vite 5.4.8
- React Router DOM 6.27.0
- Tailwind CSS 3.4.14
- Framer Motion 11.11.9
- Lucide React 0.453.0

### Backend Services
- Firebase 11.0.1 (Authentication)

### Development Tools
- ESLint 9.11.1
- PostCSS 8.4.47
- Autoprefixer 10.4.20

## Project Structure

```
aum_yoga/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── hero-background.png
│   │   ├── meditate.jpg
│   │   ├── standingposebackground.jpg
│   │   └── yogamudra.jpg
│   ├── components/
│   │   ├── InputField.jsx
│   │   ├── LazyImage.jsx
│   │   └── ProfileImage.jsx
│   ├── context/
│   │   ├── authContext.js
│   │   └── authProvider.jsx
│   ├── customHooks/
│   │   └── useAuthentication.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── BookNow.jsx
│   │   ├── Contact.jsx
│   │   ├── FitnessGoals.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── KnowMore.jsx
│   │   ├── NotFound.jsx
│   │   ├── Payment.jsx
│   │   ├── Port.jsx
│   │   ├── Services.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   └── Testimonials.jsx
│   ├── utils/
│   │   └── validation.js
│   ├── App.jsx
│   ├── App.css
│   ├── firebase.js
│   ├── index.css
│   ├── index.js
│   └── main.jsx
├── .gitignore
├── .npmrc
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager
- Firebase project with Authentication enabled

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aum_yoga
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Email/Password authentication in Firebase Console
   - Update the Firebase configuration in `src/firebase.js` with your project credentials:
     - apiKey
     - authDomain
     - projectId
     - storageBucket
     - messagingSenderId
     - appId
     - measurementId

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev`: Start the development server with hot module replacement
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check code quality

## Deployment

### Vercel Deployment

The project is configured for deployment on Vercel. The `vercel.json` file contains the build configuration.

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project in Vercel
3. Vercel will automatically detect the Vite configuration and deploy

The `.npmrc` file ensures that optional dependencies (like Rollup platform-specific binaries) are properly installed during the build process.

### Build Output

The production build creates an optimized bundle in the `dist/` directory that can be deployed to any static hosting service.

## Application Routes

- `/` - Home page with hero section, services, testimonials, about, and footer
- `/signin` - User sign in page
- `/signup` - User registration page
- `/services` - Services listing page
- `/book/:serviceId` - Booking page for a specific service (requires authentication)
- `/knowmore/:serviceId` - Detailed information about a specific service
- `/payment` - Payment processing page
- `*` - 404 Not Found page

## Authentication

The application uses Firebase Authentication for user management. Users must sign up or sign in to book yoga sessions. The authentication state is managed through React Context API and is available throughout the application.

### Authentication Features

- Email and password authentication
- Session persistence using browser local storage
- Protected routes for booking functionality
- Authentication state management with React Context

## Services Offered

1. **Hatha Yoga**: Gentle introduction to basic yoga postures (60-90 minutes)
2. **Vinyasa Flow**: Dynamic practice linking movement and breath (60-75 minutes)
3. **Yin Yoga**: Slow-paced style with longer-held postures (75-90 minutes)
4. **Power Yoga**: Fitness-based vinyasa practice (60-75 minutes)
5. **Restorative Yoga**: Passive, meditative form for deep relaxation (75-90 minutes)
6. **Meditation**: Guided mindfulness and awareness sessions (30-45 minutes)

## Styling

The application uses Tailwind CSS for styling with a custom color palette:
- Primary purple: `#745982`
- Accent pink: `#db2a59`
- Accent yellow: `#ffcc3f`
- Background: `#f9f7fc`

## Browser Support

The application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Author

Bhavana Jami

## Support

For issues, questions, or contributions, please open an issue in the repository.
