import React, { useEffect } from 'react';
import { Users, Target, Heart, Globe } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function About() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set('.about-section', { opacity: 1, y: 0 });

    // Create timeline for about section
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });

    timeline.from('.about-section', {
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
      gsap.set('.about-section', { opacity: 1, y: 0 });
    };
  }, []);

  const team = [
    {
      name: 'Ashif Basheer',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
      description: 'Former Google AI researcher with 15+ years of experience in machine learning.'
    },
    {
      name: 'Minhas Ahmed',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
      description: 'Tech veteran specializing in scalable AI systems and cloud architecture.'
    },
    {
      name: 'Muhammed Hashir',
      role: 'Head of Education',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400',
      description: 'PhD in Computer Science, passionate about making AI education accessible.'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Collaborative Innovation',
      description: 'We believe in the power of collective intelligence.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality solutions.'
    },
    {
      icon: Heart,
      title: 'Ethics First',
      description: 'Our AI solutions are designed with ethical considerations at the forefront.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We aim to make a positive impact on a global scale.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12 about-section">
        <h1 className="text-6xl md:text-7xl font-heading mb-6 text-center animate-glow">
          About Us
        </h1>
        <p className="text-xl text-light/80 max-w-3xl mx-auto text-center mb-16">
          Learn more about our mission, values, and the team behind our success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <div key={index} className="card card-hover text-center p-6">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-heading mb-2">{member.name}</h3>
              <p className="text-light/80 mb-2">{member.role}</p>
              <p className="text-light/70">{member.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl md:text-5xl font-heading text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card card-hover text-center p-6">
              <value.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-heading mb-2">{value.title}</h3>
              <p className="text-light/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}