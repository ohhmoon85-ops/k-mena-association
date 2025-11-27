import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t-4 border-gold">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-gold">K-MENA</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              한국과 중동·북아프리카 19개국을 잇는<br/>
              경제, 문화, 학술의 견고한 가교.<br/>
              대한민국 대표 민간 외교 플랫폼입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold/80">Sitemap</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/business" className="hover:text-gold transition-colors">Business & Economy</Link></li>
              <li><Link to="/culture" className="hover:text-gold transition-colors">Culture & Academy</Link></li>
              <li><Link to="/membership" className="hover:text-gold transition-colors">Membership</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold/80">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>서울특별시 강남구 테헤란로 123<br/>K-MENA 타워 15층</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>02-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>contact@k-mena.or.kr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold/80">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-navy-light rounded hover:bg-gold hover:text-navy transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-navy-light rounded hover:bg-gold hover:text-navy transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              K-MENA의 최신 소식을 받아보세요.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} K-MENA Association. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;