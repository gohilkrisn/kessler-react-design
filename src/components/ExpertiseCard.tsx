
import React, { useRef, useEffect } from 'react';
import { Icon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ExpertiseCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ 
  id, 
  title, 
  description, 
  image, 
  icon 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Dynamic icon component
  const LucideIcon = Icons[icon as keyof typeof Icons] || Icons.Star;
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        const cardTop = cardRef.current?.getBoundingClientRect().top || 0;
        const offset = (scrollY - cardTop - window.innerHeight) * 0.05;
        imageRef.current.style.transform = `translateY(${Math.min(offset, 30)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Mouse movement parallax effect
  useEffect(() => {
    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!card || !imageRef.current) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 20;
      const moveY = (y - centerY) / 20;
      
      imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'translate(0, 0)';
      }
    };
    
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Define different shapes based on ID
  const getCardShape = () => {
    switch (id % 6) {
      case 0: return 'rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg';
      case 1: return 'rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg';
      case 2: return 'rounded-t-3xl rounded-b-lg';
      case 3: return 'rounded-b-3xl rounded-t-lg';
      case 4: return 'rounded-l-3xl rounded-r-lg';
      case 5: return 'rounded-r-3xl rounded-l-lg';
      default: return 'rounded-xl';
    }
  };

  return (
    <div 
      ref={cardRef} 
      className={`group relative overflow-hidden ${getCardShape()} h-[400px] transform transition-all duration-500 hover:shadow-2xl`}
    >
      <div 
        ref={imageRef} 
        className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out"
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-psdj-charcoal/10 via-psdj-charcoal/40 to-psdj-charcoal/90"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 transform transition-all duration-500">
        <div className="expertise-card-icon bg-psdj-accent rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <LucideIcon size={20} />
        </div>
        <h3 className="text-2xl font-kessler text-white mb-2 transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">{title}</h3>
        <div className="h-0.5 w-10 bg-psdj-accent transform transition-all duration-700 group-hover:w-20"></div>
        <p className="text-white/80 mt-3 opacity-0 transform translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">{description}</p>
      </div>
    </div>
  );
};

export default ExpertiseCard;
