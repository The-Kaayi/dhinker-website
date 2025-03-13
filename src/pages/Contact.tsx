import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set('.contact-section', { opacity: 1, y: 0 });

    // Create timeline for contact section
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });

    timeline.from('.contact-section', {
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
      gsap.set('.contact-section', { opacity: 1, y: 0 });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'contact@dhinker.ai',
      link: 'mailto:contact@dhinker.ai'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Address',
      info: '123 AI Street, Tech City, TX 12345',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12 contact-section">
        <h1 className="text-6xl md:text-7xl font-heading mb-6 text-center animate-glow">
          Contact Us
        </h1>
        <p className="text-xl text-light/80 max-w-3xl mx-auto text-center mb-16">
          Reach out to us for any inquiries or support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <div key={index} className="card card-hover text-center p-6">
              <info.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading mb-2">{info.title}</h3>
              <p className="text-light/80">
                <a href={info.link} className="hover:underline">
                  {info.info}
                </a>
              </p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="textarea"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            <Send className="inline-block mr-2" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}