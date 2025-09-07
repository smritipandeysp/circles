import React from 'react';
import logo from '../assets/logo3.png';
import cartIcon from '../assets/cart.png';
import userIcon from '../assets/user.png';

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white">
      <div
        className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 box-border"
        style={{
          paddingTop: '36px',
          paddingBottom: '12px',
          height: '75px',
        }}
      >

        <div className="w-[114px] h-[27px] flex-shrink-0">
          <img
            src={logo}
            alt="22 Circles Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="w-[24px] h-[24px]">
            <img
              src={cartIcon}
              alt="Cart"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[24px] h-[24px]">
            <img
              src={userIcon}
              alt="User"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
