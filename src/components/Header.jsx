import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation(); 
  
  const navItems = ['Build', 'Migrate', 'Optimize', 'Apps', 'B2B', 'POS', 'Marketing'];

  // --- Green Gradient from your Hero Section ---
  const greenGradient = "linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%)";

  const style = {
    color: isHovered ? '#000000' : '#10b981', // Changed gold to emerald
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };

  return (
    // Background matches the start of the Hero
    <div className="sticky bg-emerald-50 top-0 z-50 px-3 pt-3 md:px-5 md:pt-6 w-full">
      <header className="bg-[#0A0A0A] text-white rounded-t-[18px] shadow-2xl relative border-b border-white/5">
        <div className="flex items-center justify-between px-6 md:px-14 py-[20px]">

          {/* Left: Logo */}
          <div className="flex items-center font-semibold tracking-wide shrink-0">
            <Link to="/">
              <img src="/images/lock-main-logo.webp" className='w-[200px]' alt="Logo" />
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[30px] xl:gap-[43px]">
            {navItems.map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <Link
                  key={item}
                  to={path}
                  className={`text-[17px] pb-1 border-b-2 transition-all duration-200 whitespace-nowrap
                    ${isActive ? 'text-emerald-400' : 'border-transparent text-white hover:border-emerald-400'}`}
                  style={isActive ? { borderImageSource: greenGradient, borderImageSlice: 1 } : {}}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop Actions */}
          <div className="hidden lg:flex items-center gap-[20px]">
            <div className="flex items-center gap-[18px]">
              {/* Cart Icon */}
              <div className="relative cursor-pointer hover:bg-emerald-500 hover:text-black rounded-full p-2 text-emerald-500 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-emerald-500 text-black text-[11px] font-bold rounded-full flex items-center justify-center">0</span>
              </div>
              {/* User Icon */}
              <div 
                className="cursor-pointer hover:bg-emerald-500 rounded-full p-3 transition-all" 
                style={style} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Get Started Button - Emerald Glow Effect */}
              <button className="relative px-10 py-[10px] rounded-full text-[14px] font-semibold transition-all duration-300 text-white hover:text-black hover:bg-emerald-500 before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[1.5px] before:bg-[linear-gradient(135deg,#22c55e,#10b981,#059669)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] hover:before:opacity-0">
                Get Started
              </button>
              {/* Book a Call - Solid Emerald */}
              <button className="bg-emerald-500 text-black px-9 py-[10px] rounded-full text-[14px] font-bold hover:bg-emerald-400 transition-all">
                Book a Call
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-emerald-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0A0A0A] border-t border-white/10
          ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="flex flex-col p-6 gap-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const path = `/${item.toLowerCase()}`;
                const isActive = location.pathname === path;

                return (
                  <Link
                    key={item}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${isActive ? 'text-emerald-400' : 'text-white hover:text-emerald-400'}`}
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
              <button className="w-full py-3 rounded-full text-center border border-emerald-500 text-emerald-400 font-semibold">
                Get Started
              </button>
              <button className="w-full py-3 rounded-full text-center bg-emerald-500 text-black font-bold">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}