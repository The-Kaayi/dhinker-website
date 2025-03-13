import React, { useEffect } from 'react';
import { GraduationCap, Users, Target, Award, BookOpen, Code, Brain, Rocket } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Education() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set('.course-card', { opacity: 1, y: 0 });

    // Create timeline for course cards
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.course-card',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });

    timeline.from('.course-card', {
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
      gsap.set('.course-card', { opacity: 1, y: 0 });
    };
  }, []);

  const courses = [
    {
      icon: Brain,
      title: 'AI Fundamentals',
      level: 'Beginner',
      duration: '8 weeks',
      description: 'Master the basics of artificial intelligence and machine learning.',
      topics: ['Introduction to AI', 'Machine Learning Basics', 'Neural Networks', 'AI Ethics']
    },
    {
      icon: Code,
      title: 'Advanced ML Engineering',
      level: 'Advanced',
      duration: '12 weeks',
      description: 'Deep dive into machine learning engineering and deployment.',
      topics: ['Deep Learning', 'Model Deployment', 'MLOps', 'Performance Optimization']
    },
    {
      icon: BookOpen,
      title: 'Natural Language Processing',
      level: 'Intermediate',
      duration: '10 weeks',
      description: 'Learn to process and analyze human language with AI.',
      topics: ['Text Processing', 'Sentiment Analysis', 'Language Models', 'ChatBot Development']
    },
    {
      icon: Rocket,
      title: 'AI for Business Leaders',
      level: 'Executive',
      duration: '6 weeks',
      description: 'Strategic implementation of AI in business operations.',
      topics: ['AI Strategy', 'Implementation Planning', 'Risk Management', 'ROI Analysis']
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Collaborate with peer learners'
    },
    {
      icon: Target,
      title: 'Practical Focus',
      description: 'Real-world project experience'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Industry-recognized credentials'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl md:text-7xl font-heading mb-6 text-center animate-glow">
          Master AI Technology
        </h1>
        <p className="text-xl text-light/80 max-w-3xl mx-auto text-center mb-16">
          Comprehensive AI education programs designed for professionals at all levels.
        </p>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {courses.map((course, index) => (
            <div key={index} className="course-card card card-hover p-8">
              <div className="flex items-center mb-6">
                <course.icon className="w-12 h-12 text-primary mr-4" />
                <div>
                  <h3 className="text-2xl font-heading">{course.title}</h3>
                  <div className="flex space-x-4 text-sm text-light/60">
                    <span>{course.level}</span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-light/80 mb-6">{course.description}</p>
              <div className="space-y-2">
                {course.topics.map((topic, idx) => (
                  <div key={idx} className="flex items-center text-light/70">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <h2 className="text-4xl md:text-5xl font-heading text-center mb-12">
          Why Learn With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="course-card card card-hover p-6 text-center">
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