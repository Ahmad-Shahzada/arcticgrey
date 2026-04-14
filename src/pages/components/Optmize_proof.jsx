import React from 'react';

export default function OptimizeProof() {
    return (
        <section className="relative w-full  overflow-hidden  pb-16 my-10 px-5">

            {/* --- BACKGROUND DECORATIONS (Top-Left and Bottom-Right Curves) --- */}
            <div className="absolute top-0 left-0 w-48 md:w-64 lg:w-80 opacity-40 pointer-events-none">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-50 350C150 300 350 100 350 -50" stroke="#10b981" strokeWidth="1.5" />
                </svg>
            </div>

            <div className="absolute bottom-0 right-0 w-48 md:w-64 lg:w-80 opacity-40 pointer-events-none rotate-180">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-50 350C150 300 350 100 350 -50" stroke="#10b981" strokeWidth="1.5" />
                </svg>
            </div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">

                {/* Sparkle Icon */}
                <div className="flex justify-center mb-6">
                    <div className="relative left-[-150px] top-4 md:left-[-200px]">
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke="#333" strokeWidth="1" strokeLinecap="round" />
                            <path d="M18 16L18.5 18.5L21 19L18.5 19.5L18 22L17.5 19.5L15 19L17.5 18.5L18 16Z" stroke="#333" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl  font-medium text-[#0A0A0A] leading-tight mb-8">
                    Why Your Cart Drawer Is the Untapped<br className="hidden md:block" />
                    Goldmine of Your Shopify Store
                </h2>

                {/* Paragraph Text */}
                <p className="text-[#333333] text-base md:text-lg lg:text-xl leading-[1.7] md:leading-[1.8] max-w-5xl mx-auto font-normal">
                    Your cart drawer is the final frontier before checkout—the moment of truth where hesitation turns to abandonment or excitement seals the deal. An optimized cart drawer doesn't just hold items; it sells.
                    Here's the cold, hard truth backed by data:
                </p>
            </div>
        </section>
    );
}