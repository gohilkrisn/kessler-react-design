
import React, { useEffect } from 'react';
import { siteData } from '../data/siteData';
import ParallaxHero from '../components/ParallaxHero';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { home } = siteData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ParallaxHero 
        backgroundImage={home.hero.backgroundImage}
        title={home.hero.title}
        subtitle={home.hero.subtitle}
      />
      
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-4xl font-kessler mb-6">{home.intro.title}</h2>
              <p className="text-lg text-psdj-charcoal/80 leading-relaxed">
                {home.intro.text}
              </p>
              <Link to="/about" className="inline-flex items-center mt-6 text-psdj-accent hover:text-psdj-charcoal transition-colors group">
                <span>Learn more about our approach</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="rounded-sm overflow-hidden">
                <img 
                  src={home.intro.image} 
                  alt="Interior design by PSDJ"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-psdj-light-gray">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-kessler mb-16 text-center">{home.services.title}</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {home.services.list.map((service, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="p-10 bg-white h-full">
                  <h3 className="text-2xl font-kessler mb-4">{service.title}</h3>
                  <p className="text-psdj-charcoal/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
              <h2 className="text-4xl font-kessler">{home.featured.title}</h2>
              <Link to="/work" className="inline-flex items-center mt-4 md:mt-0 text-psdj-accent hover:text-psdj-charcoal transition-colors group">
                <span>View all projects</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home.featured.projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 150}>
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
      
      <section className="py-24 px-6 bg-psdj-charcoal text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl font-kessler mb-8">{home.clients.title}</h2>
            <p className="text-lg text-white/80 mb-12">
              {home.clients.text}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12">
              {home.clients.list.map((client, index) => (
                <div key={index} className="px-6">
                  <span className="text-xl font-kessler text-psdj-accent">{client}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
