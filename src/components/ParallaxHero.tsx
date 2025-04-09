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
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div className="parallax-container">
      <div ref={parallaxRef} className="parallax-bg" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}></div>
      <div ref={contentRef} className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-6 text-center bg-psdj-charcoal">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-kessler leading-tight mb-6">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>
      </div>
    </div>;
};
export default ParallaxHero;