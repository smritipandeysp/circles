import React from "react";
import profile from "../assets/profile.png";
import glitter from "../assets/glitter.png";

const Expert: React.FC = () => {
  return (
    <div className="rounded-[12px] bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[4px]">
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              src={profile}
              alt="22 Guide"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="!font-bold text-[#262626]" style={{ fontWeight: 700 }}>
            22 Guide
          </span>
        </div>

        <button
          className="flex items-center gap-2 rounded-[12px] border px-3 py-2 text-[14px] text-[#FF7A59] bg-white !bg-white !border-[#FF7A59]"
          style={{ backgroundColor: "white", borderColor: "#FF7A59" }}
        >
          <img src={glitter} className="h-4 w-4" />
          ปรึกษาผู้เชี่ยวชาญ
        </button>
      </div>

      <p className="mt-3 text-[14px] leading-6 text-[#262626]">
        จากรีวิวของลูกค้า แนะนำว่าสำหรับรถ Honda Accord คนส่วนใหญ่จะเลือกใช้ยาง Michelin เพราะมีคุณสมบัติยอดนิยมมาก
        ขับทางไกลแทบไม่ได้ยินเสียงยางเลย เกาะถนนดี แม้ฝนตกก็ยังรู้สึกมั่นใจ ตอนนี้ใช้งาน 15,000 กม. ยังนุ่มเหมือนเดิม
        แต่ถ้าหากอยากได้ความคุ้มค่า แนะนำยาง Yokohama ครับ
      </p>
    </div>
  );
};

export default Expert;
