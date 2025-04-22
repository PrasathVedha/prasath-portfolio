
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Immanual Joseph Martin. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/immanual-joseph-martin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-data-blue transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Immanual24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-data-blue transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:immanualjm24@gmail.com" 
              className="text-gray-600 hover:text-data-blue transition-colors"
            >
              Email
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
