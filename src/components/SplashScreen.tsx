
import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 3300); // Total animation duration plus small buffer

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-psdj-charcoal z-50 flex items-center justify-center animate-splash-fade-out`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-kessler text-white opacity-0 animate-splash-logo-reveal">
          PSDJ
        </h1>
        <div className="mt-2 opacity-0 animate-splash-logo-reveal" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-psdj-accent uppercase tracking-[0.2em]">
            Interior Architecture
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
