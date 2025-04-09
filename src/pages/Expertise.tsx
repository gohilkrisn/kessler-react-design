
import React, { useEffect } from 'react';
import { siteData } from '../data/siteData';
import ParallaxHero from '../components/ParallaxHero';
import ScrollReveal from '../components/ScrollReveal';
import ExpertiseCard from '../components/ExpertiseCard';
import { Card, CardContent } from '@/components/ui/card';

const Expertise = () => {
  const { expertise } = siteData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ParallaxHero 
        backgroundImage={expertise.hero.backgroundImage}
        title={expertise.hero.title}
        subtitle={expertise.hero.subtitle}
      />
      
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl font-kessler mb-6">{expertise.intro.title}</h2>
              <p className="text-lg text-psdj-charcoal/80 leading-relaxed">
                {expertise.intro.text}
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.areas.map((area, index) => (
              <ScrollReveal key={area.id} delay={index * 150}>
                <ExpertiseCard 
                  id={area.id}
                  title={area.title}
                  description={area.description}
                  image={area.image}
                  icon={area.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-psdj-light-gray">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-kessler mb-16 text-center">{expertise.process.title}</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.process.items.map((item, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="border-none h-full shadow-lg transform hover:translate-y-[-5px] transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-psdj-accent flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-kessler mb-4">{item.title}</h3>
                    <p className="text-psdj-charcoal/80">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-psdj-charcoal text-white relative overflow-hidden">
        <div className="circle-decoration top-20 right-20"></div>
        <div className="circle-decoration bottom-20 left-20"></div>
        
        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-kessler mb-16 text-center">Client Testimonials</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {expertise.testimonials.map((testimonial, index) => (
                  <ScrollReveal key={index} delay={index * 200}>
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                      <div className="text-5xl text-psdj-accent mb-4 font-kessler">"</div>
                      <p className="text-lg mb-6 italic text-white/90">{testimonial.quote}</p>
                      <p className="text-psdj-accent font-medium">— {testimonial.author}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Expertise;
