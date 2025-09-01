import { useLocalStorage } from '../hooks/useLocalStorage';

export function NameSaver() {
  const [name, setName] = useLocalStorage('username', '');
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Topic 1: Custom Hook</h2>
      <input 
        className="border p-2 rounded w-full"
        value={name || ''} 
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h3 className="text-xl mt-4">Hello, <span className="font-semibold text-blue-600">{name || 'Guest'}</span>!</h3>
      <p className="text-gray-500 mt-2">(ลองพิมพ์ชื่อแล้วรีเฟรชหน้าเว็บ)</p>
    </div>
  );
}