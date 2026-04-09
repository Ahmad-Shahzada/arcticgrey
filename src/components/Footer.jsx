import React from 'react'

const Footer = () => {
  const services = [
    "Build a New Shopify Store",
    "Shopify Theme Customizations",
    "UX & UI Audit",
    "Convert Figma to Shopify",
    "ERP Connections to Shopify",
    "Shopify App Development",
    "Mobile App Development",
    "On Demand Dev with Bulk Hours",
    "Site Speed Optimization",
    "Point of Sale (POS) for Business",
    "A/B Testing for CRO, AOV & CLV",
    "B2B Solutions",
    "Hydrogen & Oxygen",
    "Get a Free Quote",
    "Gamify Your Shopify Cart Drawer"
  ];
  return (
    <div className='mx-5'>
      <div className="relative bg-black text-white font-sans overflow-hidden flex flex-col">
        <header className="flex items-center justify-between px-14 py-5 border-b border-[#1f1f1f] z-20 bg-black/50 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L22 20H2L12 2Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M12 10L17 19H7L12 10Z" fill="white" />
            </svg>
            <span className="text-lg font-bold tracking-[0.15em] uppercase">ArcticGrey</span>
          </div>

          {/* Locations List (Hidden on smaller screens) */}
          <div className="hidden lg:block text-[#a0a0a0] text-sm font-medium tracking-wide">
            Los Angeles - New York - Chicago - Seattle - Toronto - Boston - London - Washington D.C.
          </div>

          <div className="flex items-center space-x-2 cursor-pointer group">
            <svg className="w-5 h-5 text-white group-hover:text-[#e8b959] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
            </svg>
            <span className="text-sm font-bold group-hover:text-[#e8b959] transition-colors">We're Hiring</span>
          </div>
        </header>

        <main className="relative flex-1 flex flex-col items-center py-20 px-4 z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37] opacity-[0.08] blur-[100px] rounded-full pointer-events-none -z-10"></div>
          <h2 className="text-3xl font-bold mb-12 tracking-wide">
            Select a Service
          </h2>
          <div className="w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                className="group relative flex items-center justify-center text-center px-4 py-5 bg-[#111111] hover:bg-[#1a1a1a] border border-[#262626] hover:border-[#404040] rounded-xl transition-all duration-300 ease-in-out overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <span className="text-sm md:text-[14px] font-medium text-[#e5e5e5] group-hover:text-white transition-colors">
                  {service}
                </span>
              </button>
            ))}
          </div>

        </main>
        <div className="w-full h-[1px] bg-[#1f1f1f] mt-auto"></div>
      </div>
      <footer className="relative bg-black text-white font-sans overflow-hidden">

        {/* Background Golden Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#d4af37] opacity-[0.07] blur-[150px] rounded-full pointer-events-none"
          aria-hidden="true"
        ></div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pt-24 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Column 1: Company */}
            <div>
              <h3 className="text-white font-bold text-[17px] mb-8">Company</h3>
              <ul className="space-y-5">
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">About Arctic Grey</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Careers</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">We're Hiring</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Partner Program</a></li>
              </ul>
            </div>

            {/* Column 2: Awards & Reviews */}
            <div>
              <h3 className="text-white font-bold text-[17px] mb-8">Awards & Reviews</h3>
              <ul className="space-y-5">
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Write a Review</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Reviews</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">UX & UI Audit</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Case Studies</a></li>
              </ul>
            </div>

            {/* Column 3: Migration Solutions */}
            <div>
              <h3 className="text-white font-bold text-[17px] mb-8">Migration Solutions</h3>
              <ul className="space-y-5">
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Migrate to Shopify</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Migrate from Magento</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Migrate from BigCommerce</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Migrate from WooCommerce</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Migrate from Salesforce</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Migrate from Amazon</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Migrate from Prestashop</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Migrate from Any Platform</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Migrate from Liquid to Hydrogen</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Migrate From Shift4Shop</a></li>
              </ul>
            </div>

            {/* Column 4: Get Started */}
            <div>
              <h3 className="text-white font-bold text-[17px] mb-8">Get Started</h3>
              <ul className="space-y-5">
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">Build a New Shopify Store</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">Complete Shopify Tasks Quickly</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">Customize your Shopify Store</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">Get a Shopify Test Drive</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">Buy Bulk Hours</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">Product Customizer</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">Site Speed Optimizations</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">AB Test Form</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">Free Audit Form</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">Get Started Form</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">POS Consultation</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-relaxed block">ERP Integration Quote</a></li>
              </ul>
            </div>

            {/* Column 5: Resources & Connect */}
            <div>
              <h3 className="text-white font-bold text-[17px] mb-8">Resources & Connect</h3>
              <ul className="space-y-5 mb-10">
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Blog</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Case Studies</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Newsletter Signup</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors text-[14px]">Contact Us</a></li>
              </ul>

              <h3 className="text-white font-bold text-[17px] mb-6">Connect with us</h3>
              <div className="flex items-center space-x-5">
                {/* LinkedIn */}
                <a href="#" className="text-white hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a href="#" className="text-white hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text- hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="text-white hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="relative z-10 border-t border-[#1a1a1a] bg-black/50 backdrop-blur-sm">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white text-[13px]">
              Copyright © 2015 - 2026 Arctic Grey Limited. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3">
              <a href="#" className="text-white hover:text-white transition-colors text-[13px]">Terms of Service</a>
              <a href="#" className="text-white hover:text-white transition-colors text-[13px]">Privacy Policy</a>
              <a href="#" className="text-white hover:text-white transition-colors text-[13px]">Refund Policy</a>
              <a href="#" className="text-white hover:text-white transition-colors text-[13px]">Subscription Policy</a>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer
