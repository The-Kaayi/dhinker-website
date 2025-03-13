import React, { useEffect } from 'react';
import { Brain, Bot, FileText, BarChart3, Cog, Lock, Zap, LineChart } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function AISolutions() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set('.solution-card', { opacity: 1, y: 0 });

    // Create timeline for solution cards
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-card',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });

    timeline.from('.solution-card', {
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
      gsap.set('.solution-card', { opacity: 1, y: 0 });
    };
  }, []);

  const solutions = [
    {
      icon: Brain,
      title: 'Computer Vision',
      description: 'Advanced image recognition and processing solutions for automated visual inspection, quality control, and object detection.',
      features: ['Real-time object detection', 'Quality inspection automation', 'Visual data analytics']
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational agents that enhance customer service and streamline business operations.',
      features: ['Natural language processing', '24/7 customer support', 'Multi-language support']
    },
    {
      icon: FileText,
      title: 'Document Automation',
      description: 'Smart document processing systems that extract, classify, and analyze information from various document types.',
      features: ['OCR technology', 'Automated data extraction', 'Document classification']
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboards',
      description: 'Data visualization and analytics platforms that provide actionable insights for informed decision-making.',
      features: ['Real-time analytics', 'Custom reporting', 'Predictive insights']
    }
  ];

  const benefits = [
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Streamline operations and reduce manual workload'
    },
    {
      icon: Lock,
      title: 'Enhanced Security',
      description: 'Advanced AI-powered security measures'
    },
    {
      icon: Zap,
      title: 'Improved Efficiency',
      description: 'Faster processing and reduced error rates'
    },
    {
      icon: LineChart,
      title: 'Data-Driven Insights',
      description: 'Make informed decisions based on AI analytics'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl md:text-7xl font-heading mb-6 text-center animate-glow">
          AI Solutions for Enterprise
        </h1>
        <p className="text-xl text-light/80 max-w-3xl mx-auto text-center mb-16">
          Transform your business with our cutting-edge AI solutions designed for enterprise-scale operations.
        </p>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card card card-hover p-8">
              <solution.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-heading mb-4">{solution.title}</h3>
              <p className="text-light/80 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-light/70">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <h2 className="text-4xl md:text-5xl font-heading text-center mb-12">
          Why Choose Our Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="solution-card card card-hover p-6 text-center">
              <benefit.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-heading mb-2">{benefit.title}</h3>
              <p className="text-light/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}