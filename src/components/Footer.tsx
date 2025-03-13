import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark/80 backdrop-blur-sm mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="font-heading text-2xl">DHINKER</span>
            </Link>
            <p className="text-light/80">
              Empowering businesses through innovative AI solutions and education.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-solutions" className="text-light/80 hover:text-primary">AI Solutions</Link></li>
              <li><Link to="/education" className="text-light/80 hover:text-primary">Education</Link></li>
              <li><Link to="/case-studies" className="text-light/80 hover:text-primary">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-light/80">contact@dhinker.ai</li>
              <li className="text-light/80">+1 (555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-light/10 text-center text-light/60">
          <p>© {new Date().getFullYear()} Dhinker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}