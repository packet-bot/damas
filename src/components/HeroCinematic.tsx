import React, { useState, useEffect } from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2400", // Luxury table setting
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=2400", // Gourmet catering detail
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2400", // Grand event venue
  "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=2400"  // Premium service / Champagne
];

const HeroCinematic: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Cinematic Image Stack */}
      <div className="absolute inset-0 w-full h-full">
        {IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Luxury Atmosphere ${index + 1}`}
            className={`
              transition-opacity duration-[3000ms] ease-in-out 
              absolute inset-0 w-full h-full object-cover
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}
      </div>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0a0a0a]" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-serif text-white text-5xl lg:text-7xl tracking-wide transition-all duration-1000">
          Dalal Ak Jaam
        </h1>
        <p className="uppercase tracking-[0.3em] text-[#B5945C] text-sm mt-4 font-light">
          L'art de recevoir.
        </p>
      </div>

      {/* Minimal Progress Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {IMAGES.map((_, index) => (
          <div
            key={index}
            className={`h-[1px] transition-all duration-1000 ${
              index === currentIndex ? 'w-12 bg-[#B5945C]' : 'w-6 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCinematic;
