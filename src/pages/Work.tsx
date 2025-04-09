
import React, { useEffect, useState } from 'react';
import { siteData } from '../data/siteData';
import ParallaxHero from '../components/ParallaxHero';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';

const Work = () => {
  const { work } = siteData;
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(work.projects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(work.projects);
    } else {
      setFilteredProjects(work.projects.filter(project => 
        project.category.toLowerCase() === filter.toLowerCase()
      ));
    }
  }, [filter, work.projects]);

  return (
    <main>
      <ParallaxHero 
        backgroundImage={work.hero.backgroundImage}
        title={work.hero.title}
        subtitle={work.hero.subtitle}
      />
      
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl font-kessler mb-6">{work.intro.title}</h2>
              <p className="text-lg text-psdj-charcoal/80 leading-relaxed">
                {work.intro.text}
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="flex justify-center mb-16">
              <div className="flex space-x-6 border-b border-psdj-muted">
                <button 
                  onClick={() => setFilter('all')}
                  className={`py-3 px-4 text-sm uppercase tracking-wider transition-colors ${filter === 'all' ? 'text-psdj-accent border-b-2 border-psdj-accent -mb-px' : 'text-psdj-charcoal hover:text-psdj-accent'}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setFilter('residential')}
                  className={`py-3 px-4 text-sm uppercase tracking-wider transition-colors ${filter === 'residential' ? 'text-psdj-accent border-b-2 border-psdj-accent -mb-px' : 'text-psdj-charcoal hover:text-psdj-accent'}`}
                >
                  Residential
                </button>
                <button 
                  onClick={() => setFilter('commercial')}
                  className={`py-3 px-4 text-sm uppercase tracking-wider transition-colors ${filter === 'commercial' ? 'text-psdj-accent border-b-2 border-psdj-accent -mb-px' : 'text-psdj-charcoal hover:text-psdj-accent'}`}
                >
                  Commercial
                </button>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index % 3 * 150}>
                <ProjectCard 
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  image={project.image}
                  slug={project.slug}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Work;
