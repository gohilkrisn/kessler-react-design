
import React, { useEffect } from 'react';
import { siteData } from '../data/siteData';
import ParallaxHero from '../components/ParallaxHero';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight, ArrowUpRight, Award, Compass, Home as HomeIcon, Building, Palette, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const { home } = siteData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
        title={home.hero.title}
        subtitle={home.hero.subtitle}
      />
      
      {/* Intro Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="circle-decoration top-20 left-[-100px]"></div>
        <div className="circle-decoration bottom-20 right-[-100px]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-widest text-psdj-accent mb-3 block">About PSDJ Design</span>
              <h2 className="text-4xl font-kessler mb-6">{home.intro.title}</h2>
              <p className="text-lg text-psdj-charcoal/80 leading-relaxed mb-6">
                {home.intro.text}
              </p>
              <p className="text-lg text-psdj-charcoal/80 leading-relaxed">
                We believe in creating spaces that inspire and elevate daily living through a blend of functionality and aesthetic excellence. Each project is approached with meticulous attention to detail and a commitment to exceeding client expectations.
              </p>
              <Link to="/about" className="inline-flex items-center mt-8 text-psdj-accent hover:text-psdj-charcoal transition-colors group border-b border-psdj-accent/30 pb-1 hover:border-psdj-charcoal/50">
                <span>Learn more about our approach</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80"
                  alt="Interior design by PSDJ"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-psdj-charcoal text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollReveal className="text-center">
              <p className="text-5xl font-kessler text-psdj-accent mb-2">15+</p>
              <p className="text-sm uppercase tracking-wider">Years Experience</p>
            </ScrollReveal>
            
            <ScrollReveal delay={100} className="text-center">
              <p className="text-5xl font-kessler text-psdj-accent mb-2">230+</p>
              <p className="text-sm uppercase tracking-wider">Projects Completed</p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="text-center">
              <p className="text-5xl font-kessler text-psdj-accent mb-2">18</p>
              <p className="text-sm uppercase tracking-wider">Design Awards</p>
            </ScrollReveal>
            
            <ScrollReveal delay={300} className="text-center">
              <p className="text-5xl font-kessler text-psdj-accent mb-2">92%</p>
              <p className="text-sm uppercase tracking-wider">Client Retention</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Enhanced Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-psdj-light-gray relative overflow-hidden">
        <div className="circle-decoration top-40 right-[-100px]"></div>
        
        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-psdj-accent mb-3 block">What We Do</span>
              <h2 className="text-4xl font-kessler mb-6">{home.services.title}</h2>
              <p className="text-lg text-psdj-charcoal/80">
                We offer comprehensive design services tailored to transform spaces into functional works of art.
                Our expertise spans residential and commercial projects, with a focus on creating environments that
                inspire and elevate everyday experiences.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {home.services.list.map((service, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="service-card h-full group">
                  <div className="service-card-content">
                    <div className="service-card-icon">
                      {index === 0 && <HomeIcon className="w-7 h-7 text-psdj-accent" />}
                      {index === 1 && <Building className="w-7 h-7 text-psdj-accent" />}
                      {index === 2 && <Palette className="w-7 h-7 text-psdj-accent" />}
                    </div>
                    <h3 className="text-2xl font-kessler mb-4">{service.title}</h3>
                    <p className="text-psdj-charcoal/80 leading-relaxed mb-6 group-hover:text-white/90">
                      {service.description}
                    </p>
                    <div className="flex items-center mt-6 text-psdj-accent group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowUpRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={450}>
            <div className="mt-16 text-center">
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-psdj-accent hover:bg-psdj-charcoal text-white rounded-full transition-colors duration-300 group">
                <span>View All Services</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-psdj-accent mb-3 block">Our Approach</span>
              <h2 className="text-4xl font-kessler mb-6">Design Process</h2>
              <p className="text-lg text-psdj-charcoal/80">
                Our collaborative design process ensures that every project receives the attention it deserves,
                resulting in spaces that perfectly balance form and function.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ScrollReveal delay={100}>
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-lg">
                <div className="h-1 bg-psdj-accent"></div>
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-full bg-psdj-accent/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-kessler text-psdj-accent">1</span>
                  </div>
                  <h3 className="text-xl font-kessler mb-3">Consultation</h3>
                  <p className="text-sm text-psdj-charcoal/70">
                    We begin with an in-depth discussion to understand your vision, requirements, and budget constraints.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-lg">
                <div className="h-1 bg-psdj-accent"></div>
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-full bg-psdj-accent/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-kessler text-psdj-accent">2</span>
                  </div>
                  <h3 className="text-xl font-kessler mb-3">Concept Design</h3>
                  <p className="text-sm text-psdj-charcoal/70">
                    Our team creates initial design concepts that align with your goals and aesthetic preferences.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-lg">
                <div className="h-1 bg-psdj-accent"></div>
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-full bg-psdj-accent/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-kessler text-psdj-accent">3</span>
                  </div>
                  <h3 className="text-xl font-kessler mb-3">Development</h3>
                  <p className="text-sm text-psdj-charcoal/70">
                    We refine the chosen concept through detailed drawings, material selections, and spatial planning.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-lg">
                <div className="h-1 bg-psdj-accent"></div>
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-full bg-psdj-accent/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-kessler text-psdj-accent">4</span>
                  </div>
                  <h3 className="text-xl font-kessler mb-3">Implementation</h3>
                  <p className="text-sm text-psdj-charcoal/70">
                    We oversee the execution of the design, ensuring that every detail is implemented to perfection.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-24 px-6 bg-white relative">
        <div className="circle-decoration bottom-20 left-[-100px]"></div>
        
        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
              <div>
                <span className="text-xs uppercase tracking-widest text-psdj-accent mb-3 block">Our Portfolio</span>
                <h2 className="text-4xl font-kessler">{home.featured.title}</h2>
              </div>
              <Link to="/work" className="inline-flex items-center mt-4 md:mt-0 text-psdj-accent hover:text-psdj-charcoal transition-colors group border-b border-psdj-accent/30 pb-1 hover:border-psdj-charcoal/50">
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
      
      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-psdj-light-gray">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-psdj-accent mb-3 block">What Clients Say</span>
              <h2 className="text-4xl font-kessler mb-6">Testimonials</h2>
              <p className="text-lg text-psdj-charcoal/80">
                We take pride in the relationships we build with our clients and the successful outcomes we achieve together.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollReveal>
              <Card className="border-none shadow-xl p-8 bg-white rounded-lg">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-psdj-accent">★</span>
                      ))}
                    </div>
                    <p className="italic text-lg mb-6">
                      "PSDJ transformed our space beyond recognition. Their attention to detail and understanding of our vision
                      was exceptional. The team was professional, creative, and a pleasure to work with throughout the process."
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-kessler text-lg">Sarah Johnson</p>
                    <p className="text-sm text-psdj-charcoal/70">Residential Client</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={150}>
              <Card className="border-none shadow-xl p-8 bg-white rounded-lg">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-psdj-accent">★</span>
                      ))}
                    </div>
                    <p className="italic text-lg mb-6">
                      "Working with PSDJ on our office redesign was a seamless experience. They understood our brand and created
                      a space that perfectly balances functionality with aesthetic appeal. Highly recommended."
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-kessler text-lg">Michael Chen</p>
                    <p className="text-sm text-psdj-charcoal/70">Commercial Client</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-24 px-6 bg-psdj-charcoal text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl font-kessler mb-8">{home.clients.title}</h2>
            <p className="text-lg text-white/80 mb-12">
              {home.clients.text}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12">
              {home.clients.list.map((client, index) => (
                <div key={index} className="px-6 group">
                  <span className="text-xl font-kessler text-psdj-accent group-hover:text-white transition-colors duration-300">{client}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-psdj-accent/10 to-psdj-light-gray">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-kessler mb-6">Ready to Transform Your Space?</h2>
              <p className="text-lg text-psdj-charcoal/80 mb-10 max-w-2xl mx-auto">
                Let's collaborate to create an environment that inspires and elevates your everyday experience.
                Contact us to begin your journey to exceptional design.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-psdj-accent hover:bg-psdj-charcoal text-white rounded-full transition-colors duration-300 group">
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
