import React, { useState } from 'react';

const tabs = [
  'ทั้งหมด (7)',
  'ยอดนิยม',
  'ราคา: ต่ำ ไป สูง',
  'ราคา: สูง ไป ต่ำ',
  'คะแนนร้านค้า',
];

const TabFilter: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full px-[12px] bg-white">

      <div
        className="flex overflow-x-auto hide-scrollbar gap-[8px] py-[4px]"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`flex-shrink-0 h-[28px] px-[12px] py-[4px] text-[14px] leading-[20px] text-center cursor-pointer 
              ${selected === index ? 'border-b-2 border-black text-black' : 'text-[#71717A]'}
            `}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              backgroundColor: 'white',
            }}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabFilter;
