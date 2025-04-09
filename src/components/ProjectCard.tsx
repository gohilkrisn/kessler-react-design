
import React from 'react';
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
  return (
    <Link to={`/work/${slug}`} className="project-card aspect-[4/5]">
      <img
        src={image}
        alt={title}
        className="project-card-image"
      />
      <div className="project-card-overlay">
        <div className="project-card-content">
          <span className="text-sm uppercase tracking-wider text-psdj-accent mb-1 block">{category}</span>
          <h3 className="text-xl font-kessler mb-2">{title}</h3>
          <p className="text-sm text-white/80 line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
