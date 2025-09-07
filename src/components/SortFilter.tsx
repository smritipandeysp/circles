import React from "react";
import { FiChevronDown } from "react-icons/fi";

const ITEMS = ["ยี่ห้อยาง", "ราคา", "คุณสมบัติ"];

const SortFilter: React.FC = () => {
  return (
    <div className="pb-[12px]">
      <div className="w-full no-scroll flex gap-[8px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
        {ITEMS.map((x) => (
          <button
            key={x}
            className="flex h-[30px] gap-[8px] shrink-0 items-center rounded-[12px] bg-[#F5F5F5] px-3 text-[14px] leading-5 text-[#262626]"
          >
            {x}
            <FiChevronDown className="ml-1" size={16} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortFilter;
