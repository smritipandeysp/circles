import React from "react";
import tire from "../assets/tire.png";
import star from "../assets/star.png";
import petlasLogo from "../assets/petlas.png";
import redRibbon from "../assets/redribbon.png";
import logo2 from "../assets/logo2.png";
import addToCart from "../assets/addtocart.png";

type Props = {
  brand: string;
  model: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  discount?: number;
};

const Product: React.FC<Props> = ({
  model,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
}) => {
  const features = [
    { label: "นุ่มเงียบ", score: 4 },
    { label: "การควบคุม", score: 4 },
    { label: "ประหยัดน้ำมัน", score: 4 },
    { label: "ทนทาน", score: 4 },
    { label: "ลดเสียงรบกวน", score: 4 },
  ];

  const PROGRESS_PERCENT = 75; 
  const DASH_OFFSET = 100 - PROGRESS_PERCENT; 

  return (
      <div className="w-full max-w-full rounded-[12px] bg-white p-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">

      {/* IMAGE + OVERLAYS */}
      <div className="relative">
        <img src={tire} alt={model} className="mx-auto h-48 w-auto object-contain" />

        {/* Ribbon with logo + rating*/}
        <div className="absolute left-0 top-[-18px] h-[72px] w-[43px]">
          <img src={redRibbon} alt="" className="h-[80px] w-[43px] object-cover" />
          <div className="absolute left-0 top-[8px] flex w-[43px] flex-col items-center justify-center">
            <img src={logo2} alt="" className="h-4 w-4" />
            <span className="mt-1 text-[12px] font-bold !text-white" style={{ color: "#fff" }}>
              {rating}
            </span>
          </div>
        </div>

        {/* Select box */}
        <div className="absolute right-[12px] top-[12px] h-[25px] w-[25px] rounded-[8px] border border-[#262626] bg-white" />
      </div>

      <div className="mt-[12px] space-y-[12px]">
        {/* Brand */}
        <img src={petlasLogo} alt="Petlas" className="h-4 object-contain" />

        {/* Title */}
        <h3 className="text-[18px] font-bold text-[#262626]">{model}</h3>

        {/* Rating row */}
        <div className="flex items-center gap-3">
          <img src={star} alt="" className="h-4 w-4" />
          <span className="text-[14px] font-medium text-[#262626]">{rating}</span>
          <span className="text-[14px] text-gray-500">({reviews})</span>
        </div>

        {/* Features row */}
        <div className="w-full overflow-x-auto hide-scrollbar -mx-[12px] px-[12px]">
          <div className="flex min-w-max items-center justify-center gap-[8px]">
            {features.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-[6px]">
                {/* Bigger wrapper so stroke isn't clipped */}
                <div className="relative h-[40px] w-[40px]">
                  <svg
                    className="h-full w-full -rotate-90 overflow-visible"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* background ring */}
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-[#EFEFEF]"
                      strokeWidth={4}
                    />
                    {/* progress ring */}
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-[#262626]"
                      strokeWidth={4}
                      strokeDasharray="100"
                      strokeDashoffset={DASH_OFFSET}
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Score number in the center */}
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[13px] font-bold leading-none text-[#262626]">
                    {item.score}
                  </span>
                </div>

                {/* Label under circle */}
                <span className="pt-[4px] text-center text-[10px] leading-[12px] text-[#262626] whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter boxes row */}
        <div className="flex flex-wrap justify-start gap-[8px] mt-2">
          <span className="px-[8px] py-[4px] rounded-[8px] bg-[#EFEFEF] text-[12px] font-medium text-[#262626]">
            รถ EV
          </span>
          <span className="px-[8px] py-[4px] rounded-[8px] bg-[#EFEFEF] text-[12px] font-medium text-[#262626]">
            Run Flat
          </span>
          <span className="px-[8px] py-[4px] rounded-[8px] bg-[#EFEFEF] text-[12px] font-medium text-[#262626]">
            รถ EV
          </span>
          <span className="px-[8px] py-[4px] rounded-[8px] bg-[#EFEFEF] text-[12px] font-medium text-[#262626]">
            Run Flat
          </span>
        </div>
        

        {/* Pricing row */}
        <div className="flex w-full flex-wrap items-center gap-[12px]">
          <span className="text-[18px] font-bold leading-[100%] text-[#E91C22]">
            ฿ {price.toLocaleString()}/เส้น
          </span>
          {originalPrice !== undefined && (
            <span className="text-[13px] text-gray-400 line-through">
              ฿ {originalPrice.toLocaleString()}
            </span>
          )}
          {discount !== undefined && (
            <span className="rounded-[12px] bg-[#E91C22] px-2 py-[2px] text-[11px] font-bold !text-white" style={{ color: "#fff" }}>
              -{discount}%
            </span>
          )}
        </div>


        {/* CTA */}
        <div className="w-full max-w-full box-border rounded-[12px] bg-white pr-[12px] overflow-hidden">
          <button
            className="box-border w-full max-w-full flex items-center justify-center gap-2 rounded-[12px] bg-[#111827] py-[10px] text-[14px] font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center">
              <img src={addToCart} alt="" className="max-h-full max-w-full object-contain" />
            </span>
            เพิ่มไปยังรถเข็น
          </button>
        </div>
      </div>

    </div>
  );
};

export default Product;
