import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Handshake, BookOpen, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
        {/* Background Image - Reverted but changed to generic modern architecture */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Global Business Architecture" 
            className="w-full h-full object-cover"
          />
          {/* Overlays for readability and mood */}
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
        </div>
        
        {/* Large Decorative Circle Element */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 px-6 lg:px-12 pt-20">
          <div className="max-w-4xl text-white">
            <div className="inline-block px-3 py-1 mb-6 border border-gold/50 rounded-full bg-navy/50 backdrop-blur-sm">
              <span className="text-gold text-xs font-bold tracking-widest uppercase">Since 2015 KEDA Legacy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              이집트를 넘어, <br />
              <span className="text-gold">더 넓은 MENA의 기회로.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              한국-이집트 발전협회(KEDA)의 성공적인 발자취를 이어, 
              중동·북아프리카 19개국과 대한민국을 잇는 새로운 비즈니스와 문화의 가교, 
              <strong className="text-white font-bold"> K-MENA</strong>가 시작합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/membership" 
                className="px-8 py-4 bg-gold text-navy font-bold text-lg rounded hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-lg shadow-gold/20"
              >
                협회 가입 안내
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/business" 
                className="px-8 py-4 border border-gray-400 text-gray-200 font-medium text-lg rounded hover:bg-white hover:text-navy hover:border-white transition-all text-center"
              >
                주요 사업 보기
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-0.5 h-12 bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-pulldown"></div>
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution */}
      <section className="py-24 bg-beige relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Area */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1549487593-9c4c5db59844?q=80&w=1200&auto=format&fit=crop" 
                  alt="Compass in Desert" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-gold rounded-2xl z-0" />
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-navy-light font-bold uppercase tracking-widest mb-2">The Challenge</h3>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
                  기회의 땅 MENA,<br/>
                  진입 장벽이 높으셨나요?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  언어 장벽, 복잡한 관습, 부족한 네트워크. 많은 기업들이 중동 시장의 잠재력을 알면서도
                  실질적인 진입에 어려움을 겪고 있습니다. 단순한 정보만으로는 성공을 보장할 수 없습니다.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6 py-2">
                <h3 className="text-navy-light font-bold uppercase tracking-widest mb-2">Our Solution</h3>
                <p className="text-xl font-medium text-navy">
                  K-MENA는 단순한 정보 제공을 넘어, <br/>
                  <span className="text-gold font-bold">수년간 축적된 고위급 네트워크</span>를 통해 <br/>
                  실질적인 진출 루트를 열어드립니다.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span className="text-sm font-medium">정부/기업 다이렉트 연결</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span className="text-sm font-medium">현지 맞춤형 컨설팅</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span className="text-sm font-medium">문화적 리스크 최소화</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span className="text-sm font-medium">법률/세무 원스톱 지원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Core Values</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600">
              K-MENA는 비즈니스 성공과 문화적 융합을 위한 <br/>세 가지 핵심 가치를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 border border-gray-100 bg-white hover:border-gold hover:shadow-xl transition-all duration-300 rounded-xl">
              <div className="w-14 h-14 bg-beige text-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">광범위한 네트워크<br/><span className="text-sm font-sans font-normal text-gray-500">Extended Network</span></h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                이집트 중심의 KEDA 네트워크를 기반으로, 사우디, UAE, 카타르 등 MENA 전역의 주요 의사결정자와 연결합니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 border border-gray-100 bg-white hover:border-gold hover:shadow-xl transition-all duration-300 rounded-xl relative top-0 md:-top-4 shadow-lg border-t-4 border-t-gold">
              <div className="w-14 h-14 bg-beige text-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                <Handshake size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">맞춤형 비즈니스 매칭<br/><span className="text-sm font-sans font-normal text-gray-500">B2B Matching</span></h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                기업의 니즈를 정밀 분석하여 최적의 MENA 현지 파트너 및 바이어를 1:1로 매칭해 드립니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 border border-gray-100 bg-white hover:border-gold hover:shadow-xl transition-all duration-300 rounded-xl">
              <div className="w-14 h-14 bg-beige text-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">문화·학술 융합<br/><span className="text-sm font-sans font-normal text-gray-500">Cultural Bridge</span></h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                비즈니스를 넘어선 진정한 파트너십을 위해, 언어 교육 및 문화 교류 프로그램을 제공하여 상호 이해를 높입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Social Proof */}
      <section className="py-24 bg-navy text-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C5A059 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                KEDA에서 K-MENA로,<br/> 
                <span className="text-gold">신뢰의 역사</span>는 계속됩니다.
              </h2>
              <p className="text-gray-300">
                우리는 단순한 시작이 아닌, 검증된 성공 위에서 새로운 도약을 준비합니다.
              </p>
            </div>
            <Link to="/about" className="text-gold hover:text-white transition-colors flex items-center gap-2">
              자세한 연혁 보기 <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">20+</div>
              <div className="text-sm text-gray-300 uppercase tracking-widest">Global Forums</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">100+</div>
              <div className="text-sm text-gray-300 uppercase tracking-widest">Connected Firms</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">15+</div>
              <div className="text-sm text-gray-300 uppercase tracking-widest">Gov Partners</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">19</div>
              <div className="text-sm text-gray-300 uppercase tracking-widest">MENA Nations</div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 max-w-4xl mx-auto">
             <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex-shrink-0 overflow-hidden">
                  <img src="https://picsum.photos/200/200" alt="Testimonial User" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg italic text-gray-200 mb-4">
                    "KEDA 시절부터 이어진 협회의 지원 덕분에 이집트 진출에 성공했습니다. 이제 K-MENA와 함께 사우디 시장을 두드립니다."
                  </p>
                  <div>
                    <span className="font-bold text-white block">(주)태성건설 해외사업부</span>
                    <span className="text-sm text-gold">김철수 이사</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;