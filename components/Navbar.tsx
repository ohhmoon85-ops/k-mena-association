import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About K-MENA', path: '/about' },
    { name: 'Business & Economy', path: '/business' },
    { name: 'Culture & Academy', path: '/culture' },
    { name: 'Membership', path: '/membership' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      {/* Top accent line if transparent, solid border if scrolled */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-white to-gold opacity-80`} />

      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 ${scrolled ? 'bg-white border-gold' : 'bg-white/10 border-white/30 backdrop-blur-md'} overflow-hidden shadow-md transition-all`}>
             <Globe size={24} className={scrolled ? 'text-gold' : 'text-gold'} />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-bold tracking-wide ${scrolled ? 'text-white' : 'text-navy lg:text-white drop-shadow-md'}`}>
              K-MENA
            </span>
            <span className={`text-[0.65rem] tracking-wider uppercase opacity-80 ${scrolled ? 'text-gray-300' : 'text-navy lg:text-gray-200'}`}>
              Association
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors relative group py-2
                ${location.pathname === link.path 
                  ? 'text-gold' 
                  : (scrolled ? 'text-white hover:text-gold' : 'text-white/90 hover:text-gold drop-shadow-sm')
                }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${location.pathname === link.path ? 'scale-x-100' : ''}`} />
            </Link>
          ))}
          <Link 
            to="/membership" 
            className={`px-5 py-2 text-sm font-bold transition-all border
              ${scrolled 
                ? 'border-gold text-gold hover:bg-gold hover:text-navy' 
                : 'border-white text-white hover:bg-white hover:text-navy'
              }`}
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`lg:hidden p-2 ${scrolled ? 'text-white' : 'text-navy bg-white/80 rounded-md'}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-navy/95 backdrop-blur-sm z-40 transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center px-8 space-y-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white/70 hover:text-gold">
            <X size={32} />
          </button>
          
          <div className="space-y-6">
            <h3 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 border-b border-white/10 pb-2">Navigation</h3>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-2xl font-serif text-white hover:text-gold transition-colors flex items-center justify-between group"
              >
                {link.name}
                <ChevronRight className="opacity-0 group-hover:opacity-100 text-gold transition-opacity" size={20} />
              </Link>
            ))}
          </div>

          <div className="pt-8">
            <Link 
              to="/membership"
              className="block w-full text-center py-4 bg-gold text-navy font-bold text-lg hover:bg-white transition-colors"
            >
              협회 가입하기
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;