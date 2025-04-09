
import React, { useEffect, useRef } from 'react';

interface ParallaxHeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  backgroundImage,
  title,
  subtitle
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * 0.4; // Adjust speed of parallax
        parallaxRef.current.style.transform = `translateY(${translateY}px)`;
      }
      
      if (contentRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - scrollPosition / 700; // Fade out as user scrolls
        contentRef.current.style.opacity = Math.max(opacity, 0).toString();
      }
      
      if (titleRef.current && subtitleRef.current) {
        const scrollPosition = window.scrollY;
        const titleTranslate = scrollPosition * 0.2;
        const subtitleTranslate = scrollPosition * 0.1;
        
        titleRef.current.style.transform = `translateY(-${titleTranslate}px)`;
        subtitleRef.current.style.transform = `translateY(-${subtitleTranslate}px)`;
      }
      
      if (overlayRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 0.4 + (scrollPosition / 1000);
        overlayRef.current.style.opacity = Math.min(opacity, 0.7).toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animated particles for hero
  useEffect(() => {
    const createParticle = () => {
      if (!contentRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white opacity-20';
      
      // Random size between 3px and 8px
      const size = Math.random() * 5 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Animation duration between 10s and 20s
      const duration = Math.random() * 10 + 10;
      particle.style.animation = `float-animation ${duration}s ease-in-out infinite`;
      
      // Random delay
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      contentRef.current.appendChild(particle);
      
      // Remove particle after some time to avoid memory issues
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, duration * 1000);
    };
    
    // Create initial particles
    for (let i = 0; i < 10; i++) {
      createParticle();
    }
    
    // Create new particles periodically
    const intervalId = setInterval(createParticle, 3000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div 
        ref={parallaxRef} 
        className="parallax-bg" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>
      
      <div 
        ref={overlayRef} 
        className="absolute inset-0 bg-psdj-charcoal mix-blend-multiply opacity-40 transition-opacity duration-700"
      ></div>
      
      <div ref={contentRef} className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-6 text-center bg-transparent overflow-hidden">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-kessler leading-tight mb-6 hero-title"
        >
          {title.split('').map((letter, index) => (
            <span 
              key={index} 
              className="inline-block transition-transform hover:scale-110 hover:text-psdj-accent"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl max-w-2xl hero-subtitle relative"
        >
          {subtitle}
          <span className="block h-1 w-20 bg-psdj-accent mt-6 mx-auto"></span>
        </p>
      </div>
    </div>
  );
};

export default ParallaxHero;
