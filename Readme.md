

# User Profiles Management Application

## Complete Technical Documentation

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Requirements Analysis](#requirements-analysis)
3. [Technology Stack](#technology-stack)
4. [Architecture & Design](#architecture--design)
5. [Implementation Details](#implementation-details)
6. [Code Structure](#code-structure)
7. [Features Implemented](#features-implemented)
8. [Responsive Design](#responsive-design)
9. [Deployment Process](#deployment-process)
10. [Testing & Quality Checks](#testing--quality-checks)
11. [Challenges & Solutions](#challenges--solutions)
12. [Future Enhancements](#future-enhancements)

---

## 🎯 Project Overview

### Purpose
This is a **frontend-only** web application built as part of a technical interview assignment for a **Frontend Developer position**. The application demonstrates proficiency in modern frontend technologies, responsive design, and adherence to design specifications.

### Live Links
- **Production URL**: https://shafi-user-profiles-management-task.vercel.app/
- **GitHub Repository**: https://github.com/ShafiMohammad09/user-profiles-management-app

### Project Type
- **Category**: Frontend Development Task
- **Backend**: None (Pure Frontend)
- **Database**: None (LocalStorage only)
- **Authentication**: None

### Key Deliverables
✅ Pixel-perfect implementation of Figma designs  
✅ Fully responsive across all devices  
✅ Browser-based data persistence  
✅ Loading and error states  
✅ Clean, maintainable code  
✅ Deployed on Vercel  

---

## 📝 Requirements Analysis

### Original Task Requirements

#### 1. **Build a Web Application**
- Use Bootstrap OR Tailwind CSS
- Use Angular OR React
- **My Choice**: React + Tailwind CSS

#### 2. **Functional Requirements**
- ✅ Implement all functionality shown in Figma prototype
- ✅ Store data locally in browser (localStorage)
- ✅ Implement loading states
- ✅ Implement error states
- ✅ Make UI responsive using grid system
- ✅ Follow exact spacing (padding/margins)
- ✅ Follow exact fonts (style/size)

#### 3. **Submission Requirements**
- ✅ Public Git repository
- ✅ Regular commits (not single commit)
- ✅ Proper documentation (README)

---

## 🛠 Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI Framework - Component-based architecture |
| **Tailwind CSS** | 3.x | Styling - Utility-first CSS framework |
| **JavaScript (ES6+)** | Latest | Programming Language |
| **HTML5** | - | Markup |
| **CSS3** | - | Styling |

### Development Tools

| Tool | Purpose |
|------|---------|
| **Create React App** | Project scaffolding & build tool |
| **npm** | Package manager |
| **Git** | Version control |
| **VS Code** | Code editor |
| **Chrome DevTools** | Debugging & testing |

### Browser APIs Used

| API | Purpose |
|-----|---------|
| **localStorage** | Data persistence across sessions |
| **JSON** | Data serialization/deserialization |

### Deployment

| Platform | Purpose |
|----------|---------|
| **Vercel** | Production hosting & continuous deployment |
| **GitHub** | Code hosting & version control |

### Why These Technologies?

**React**
- Component reusability
- Virtual DOM for performance
- Large community support
- Hooks for state management

**Tailwind CSS**
- Rapid development with utility classes
- Responsive design built-in
- Small production bundle size
- Easy to match Figma designs

**LocalStorage**
- No backend required
- Simple key-value storage
- Persistent across sessions
- Works offline

---

## 🏗 Architecture & Design

### Application Architecture

```
┌─────────────────────────────────────────┐
│           Browser (Client)              │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │      React Application            │ │
│  │                                   │ │
│  │  ┌─────────────────────────────┐ │ │
│  │  │   Components Layer          │ │ │
│  │  │  - ProfileList              │ │ │
│  │  │  - ProfileCard              │ │ │
│  │  │  - ProfileForm              │ │ │
│  │  │  - Common Components        │ │ │
│  │  └─────────────────────────────┘ │ │
│  │                                   │ │
│  │  ┌─────────────────────────────┐ │ │
│  │  │   State Management          │ │ │
│  │  │  - React useState           │ │ │
│  │  │  - React useEffect          │ │ │
│  │  │  - Custom Hooks             │ │ │
│  │  └─────────────────────────────┘ │ │
│  │                                   │ │
│  │  ┌─────────────────────────────┐ │ │
│  │  │   Storage Layer             │ │ │
│  │  │  - localStorage wrapper     │ │ │
│  │  │  - CRUD operations          │ │ │
│  │  └─────────────────────────────┘ │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │      Browser localStorage         │ │
│  │  { userProfiles: [...] }          │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Component Hierarchy

```
App
│
├── Header
│   ├── Logo
│   ├── Navigation
│   └── SearchBar (if applicable)
│
├── Main Content Area
│   │
│   ├── ProfileList
│   │   ├── Add New Button
│   │   ├── ProfileCard (multiple)
│   │   │   ├── Avatar
│   │   │   ├── User Info
│   │   │   ├── Edit Button
│   │   │   └── Delete Button
│   │   │
│   │   ├── LoadingSpinner (conditional)
│   │   ├── ErrorMessage (conditional)
│   │   └── EmptyState (conditional)
│   │
│   └── ProfileForm (Modal/Separate)
│       ├── Input Fields
│       ├── Validation Messages
│       ├── Submit Button
│       └── Cancel Button
│
└── Footer (if applicable)
```

### Data Flow Diagram

```
User Action (Click/Input)
         ↓
Event Handler in Component
         ↓
Update React State (useState)
         ↓
Sync with localStorage
         ↓
Re-render Component
         ↓
Updated UI Display
```

### Data Model

Since this is a frontend-only application, here's the data structure stored in localStorage:

```javascript
// LocalStorage Key: "userProfiles"
[
  {
    id: "unique-id-123",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    role: "Software Developer",
    department: "Engineering",
    avatar: "https://example.com/avatar.jpg",
    status: "active",
    createdAt: "2025-10-20T10:00:00.000Z",
    updatedAt: "2025-10-20T10:00:00.000Z"
  },
  // ... more profiles
]
```

### Entity Structure Diagram

```
┌─────────────────────────────────┐
│        UserProfile              │
├─────────────────────────────────┤
│ id          : string (unique)   │
│ name        : string            │
│ email       : string            │
│ phone       : string (optional) │
│ role        : string            │
│ department  : string            │
│ avatar      : string (URL)      │
│ status      : string            │
│ createdAt   : ISO date string   │
│ updatedAt   : ISO date string   │
└─────────────────────────────────┘
```

### State Management Flow

```
┌──────────────────────────────────────┐
│     Component State Structure        │
├──────────────────────────────────────┤
│                                      │
│  profiles: Array<UserProfile>       │
│  isLoading: boolean                  │
│  error: string | null                │
│  isModalOpen: boolean                │
│  selectedProfile: UserProfile | null │
│  searchQuery: string                 │
│                                      │
└──────────────────────────────────────┘
```

---

## 💻 Implementation Details

### 1. Project Setup

#### Step 1: Initialize React App
```bash
npx create-react-app user-profiles-management-app
cd user-profiles-management-app
```

#### Step 2: Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Step 3: Configure Tailwind
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom theme extensions if any
    },
  },
  plugins: [],
}
```

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. LocalStorage Implementation

#### Storage Service
```javascript
// src/services/storageService.js
const STORAGE_KEY = 'userProfiles';

export const storageService = {
  // Get all profiles
  getProfiles: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  },

  // Save all profiles
  saveProfiles: (profiles) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  },

  // Add new profile
  addProfile: (profile) => {
    const profiles = storageService.getProfiles();
    const newProfile = {
      ...profile,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    profiles.push(newProfile);
    storageService.saveProfiles(profiles);
    return newProfile;
  },

  // Update profile
  updateProfile: (id, updates) => {
    const profiles = storageService.getProfiles();
    const index = profiles.findIndex(p => p.id === id);
    if (index !== -1) {
      profiles[index] = {
        ...profiles[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      storageService.saveProfiles(profiles);
      return profiles[index];
    }
    return null;
  },

  // Delete profile
  deleteProfile: (id) => {
    const profiles = storageService.getProfiles();
    const filtered = profiles.filter(p => p.id !== id);
    storageService.saveProfiles(filtered);
    return true;
  }
};
```

### 3. Custom Hook for Profile Management

```javascript
// src/hooks/useProfiles.js
import { useState, useEffect } from 'react';
import { storageService } from '../services/storageService';

export const useProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load profiles on mount
  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = () => {
    try {
      setIsLoading(true);
      const data = storageService.getProfiles();
      setProfiles(data);
      setError(null);
    } catch (err) {
      setError('Failed to load profiles');
    } finally {
      setIsLoading(false);
    }
  };

  const addProfile = (profileData) => {
    try {
      const newProfile = storageService.addProfile(profileData);
      setProfiles(prev => [...prev, newProfile]);
      return newProfile;
    } catch (err) {
      setError('Failed to add profile');
      throw err;
    }
  };

  const updateProfile = (id, updates) => {
    try {
      const updated = storageService.updateProfile(id, updates);
      if (updated) {
        setProfiles(prev => 
          prev.map(p => p.id === id ? updated : p)
        );
      }
      return updated;
    } catch (err) {
      setError('Failed to update profile');
      throw err;
    }
  };

  const deleteProfile = (id) => {
    try {
      storageService.deleteProfile(id);
      setProfiles(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      setError('Failed to delete profile');
      throw err;
    }
  };

  return {
    profiles,
    isLoading,
    error,
    addProfile,
    updateProfile,
    deleteProfile,
    refreshProfiles: loadProfiles
  };
};
```

### 4. Main App Component

```javascript
// src/App.js
import React, { useState } from 'react';
import { useProfiles } from './hooks/useProfiles';
import ProfileList from './components/ProfileList';
import ProfileForm from './components/ProfileForm';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const {
    profiles,
    isLoading,
    error,
    addProfile,
    updateProfile,
    deleteProfile
  } = useProfiles();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);

  const handleAddClick = () => {
    setEditingProfile(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (profile) => {
    setEditingProfile(profile);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (data) => {
    if (editingProfile) {
      updateProfile(editingProfile.id, data);
    } else {
      addProfile(data);
    }
    setIsFormOpen(false);
    setEditingProfile(null);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      deleteProfile(id);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            User Profiles Management
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {error && <ErrorMessage message={error} />}
        
        <button
          onClick={handleAddClick}
          className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add New Profile
        </button>

        <ProfileList
          profiles={profiles}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />

        {isFormOpen && (
          <ProfileForm
            profile={editingProfile}
            onSubmit={handleFormSubmit}
            onCancel={() => setIsFormOpen(false)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
```

### 5. ProfileList Component

```javascript
// src/components/ProfileList.js
import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles, onEdit, onDelete }) => {
  if (profiles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No profiles found. Add your first profile!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProfileList;
```

### 6. ProfileCard Component

```javascript
// src/components/ProfileCard.js
import React from 'react';

const ProfileCard = ({ profile, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-16 h-16 rounded-full mr-4"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4">
            {profile.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {profile.name}
          </h3>
          <p className="text-sm text-gray-500">{profile.role}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Email:</span> {profile.email}
        </p>
        {profile.phone && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Phone:</span> {profile.phone}
          </p>
        )}
        <p className="text-sm text-gray-600">
          <span className="font-medium">Department:</span> {profile.department}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(profile)}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(profile.id)}
          className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
```

### 7. ProfileForm Component

```javascript
// src/components/ProfileForm.js
import React, { useState } from 'react';

const ProfileForm = ({ profile, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(
    profile || {
      name: '',
      email: '',
      phone: '',
      role: '',
      department: '',
      avatar: '',
      status: 'active'
    }
  );

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.role.trim()) {
      newErrors.role = 'Role is required';
    }

    if (!formData.department.trim()) {
      newErrors.department = 'Department is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-4">
          {profile ? 'Edit Profile' : 'Add New Profile'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role *
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department *
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.department && (
              <p className="text-red-500 text-sm mt-1">{errors.department}</p>
            )}
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {profile ? 'Update' : 'Create'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
```

### 8. Loading & Error Components

```javascript
// src/components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
};

export default LoadingSpinner;
```

```javascript
// src/components/ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
```

---

## 📁 Code Structure

### Actual Project Structure

```
user-profiles-management-app/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── ProfileList.js
│   │   ├── ProfileCard.js
│   │   ├── ProfileForm.js
│   │   ├── LoadingSpinner.js
│   │   └── ErrorMessage.js
│   │
│   ├── hooks/
│   │   └── useProfiles.js
│   │
│   ├── services/
│   │   └── storageService.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── LICENSE
```

### File Responsibilities

| File | Purpose |
|------|---------|
| `App.js` | Main component, state orchestration |
| `ProfileList.js` | Displays grid of profile cards |
| `ProfileCard.js` | Individual profile display |
| `ProfileForm.js` | Create/edit form with validation |
| `LoadingSpinner.js` | Loading state UI |
| `ErrorMessage.js` | Error state UI |
| `useProfiles.js` | Custom hook for profile operations |
| `storageService.js` | LocalStorage abstraction |
| `index.css` | Tailwind imports & global styles |

---

## ✨ Features Implemented

### 1. View All Profiles
- ✅ Grid layout (responsive: 1 col mobile, 2 tablet, 3 desktop)
- ✅ Profile cards with avatar, name, role, email, department
- ✅ Empty state when no profiles exist
- ✅ Data loads from localStorage on page load

### 2. Add New Profile
- ✅ Modal form with all required fields
- ✅ Client-side validation
- ✅ Real-time error messages
- ✅ Auto-generates unique ID and timestamps
- ✅ Saves to localStorage immediately

### 3. Edit Existing Profile
- ✅ Pre-fills form with current data
- ✅ Updates timestamp on save
- ✅ Validation on update
- ✅ Syncs with localStorage

### 4. Delete Profile
- ✅ Confirmation dialog before deletion
- ✅ Removes from localStorage
- ✅ Updates UI immediately

### 5. Loading States
- ✅ Initial page load spinner
- ✅ Form submission states (if implemented with async)

### 6. Error Handling
- ✅ localStorage errors (quota exceeded, disabled)
- ✅ Validation errors in forms
- ✅ User-friendly error messages

### 7. Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- ✅ Touch-friendly buttons on mobile
- ✅ Optimized spacing for all screen sizes

---

## 📱 Responsive Design

### Breakpoint Strategy

```css
/* Mobile First (default) */
/* 0px - 767px: 1 column */

/* Tablet */
@media (min-width: 768px) {
  /* 2 columns */
}

/* Desktop */
@media (min-width: 1024px) {
  /* 3 columns */
}
```

### Tailwind Responsive Classes Used

```javascript
// Grid: 1 col → 2 cols → 3 cols
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Padding: smaller → larger
className="px-4 md:px-6 lg:px-8"

// Text size: smaller → larger
className="text-base md:text-lg lg:text-xl"

// Spacing
className="gap-4 md:gap-6"
```

### Mobile Optimization
- Touch targets minimum 44x44px
- Readable font sizes (minimum 16px)
- Adequate spacing between interactive elements
- Full-width form fields on mobile

### Desktop Optimization
- Maximum content width (max-w-7xl)
- Centered layout
- Multiple columns for better space usage

---

## 🚀 Deployment Process

### Step-by-Step Vercel Deployment

#### 1. Prepare Repository

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit with meaningful message
git commit -m "Initial commit: User Profiles Management App"

# Create GitHub repository (via GitHub website)
# Then add remote
git remote add origin https://github.com/ShafiMohammad09/user-profiles-management-app.git

# Push to GitHub
git push -u origin main
```

#### 2. Connect to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import the GitHub repository
5. Vercel auto-detects: Framework = Create React App

#### 3. Build Configuration

```
Framework Preset: Create React App
Build Command: npm run build (auto-detected)
Output Directory: build (auto-detecte
