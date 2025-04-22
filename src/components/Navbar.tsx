import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="">
          Immanual<span className="text-data-blue"></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-700 hover:text-data-blue transition-colors">
              {item}
            </a>)}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} transition={{
      duration: 0.2
    }} className="md:hidden bg-white absolute top-16 left-0 right-0 p-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>)}
          </div>
        </motion.div>}
    </nav>;
};
export default Navbar;