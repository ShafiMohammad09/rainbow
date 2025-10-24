# User Management App

## Overview
A React-based user management application featuring a clean, modern interface for managing users. Built with React, TypeScript, Vite, and Radix UI components with TailwindCSS styling.

## Project Structure
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: TailwindCSS with tailwindcss-animate
- **Routing**: React Router v6
- **State Management**: React Context API + TanStack Query
- **Form Handling**: React Hook Form

## Key Features
- User listing with view/delete actions
- Add new users via modal
- User profile pages
- Notification system
- Responsive design
- Toast notifications (Sonner)

## Development
- **Dev Server**: Runs on port 5000 with `npm run dev`
- **Build**: TypeScript compilation + Vite build with `npm run build`
- **Preview**: Production preview with `npm run preview`

## Project Configuration
- Port: 5000 (required for Replit environment)
- Host: 0.0.0.0 (allows Replit proxy access)
- HMR: Configured for WebSocket over WSS on port 443

## Dependencies
See `package.json` for complete list of dependencies including:
- React ecosystem (react, react-dom, react-router-dom)
- Radix UI component library
- TailwindCSS for styling
- TanStack Query for data fetching
- Lucide React for icons

## Recent Changes
- **2025-10-23**: Initial setup for Replit environment
  - Configured Vite dev server for host 0.0.0.0:5000
  - Added HMR configuration for Replit proxy (WSS on port 443)
  - Installed all npm dependencies
  - Set up workflow for development server
  - Configured deployment for autoscale with preview server

## Deployment
Configured for autoscale deployment:
- Build: TypeScript compilation and Vite build
- Run: Vite preview server on port 5000
