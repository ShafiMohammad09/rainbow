# User Management Application

## Overview
A modern user management application built with React, TypeScript, and Vite. The application provides a clean interface for managing users with features like viewing user lists, adding new users, viewing detailed user profiles, and deleting users.

## Tech Stack
- **Frontend Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 5.1.4
- **UI Components**: Custom components built with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: React Router DOM
- **State Management**: React useState with TanStack React Query
- **Icons**: Lucide React

## Project Structure
```
.
├── client/
│   ├── components/
│   │   ├── ui/              # Reusable shadcn/ui components
│   │   ├── Header.tsx       # Application header with logo and icons
│   │   ├── UsersTable.tsx   # Main users table component
│   │   └── AddUserModal.tsx # Modal for adding new users
│   ├── pages/
│   │   ├── Index.tsx        # Home page with users table
│   │   ├── UserProfile.tsx  # Detailed user profile page
│   │   └── NotFound.tsx     # 404 page
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn helper)
│   ├── hooks/
│   │   └── use-toast.ts     # Toast notification hook
│   ├── App.tsx              # Main application component
│   └── global.css           # Global styles and Tailwind imports
├── package.json             # Project dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── index.html               # HTML entry point
```

## Features
1. **User List Management**: View all users in a clean table layout
2. **Add Users**: Modal interface to add new users with name, email, and contact information
3. **User Profiles**: Detailed user profile pages with tabs for:
   - Basic information (personal details, address, contact)
   - Education & skills
   - Work experience
4. **Delete Users**: Remove users from the list
5. **Responsive Design**: Clean, modern UI with custom purple brand colors
6. **Client-side Routing**: Seamless navigation between pages

## Configuration
### Vite Configuration
- Host: `0.0.0.0` for Replit compatibility
- Port: `5000`
- HMR configured for proxy environment
- Path aliases: `@/` points to `./client/`

### Tailwind Custom Colors
- Primary: `#6834FF` (purple)
- Brand accents: Various shades from `#E7DFFF` to `#F5F2FF`
- Text colors: Custom semantic text colors

## Development
The application runs on port 5000 with Vite's development server. Hot Module Replacement (HMR) is enabled for a smooth development experience.

### Key Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Deployment
Configured for Replit's autoscale deployment:
- **Build**: Compiles TypeScript and bundles with Vite
- **Run**: Serves the built application using Vite preview server

## Recent Changes
- **October 23, 2025**: Initial project setup for Replit environment
  - Created all configuration files (package.json, vite.config.ts, tsconfig.json)
  - Installed dependencies including React, Vite, TypeScript, Tailwind CSS
  - Configured Vite for Replit proxy with proper host settings
  - Set up development workflow on port 5000
  - Configured deployment for autoscale

## Current State
The application is fully functional with:
- User list display with sample data (3 users)
- Add user modal (functional UI)
- User profile pages with multiple tabs
- Client-side state management
- Responsive layout
- All dependencies installed and configured

## Notes
- This is a frontend-only application with in-memory state
- User data is stored in component state (not persisted)
- Sample users are provided as initial data
- The application uses modern React patterns with hooks and functional components
