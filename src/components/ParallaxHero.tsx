
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div 
        ref={parallaxRef} 
        className="parallax-bg" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-psdj-charcoal/20 mix-blend-multiply"></div>
      </div>
      
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
