import React from 'react';
import filterIcon from '../assets/filter.png';

type InfoCardProps = {
  model: string;
  size: string;
};

const InfoCard: React.FC<InfoCardProps> = ({ model, size }) => {
  return (
    <div className="bg-[#F5F5F5] rounded-[12px] px-[12px] py-[12px] flex items-center justify-between">
      
      {/* Left content */}
      <div className="flex flex-col justify-center gap-[4px] flex-1 min-w-0">
        <h1 className="text-[16px] font-bold text-[#262626] leading-[19px] tracking-normal truncate">
          {model}
        </h1>
        <div className="flex items-center gap-[4px]">
          <span className="text-[12px] text-[#909090] leading-[15px] tracking-normal">
            ขนาดยาง
          </span>
          <span className="text-[12px] text-[#909090] leading-[15px] tracking-normal">
            {size}
          </span>
        </div>
      </div>

      {/* Filter Icon */}
      <div className="flex-shrink-0 w-[24px] h-[24px] ml-[12px]">
        <img
          src={filterIcon}
          alt="Filter"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default InfoCard;
