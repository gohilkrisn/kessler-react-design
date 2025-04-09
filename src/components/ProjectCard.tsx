
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  category, 
  description, 
  image, 
  slug 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for card on mouse move
  useEffect(() => {
    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!card) return;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
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
  
  return (
    <Link to={`/work/${slug}`} className="block group">
      <div 
        ref={cardRef}
        className="project-card aspect-[4/5] group transition-all duration-500"
        style={{
          borderRadius: id % 3 === 0 ? '2rem 0.5rem 2rem 0.5rem' : 
                     id % 3 === 1 ? '0.5rem 2rem 0.5rem 2rem' : 
                     '2rem'
        }}
      >
        <div className="w-full h-full overflow-hidden" 
          style={{
            borderRadius: id % 3 === 0 ? '2rem 0.5rem 2rem 0.5rem' : 
                      id % 3 === 1 ? '0.5rem 2rem 0.5rem 2rem' : 
                      '2rem'
          }}>
          <img
            src={image}
            alt={title}
            className="project-card-image"
          />
        </div>
        
        <div className="project-card-overlay"
          style={{
            borderRadius: id % 3 === 0 ? '2rem 0.5rem 2rem 0.5rem' : 
                      id % 3 === 1 ? '0.5rem 2rem 0.5rem 2rem' : 
                      '2rem'
          }}>
          <div className="project-card-content relative z-10">
            <div className="absolute -top-10 left-0 w-10 h-1 bg-psdj-accent transform transition-all duration-500 group-hover:w-20"></div>
            <span className="text-sm uppercase tracking-wider text-psdj-accent mb-1 block">{category}</span>
            <h3 className="text-xl font-kessler mb-2">{title}</h3>
            <p className="text-sm text-white/80 line-clamp-3">{description}</p>
            <div className="mt-4 inline-block overflow-hidden">
              <span className="relative inline-block group-hover:translate-x-2 transition-transform duration-500 after:content-['→'] after:ml-2 after:transition-all after:duration-300 after:opacity-0 group-hover:after:opacity-100">View Project</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
