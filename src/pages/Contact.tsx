
import React, { useEffect, useState } from 'react';
import { siteData } from '../data/siteData';
import ParallaxHero from '../components/ParallaxHero';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const { contact } = siteData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "Enquiry submitted",
        description: "Thank you for your interest. We'll be in touch soon.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <main>
      <ParallaxHero 
        backgroundImage={contact.hero.backgroundImage}
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
      />
      
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl font-kessler mb-6">{contact.intro.title}</h2>
              <p className="text-lg text-psdj-charcoal/80 leading-relaxed">
                {contact.intro.text}
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-kessler mb-6">{contact.office.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-psdj-accent mt-1 mr-3" />
                      <div>
                        <p>{contact.office.address.line1}</p>
                        <p>{contact.office.address.line2}</p>
                        <p>{contact.office.address.city}, {contact.office.address.postcode}</p>
                        <p>{contact.office.address.country}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-psdj-accent mr-3" />
                      <a 
                        href={`mailto:${contact.office.contact.email}`}
                        className="hover:text-psdj-accent transition-colors"
                      >
                        {contact.office.contact.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-psdj-accent mr-3" />
                      <a 
                        href={`tel:${contact.office.contact.phone}`}
                        className="hover:text-psdj-accent transition-colors"
                      >
                        {contact.office.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Opening Hours</h4>
                  <p>{contact.office.hours}</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="lg:col-span-3" delay={200}>
              <h3 className="text-2xl font-kessler mb-8">{contact.form.title}</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder={contact.form.fields.name}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-form-input"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="email"
                      name="email"
                      placeholder={contact.form.fields.email}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-form-input"
                    />
                    
                    <input
                      type="tel"
                      name="phone"
                      placeholder={contact.form.fields.phone}
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-form-input"
                    />
                  </div>
                  
                  <div>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="contact-form-input appearance-none"
                    >
                      <option value="" disabled>{contact.form.fields.projectType}</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder={contact.form.fields.message}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="contact-form-input resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="contact-form-button flex items-center justify-center"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Submitted
                      </>
                    ) : (
                      contact.form.submitText
                    )}
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-psdj-light-gray">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-kessler mb-12 text-center">{contact.map.title}</h2>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="h-[400px] bg-white w-full">
              {/* Map would go here - using placeholder for now */}
              <div className="w-full h-full bg-psdj-muted flex items-center justify-center">
                <p className="text-psdj-charcoal/60">Interactive map would be displayed here</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
