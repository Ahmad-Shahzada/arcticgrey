// src/components/StatCard.jsx
import React from 'react';

// Use simple SVG for up-arrow (extracted for clarity)
const UpArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="inline mr-1 mb-0.5">
    <path d="M7 17l9.2-9.2M17 17V7.8m0 0H7.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// We define a flexible component that can display ANY title and ANY value
export default function StatCard({ title, percentageValue, percentageChange }) {
  return (
    // We create a central data config object to easily reuse colors
    <div className="bg-[#111111] p-6 rounded-[12px] shadow-lg flex-1">
      <p className="text-[#AAAAAA] text-sm mb-1">{title}</p>
      
      {/* We apply a clean, golden color utility, like 'text-gold-complex' if we set it up */}
      <div className="flex items-end gap-1.5 text-lg font-bold [color:#dcab57]">
        <UpArrow />
        {percentageValue}%
      </div>
      
      <p className="text-white text-[12px] opacity-70">{percentageChange} improvement</p>
    </div>
  );
}