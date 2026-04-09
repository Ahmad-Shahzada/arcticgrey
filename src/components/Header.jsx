import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const navItems = ['Build', 'Migrate', 'Optimize', 'Apps', 'B2B', 'POS', 'Marketing'];

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 md:px-5 md:pt-6 w-full">
      <header className="bg-[#0A0A0A] text-white rounded-t-[18px] shadow-2xl relative border-b border-white/5">
        <div className="flex items-center justify-between px-6 md:px-14 py-[20px]">
          {/* Left: Logo */}
          <div className="flex items-center font-semibold tracking-wide shrink-0">
            <Link to="/">
              <img src="/images/lock-main-logo.webp" className="w-[200px]" alt="Logo" />
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
                  className={`
                    text-[17px] pb-1 border-b-2 transition-all duration-200 whitespace-nowrap
                    ${isActive
                      ? 'text-primary-accent border-primary-soft'
                      : 'border-transparent text-white hover:border-primary-soft hover:text-primary-accent'}
                  `}
                  style={
                    isActive
                      ? {
                          borderImageSource: 'var(--light-gradient)',
                          borderImageSlice: 1,
                        }
                      : {}
                  }
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
              <div className="relative cursor-pointer rounded-full p-2 text-primary-accent transition-all hover:bg-primary-accent hover:text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-primary-accent text-black text-[11px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </div>

              {/* User Icon */}
              <div
                className="cursor-pointer rounded-full p-3 transition-all hover:bg-primary-accent hover:text-black"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Get Started Button - gradient border using global gradient */}
              <button className="relative px-10 py-[10px] rounded-full text-[14px] font-semibold transition-all duration-300 text-white hover:text-black hover:bg-primary-accent before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[1.5px] before:bg-primary-gradient before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] hover:before:opacity-0">
                Get Started
              </button>

              {/* Book a Call - solid accent */}
              <button className="bg-primary-accent text-black px-9 py-[10px] rounded-full text-[14px] font-bold hover:bg-light-text transition-all">
                Book a Call
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-primary-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0A0A0A] border-t border-white/10
          ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}
        >
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
                    className={`text-lg font-medium transition-colors ${
                      isActive
                        ? 'text-primary-accent'
                        : 'text-white hover:text-primary-accent'
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
              <button className="w-full py-3 rounded-full text-center border border-primary-soft text-primary-accent font-semibold">
                Get Started
              </button>
              <button className="w-full py-3 rounded-full text-center bg-primary-accent text-black font-bold">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}