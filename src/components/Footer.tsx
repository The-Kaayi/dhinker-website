
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter } from 'lucide-react';
import appLogo from "../../images/app-logo.png"

export default function Footer() {
  return (
    <footer className="bg-dark/80 backdrop-blur-sm mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
            <img
                src={appLogo}
                alt="App Logo"
                className="h-5 w-25"
              />
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
              <li><Link to="/about" className="text-light/80 hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="text-light/80 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-light/80">info@dhinker.com</li>
              <li className="text-light/80">+91 8891304460</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/dhinker" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/dhinker" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/dhinker" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary">
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