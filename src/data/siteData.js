export const siteData = {
  metadata: {
    siteName: "PSDJ Interior Architecture",
    description: "Luxury interior architecture and design studio",
    contact: {
      email: "info@psdjinteriors.com",
      phone: "+44 20 7123 4567",
      address: "123 Design Street, London, UK",
    },
    social: {
      instagram: "https://instagram.com/psdjinteriors",
      pinterest: "https://pinterest.com/psdjinteriors",
      linkedin: "https://linkedin.com/company/psdjinteriors",
    }
  },
  
  home: {
    hero: {
      title: "Crafting Luxury Interiors",
      subtitle: "Award-winning interior architecture for high-end residential & commercial spaces",
      backgroundImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop",
    },
    intro: {
      title: "Thoughtful Design",
      text: "PSDJ Interior Architecture creates bespoke interiors that balance elegance with functionality. Each project is approached with careful consideration for the architectural context, client aspirations, and the intrinsic qualities of the space.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    },
    services: {
      title: "Our Services",
      list: [
        {
          title: "Interior Architecture",
          description: "Comprehensive architectural solutions for interior spaces, including spatial planning, structural modifications, and technical specifications."
        },
        {
          title: "Interior Design",
          description: "Complete design services encompassing concept development, material selection, furniture specification, and decorative elements."
        },
        {
          title: "Project Management",
          description: "End-to-end project coordination, contractor liaison, and implementation oversight to ensure the highest quality execution."
        }
      ]
    },
    featured: {
      title: "Featured Projects",
      projects: [
        {
          id: 1,
          title: "Kensington Townhouse",
          category: "Residential",
          description: "Complete renovation of a Grade II listed Georgian townhouse in Kensington.",
          image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
          slug: "kensington-townhouse"
        },
        {
          id: 2,
          title: "Mayfair Penthouse",
          category: "Residential",
          description: "Luxury interior design for a contemporary penthouse apartment in Mayfair.",
          image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
          slug: "mayfair-penthouse"
        },
        {
          id: 3,
          title: "The Sanctuary Spa",
          category: "Commercial",
          description: "Complete design and fit-out for an exclusive wellness retreat in central London.",
          image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
          slug: "sanctuary-spa"
        }
      ]
    },
    clients: {
      title: "Our Clients",
      text: "We have had the privilege of working with discerning clients who value thoughtful design and exceptional quality.",
      list: ["Luxury Hotel Group", "Belgravia Estates", "The Modern House", "Mayfair Developments", "Knightsbridge Living"]
    }
  },
  
  work: {
    hero: {
      title: "Our Work",
      subtitle: "A curated selection of our award-winning portfolio",
      backgroundImage: "https://images.unsplash.com/photo-1600566753226-66d4c86341f5?q=80&w=2070&auto=format&fit=crop"
    },
    intro: {
      title: "Designed for Living",
      text: "Each project reflects our commitment to creating spaces that enhance the way people live, work, and interact. Our diverse portfolio spans luxury residential properties, boutique commercial spaces, and bespoke hospitality environments."
    },
    projects: [
      {
        id: 1,
        title: "Kensington Townhouse",
        category: "Residential",
        description: "Complete renovation of a Grade II listed Georgian townhouse in Kensington.",
        location: "Kensington, London",
        year: "2023",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
        ],
        slug: "kensington-townhouse"
      },
      {
        id: 2,
        title: "Mayfair Penthouse",
        category: "Residential",
        description: "Luxury interior design for a contemporary penthouse apartment in Mayfair.",
        location: "Mayfair, London",
        year: "2022",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2071&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop"
        ],
        slug: "mayfair-penthouse"
      },
      {
        id: 3,
        title: "The Sanctuary Spa",
        category: "Commercial",
        description: "Complete design and fit-out for an exclusive wellness retreat in central London.",
        location: "Chelsea, London",
        year: "2023",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600607688795-3a59a4d5df40?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop"
        ],
        slug: "sanctuary-spa"
      },
      {
        id: 4,
        title: "Belgravia Residence",
        category: "Residential",
        description: "Modern intervention within a classic Belgravia property, creating a harmonious blend of historical and contemporary design.",
        location: "Belgravia, London",
        year: "2021",
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2074&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2074&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600607688705-68c9dae89186?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
        ],
        slug: "belgravia-residence"
      },
      {
        id: 5,
        title: "Notting Hill Loft",
        category: "Residential",
        description: "Conversion of a former industrial space into a sophisticated urban loft apartment.",
        location: "Notting Hill, London",
        year: "2022",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600607687644-c7f34b10a46f?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600566752229-250ed79470f8?q=80&w=2070&auto=format&fit=crop"
        ],
        slug: "notting-hill-loft"
      },
      {
        id: 6,
        title: "Knightsbridge Boutique",
        category: "Commercial",
        description: "High-end retail space design featuring custom joinery, bespoke lighting, and luxurious finishes.",
        location: "Knightsbridge, London",
        year: "2021",
        image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2074&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2074&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop"
        ],
        slug: "knightsbridge-boutique"
      }
    ]
  },
  
  about: {
    hero: {
      title: "About PSDJ",
      subtitle: "Creating exceptional spaces since 2005",
      backgroundImage: "https://images.unsplash.com/photo-1600607688705-68c9dae89186?q=80&w=2070&auto=format&fit=crop",
    },
    intro: {
      title: "Our Approach",
      text: "We believe interior architecture should be a thoughtful response to both human needs and architectural context. Our design philosophy is built on creating spaces that are not only aesthetically refined but also deeply functional and meaningful for those who inhabit them."
    },
    story: {
      title: "Our Story",
      content: "PSDJ Interior Architecture was founded in 2005 by four partners with complementary expertise in architecture, interior design, and project management. Over the past two decades, we have grown to become one of London's most respected interior architecture practices, known for our thoughtful approach and meticulous attention to detail.\n\nOur diverse team brings together expertise from across the design spectrum, allowing us to offer a truly holistic service that considers every aspect of the interior environment."
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Excellence",
          description: "We pursue excellence in every aspect of our work, from concept to completion."
        },
        {
          title: "Integrity",
          description: "We maintain the highest standards of professional integrity in all our client and supplier relationships."
        },
        {
          title: "Innovation",
          description: "We continuously explore new ideas, technologies, and approaches to enhance our design solutions."
        },
        {
          title: "Collaboration",
          description: "We believe the best results emerge from close collaboration with clients, consultants, and craftspeople."
        }
      ]
    },
    team: {
      title: "Meet Our Team",
      members: [
        {
          name: "Patricia Smith",
          role: "Founding Partner & Creative Director",
          bio: "Patricia brings over 25 years of experience in luxury residential design, with a particular focus on heritage properties.",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
        },
        {
          name: "David Jones",
          role: "Founding Partner & Technical Director",
          bio: "With a background in architecture, David oversees the technical aspects of all projects, ensuring design integrity is maintained throughout implementation.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Sarah Parker",
          role: "Design Director",
          bio: "Sarah leads our design team, bringing her distinctive aesthetic sensibility and deep understanding of materials to every project.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        },
        {
          name: "James Williams",
          role: "Project Director",
          bio: "James manages our project delivery, ensuring every design is executed to the highest standards and client expectations are exceeded.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        }
      ]
    },
    awards: {
      title: "Awards & Recognition",
      items: [
        "Interior Design of the Year, Design Awards 2023",
        "Best Residential Interior, Architecture Prize 2022",
        "Innovation in Design, London Design Festival 2021",
        "Best Heritage Renovation, Architectural Review 2020",
        "Designer of the Year, UK Property Awards 2019"
      ]
    }
  },
  
  contact: {
    hero: {
      title: "Contact Us",
      subtitle: "Let's discuss your project",
      backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    },
    intro: {
      title: "Get in Touch",
      text: "We're always interested in discussing new projects and opportunities. Whether you're planning a residential renovation, a commercial fit-out, or a hospitality project, we'd love to hear from you."
    },
    office: {
      title: "London Studio",
      address: {
        line1: "123 Design Street",
        line2: "Mayfair",
        city: "London",
        postcode: "W1K 3JH",
        country: "United Kingdom"
      },
      contact: {
        email: "info@psdjinteriors.com",
        phone: "+44 20 7123 4567"
      },
      hours: "Monday to Friday: 9:00 am - 6:00 pm"
    },
    form: {
      title: "Start a Project",
      fields: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number",
        projectType: "Project Type",
        message: "Tell us about your project"
      },
      submitText: "Submit Enquiry"
    },
    map: {
      title: "Find Us",
      location: {
        lat: 51.510067,
        lng: -0.134792
      }
    }
  },
  
  expertise: {
    hero: {
      title: "Our Expertise",
      subtitle: "Specialized knowledge and proven capabilities in interior architecture",
      backgroundImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    },
    intro: {
      title: "Areas of Specialization",
      text: "Our team brings together decades of experience across a wide range of disciplines, allowing us to deliver truly comprehensive interior architecture solutions. From technical expertise to creative vision, we offer an unparalleled depth of knowledge in every aspect of the design process."
    },
    areas: [
      {
        id: 1,
        title: "Residential Design",
        description: "From historic townhouses to contemporary apartments, our residential expertise encompasses properties of all scales and styles. We create homes that perfectly balance aesthetic aspiration with practical living needs.",
        image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2074&auto=format&fit=crop",
        icon: "Home"
      },
      {
        id: 2,
        title: "Hospitality Spaces",
        description: "Our hospitality designs create memorable guest experiences through thoughtful space planning, atmospheric lighting, and carefully curated material palettes that establish distinctive brand identities.",
        image: "https://images.unsplash.com/photo-1600607687644-c7f34b10a46f?q=80&w=2070&auto=format&fit=crop",
        icon: "UtensilsCrossed"
      },
      {
        id: 3,
        title: "Retail Environments",
        description: "We design retail spaces that tell compelling brand stories, create immersive customer journeys, and ultimately drive commercial success through innovative spatial experiences.",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
        icon: "ShoppingBag"
      },
      {
        id: 4,
        title: "Workspace Design",
        description: "Our workplace designs reflect contemporary working practices, creating environments that foster collaboration, focus, wellbeing and productivity while expressing company culture.",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop",
        icon: "Briefcase"
      },
      {
        id: 5,
        title: "Heritage Conservation",
        description: "We specialize in sensitively marrying modern interventions with historic fabric, enhancing the character of listed buildings while meeting contemporary functional requirements.",
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2074&auto=format&fit=crop",
        icon: "Landmark"
      },
      {
        id: 6,
        title: "Wellness & Spa",
        description: "Our wellness designs create serene, restorative environments through careful consideration of sensory elements, material quality, and spatial flow.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        icon: "Sparkles"
      }
    ],
    process: {
      title: "Our Approach to Expertise",
      items: [
        {
          title: "Knowledge Integration",
          description: "We bring together diverse expertise from architecture, interior design, product design, and project management to deliver holistic solutions."
        },
        {
          title: "Continuous Learning",
          description: "Our team actively pursues ongoing professional development and stays abreast of the latest industry innovations and techniques."
        },
        {
          title: "Specialist Collaboration",
          description: "For highly specialized requirements, we collaborate with leading experts in fields such as lighting design, acoustics, and sustainability."
        },
        {
          title: "Technical Excellence",
          description: "We maintain rigorous standards of technical accuracy and detail in all aspects of our design documentation."
        }
      ]
    },
    testimonials: [
      {
        quote: "Their expertise in heritage properties is unmatched. They found the perfect balance between preserving the historic character of our home while introducing contemporary elements.",
        author: "Private Client, Kensington Townhouse"
      },
      {
        quote: "The PSDJ team's retail expertise transformed our flagship store. They understood our brand immediately and created a space that has significantly enhanced customer engagement.",
        author: "Marketing Director, Luxury Retailer"
      }
    ]
  }
};

export default siteData;
