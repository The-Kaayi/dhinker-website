import React, { useEffect } from 'react';
import { Building2, Guitar as Hospital, Factory, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function CaseStudies() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set('.case-study', { opacity: 1, y: 0 });

    // Create timeline for case studies
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.case-study',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });

    timeline.from('.case-study', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Cleanup function
    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // Reset styles on cleanup
      gsap.set('.case-study', { opacity: 1, y: 0 });
    };
  }, []);

  const caseStudies = [
    {
      icon: Building2,
      title: 'Financial Services AI Transformation',
      company: 'Global Investment Bank',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      challenge: 'Modernizing risk assessment and fraud detection systems',
      solution: 'Implemented advanced AI algorithms for real-time risk analysis',
      results: ['60% reduction in false positives', '85% faster risk assessment', '$2M annual cost savings']
    },
    {
      icon: Hospital,
      title: 'Healthcare Diagnostic Innovation',
      company: 'Regional Medical Center',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
      challenge: 'Improving diagnostic accuracy and patient care efficiency',
      solution: 'Deployed AI-powered diagnostic assistance system',
      results: ['40% improvement in diagnosis speed', '30% reduction in readmissions', 'Enhanced patient satisfaction']
    },
    {
      icon: Factory,
      title: 'Manufacturing Process Optimization',
      company: 'Industrial Manufacturing Corp',
      image: 'https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?auto=format&fit=crop&q=80&w=1200',
      challenge: 'Reducing production defects and optimizing quality control',
      solution: 'Implemented computer vision for automated quality inspection',
      results: ['90% defect detection rate', '50% reduction in manual inspection', '35% increase in productivity']
    },
    {
      icon: ShoppingBag,
      title: 'Retail Analytics Revolution',
      company: 'National Retail Chain',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
      challenge: 'Enhancing customer experience and inventory management',
      solution: 'Deployed AI-driven analytics and recommendation system',
      results: ['25% increase in customer satisfaction', '20% improvement in inventory turnover', '15% boost in sales']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl md:text-7xl font-heading mb-6 text-center animate-glow">
          Case Studies
        </h1>
        <p className="text-xl text-light/80 max-w-3xl mx-auto text-center mb-16">
          Discover how our AI solutions have transformed businesses across various industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study card card-hover p-6">
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <div className="flex items-center mb-4">
                <study.icon className="w-10 h-10 text-primary mr-4" />
                <div>
                  <h3 className="text-2xl font-heading mb-2">{study.title}</h3>
                  <p className="text-light/80">{study.company}</p>
                </div>
              </div>
              <p className="text-light/70 mb-4"><strong>Challenge:</strong> {study.challenge}</p>
              <p className="text-light/70 mb-4"><strong>Solution:</strong> {study.solution}</p>
              <ul className="list-disc list-inside text-light/70">
                {study.results.map((result, idx) => (
                  <li key={idx}>{result}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}