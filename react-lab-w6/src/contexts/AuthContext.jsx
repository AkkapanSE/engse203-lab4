// src/contexts/AuthContext.jsx
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null means logged out
  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  // BUG: value ที่ส่งลงไปใน Provider ขาดฟังก์ชันที่จำเป็น
  const value = { user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);