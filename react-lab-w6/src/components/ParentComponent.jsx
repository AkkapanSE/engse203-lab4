// src/components/ParentComponent.jsx
import React, { useState, useCallback } from 'react';

// Component ลูกที่รับ props เป็นฟังก์ชัน
const HeavyCalculationComponent = ({ onCalculate }) => {
  console.log('HeavyCalculationComponent is rendering!');
  return <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600" onClick={onCalculate}>Perform Heavy Calculation</button>;
};

// BUG: HeavyCalculationComponent ถูก re-render ทุกครั้งที่ parent state เปลี่ยน
// แม้ว่า props ของมันจะไม่ได้เปลี่ยนเลย

function ParentComponent() {
  const [count, setCount] = useState(0);

  const performCalculation = () => {
    // สมมติว่านี่คือการคำนวณที่หนักมาก
    console.log("Performing calculation...");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Topic 5: Performance Optimization</h2>
      <div className="mb-4">
        <p className="text-lg">Unrelated Counter: <span className="font-bold">{count}</span></p>
        <button className="mt-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300" onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
      <hr className="my-4" />
      <p className="mb-2">This button's component should not re-render when the counter changes:</p>
      <HeavyCalculationComponent onCalculate={performCalculation} />
    </div>
  );
}

export default ParentComponent;