import React, { useState } from 'react';


const ArcticLogo = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" className="mr-2">
    <path
      d="M50 10 L10 90 L90 90 Z M50 35 L30 80 L70 80 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FeatureIcons = {
  Switch: () => <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
  Shield: () => <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  Cart: () => <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
};

// --- Data ---
const platforms = [
  { id: 'square', name: 'Square', imageUrl: '/images/mig-1.svg' },
  { id: 'magento', name: 'Magento', imageUrl: '/images/mig-2.png' },
  { id: 'woocommerce', name: 'WooCommerce', imageUrl: '/images/mig-3.avif' },
  { id: 'salesforce', name: 'Salesforce', imageUrl: '/images/mig-4.avif' },
  { id: 'bigcommerce', name: 'BigCommerce', imageUrl: '/images/mig-5.webp' },
  { id: 'custom', name: 'Custom', imageUrl: '/images/mig-6.png' },
  { id: 'amazon', name: 'Amazon', imageUrl: '/images/mig-7.png' },
  { id: 'wordpress', name: 'WordPress', imageUrl: '/images/mig-8.webp' },
  { id: 'squarespace', name: 'Squarespace', imageUrl: '/images/mig-9.webp' },
  { id: 'godaddy', name: 'GoDaddy', imageUrl: '/images/mig-10.avif' },
];

const MigrationPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const goldGradient = "linear-gradient(90deg, #f7d379, #e9be65, #f5e583, #c89447, #dcab57, #d6a453, #f7d87b, #a57331, #c18d42)";

  const progressPercentage = selectedPlatform ? 35 : 80;

  return (
    <div className='mx-0 sm:mx-5 px-3 md:px-8 lg:px-16 pb-5 bg-white'>
      
      <div className="min-h-screen bg-black rounded-2xl md:rounded-xl text-white p-6 md:p-12 lg:p-24 font-sans flex items-center justify-center relative overflow-hidden">

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">

          <div className="space-y-5 text-left order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl  font-light leading-[1.15]">
              <span className="font-semibold italic">Seamless</span>{' '}
              <span className="font-bold bg-primary-gradient bg-clip-text text-transparent ">
                Migration
              </span>{' '}
              to<br className="hidden md:block" />
              Shopify: Your Store's Next<br className="hidden md:block" />
              <span className="font-semibold"> Destination</span>
            </h1>

            <p className="text-zinc-400 text-base md:text-md max-w-[480px] pt-4 md:pt-6 leading-relaxed">
              Move your business from <span className='text-zinc-100 font-medium'>any platform</span> to Shopify effortlessly with Arctic Grey's specialized services. Start your risk-free,
              <span className='font-semibold underline underline-offset-8 ml-2 text-primary-accent'>try-before-you-buy</span> migration.
            </p>

            <div className="text-white space-y-4 md:space-y-6 pt-6 max-w-md">
              <FeatureItem Icon={FeatureIcons.Switch} text="Risk-Free Trial Migration" />
              <FeatureItem Icon={FeatureIcons.Shield} text="Zero Downtime Guarantee" />
              <FeatureItem Icon={FeatureIcons.Cart} text="Tailored for Every Business" />
            </div>

            {/* Primary CTA */}
            <div className="pt-8">
              <div
                className="border-2 border-primary-soft inline-block rounded-full group cursor-pointer w-full sm:w-auto"
              >
                <button className="flex items-center justify-center gap-2.5 hover:bg-white hover:text-black px-8 py-3.5 bg-black text-white text-base md:text-lg font-medium rounded-full w-full transition-all duration-300">
                  <span>Start your Shopify Test Drive</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM CARD */}
          <div className="bg-[#FAF8F5] text-zinc-900 rounded-[1.5rem] p-6 md:p-8 shadow-2xl order-1 lg:order-2">
            <div className="mb-6 flex items-center gap-1">
              <div style={{ color: '#dcab57' }} className="w-8 h-8 md:w-10 md:h-10">
                <ArcticLogo />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tighter uppercase text-zinc-800">
                ARCTIC<span className="font-light">GREY</span>
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <h2 className="text-lg md:text-xl font-bold leading-tight text-zinc-800">
                Which platform are you migrating from to Shopify?
              </h2>
              <p className='text-sm md:text-base text-gray-600'>
                We want to make sure you're matched with a team that has experience working with your current platform.
              </p>

              {/* Gradient Progress Bar */}
              <div className="relative w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-primary-gradient transition-all duration-700 ease-in-out"
                  style={{ width: `${progressPercentage}%`}}
                />
              </div>
            </div>

            {/* Platform Selection Grid: 1 col on mobile, 2 cols on tablet/desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platforms.map((p) => (
                <label
                  key={p.id}
                  className={`
                    flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all
                    ${selectedPlatform === p.id ? 'bg-white border-primary-soft shadow-md' : 'bg-white/50 border-zinc-100 hover:border-zinc-300'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="platform"
                      className="w-5 h-5 text-yellow-600 focus:ring-yellow-500"
                      onChange={() => setSelectedPlatform(p.id)}
                      checked={selectedPlatform === p.id}
                    />
                    <span className={`text-sm md:text-base ${selectedPlatform === p.id ? 'font-bold' : 'font-medium'}`}>
                      {p.name}
                    </span>
                  </div>
                  <img src={p.imageUrl} alt={p.name} className="w-6 h-6 md:w-8 md:h-8 object-contain grayscale-[0.5] contrast-125" />
                </label>
              ))}

              {/* Other Option */}
              <label className="flex items-center justify-between p-4 rounded-xl border-2 bg-zinc-50 border-dashed border-zinc-300 cursor-pointer hover:border-zinc-400 transition-all">
                <div className="flex items-center gap-3">
                  <input type="radio" name="platform" className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-medium">Other</span>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-zinc-200 rounded text-zinc-500 text-xs">...</div>
              </label>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ Icon, text }) => (
  <div className="flex items-center gap-4 py-4 border-b border-gray-400  transition-colors">
    <span className="flex-1 text-white text-[17px] pl-5">{text}</span>
    <Icon className='' />
  </div>
);

export default MigrationPage;