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
│   ├── context/
│   │   └── UserContext.tsx  # Global state management with localStorage
│   ├── pages/
│   │   ├── Index.tsx        # Home page with users table
│   │   ├── UserProfile.tsx  # Editable user profile page with tabs
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
3. **Editable User Profiles**: Detailed user profile pages with three editable tabs:
   - **Basic Info**: Edit personal details, address, contact information
   - **Education & Skills**: Edit school, degree, course, skills, and projects
   - **Experience**: Edit work domains, sub-domains, LinkedIn, and resume information
4. **Delete Users**: Remove users from the list
5. **Data Persistence**: All user data persists across page refreshes using localStorage
6. **Responsive Design**: Clean, modern UI with custom purple brand colors
7. **Client-side Routing**: Seamless navigation between pages
8. **State Management**: React Context API for global state management

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
- **October 23, 2025**: Complete project setup and editable profile implementation
  - Created all configuration files (package.json, vite.config.ts, tsconfig.json)
  - Installed dependencies including React, Vite, TypeScript, Tailwind CSS
  - Configured Vite for Replit proxy with proper host settings
  - Set up development workflow on port 5000
  - Configured deployment for autoscale
  - Implemented UserContext with localStorage for persistent data storage
  - Made all three profile tabs (Basic Info, Education & Skills, Experience) fully editable
  - Added proper form state management with separate edit states per tab
  - Implemented save/cancel functionality with data validation
  - Added unsaved changes protection when switching tabs

## Current State
The application is fully functional with:
- User list display with persistent data (3 initial sample users)
- Add user modal with form validation
- Fully editable user profile pages with three tabs
- Independent edit states for each tab section
- Save and cancel functionality with data persistence
- Unsaved changes protection
- Toast notifications for user actions
- Data persistence using localStorage
- Responsive layout
- All dependencies installed and configured

## Data Management
- **Storage**: Browser localStorage for persistent data across page refreshes
- **State Management**: React Context API (UserContext) for global state
- **Data Structure**: Comprehensive user object with nested properties for basic info, education, and experience
- **CRUD Operations**: Full create, read, update, and delete functionality through context methods

## Notes
- This is a frontend-only application with localStorage persistence
- User data persists across browser sessions
- All form state is synchronized with the context to prevent data loss
- The application uses modern React patterns with hooks, context, and functional components
- Each profile tab has independent edit state to prevent cross-tab interference
