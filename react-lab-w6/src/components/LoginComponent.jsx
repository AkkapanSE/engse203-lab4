// src/components/LoginComponent.jsx
import { useAuth } from '../contexts/AuthContext';

export function LoginComponent() {
  const { user, login, logout } = useAuth(); // จะเกิด Error เพราะ login, logout เป็น undefined

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Topic 2: Context API</h2>
      {user ? (
        <div className="flex items-center space-x-4">
          <p>Welcome, <span className="font-semibold text-green-600">{user.name}</span>!</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={logout}>Logout</button>
        </div>
      ) : (
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => login('Somsak')}>Login</button>
      )}
    </div>
  );
}