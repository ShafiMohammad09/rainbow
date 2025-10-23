import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
  contact?: string;
  basicInfo?: {
    firstName?: string;
    lastName?: string;
    yearOfBirth?: string;
    gender?: string;
    phoneNumber?: string;
    address?: string;
    pincode?: string;
    domicileState?: string;
    domicileCountry?: string;
    alternatePhoneNumber?: string;
  };
  education?: {
    school?: string;
    degree?: string;
    course?: string;
    yearOfCompletion?: string;
    grade?: string;
    skills?: string;
    projects?: string;
  };
  experience?: {
    domains?: Array<{
      domain: string;
      subDomain: string;
      experience: string;
    }>;
    linkedinUrl?: string;
    resumeUrl?: string;
  };
}

interface UserContextType {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: number, userData: Partial<User>) => void;
  deleteUser: (id: number) => void;
  getUserById: (id: number) => User | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_KEY = 'user_management_data';

const initialUsers: User[] = [
  { 
    id: 1, 
    name: "Dave Richards", 
    email: "dave@mail.com",
    contact: "+91 8332883854",
    basicInfo: {
      firstName: "Dave",
      lastName: "Richards",
      phoneNumber: "8332883854"
    }
  },
  { 
    id: 2, 
    name: "Abhishek Hari", 
    email: "hari@mail.com",
    contact: "+91 9876543210"
  },
  { 
    id: 3, 
    name: "Nishta Gupta", 
    email: "nishta@mail.com",
    contact: "+91 9123456789"
  },
];

export function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialUsers;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  const addUser = (userData: Omit<User, 'id'>) => {
    const newUser: User = {
      ...userData,
      id: Math.max(0, ...users.map(u => u.id)) + 1,
    };
    setUsers(prev => [...prev, newUser]);
  };

  const updateUser = (id: number, userData: Partial<User>) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...userData } : user
    ));
  };

  const deleteUser = (id: number) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const getUserById = (id: number) => {
    return users.find(user => user.id === id);
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser, getUserById }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
}
