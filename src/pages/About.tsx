
import React, { useEffect } from 'react';
import { siteData } from '../data/siteData';
import ParallaxHero from '../components/ParallaxHero';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  const { about } = siteData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ParallaxHero 
        backgroundImage={about.hero.backgroundImage}
        title={about.hero.title}
        subtitle={about.hero.subtitle}
      />
      
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl font-kessler mb-6">{about.intro.title}</h2>
              <p className="text-lg text-psdj-charcoal/80 leading-relaxed">
                {about.intro.text}
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-kessler mb-6">{about.story.title}</h2>
              <div className="text-psdj-charcoal/80 leading-relaxed space-y-4">
                {about.story.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                    alt="PSDJ Interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden mt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                    alt="PSDJ Interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-psdj-light-gray">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-kessler mb-16 text-center">{about.values.title}</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.values.items.map((value, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="bg-white p-8 h-full">
                  <h3 className="text-2xl font-kessler mb-4">{value.title}</h3>
                  <p className="text-psdj-charcoal/80">
                    {value.description}
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
            <h2 className="text-4xl font-kessler mb-16 text-center">{about.team.title}</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.team.members.map((member, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="text-center">
                  <div className="aspect-square overflow-hidden mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-xl font-kessler mb-1">{member.name}</h3>
                  <p className="text-sm text-psdj-accent uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-psdj-charcoal/80">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-psdj-charcoal text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl font-kessler mb-12">{about.awards.title}</h2>
            
            <div className="space-y-6">
              {about.awards.items.map((award, index) => (
                <div key={index} className="border-b border-white/10 pb-6 last:border-0">
                  <p className="text-xl font-kessler">{award}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
