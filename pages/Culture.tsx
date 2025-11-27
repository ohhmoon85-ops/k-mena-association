import React from 'react';
import { BookOpen, Mic2, Palette, Calendar } from 'lucide-react';

const Culture: React.FC = () => {
  return (
    <div className="w-full pt-24 pb-16">
      {/* Header */}
      <div className="bg-white py-16 mb-8 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">Soft Power Exchange</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Culture & Academy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            언어와 문화를 넘어, <span className="text-navy font-bold">마음으로 소통</span>하는 진정한 이웃이 됩니다.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 space-y-20">
        
        {/* Section 1: Culture Exchange */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           <div className="space-y-6">
              <div className="w-12 h-12 bg-beige text-gold rounded-full flex items-center justify-center">
                <Palette size={24} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-navy">Cultural Exchange</h2>
              <p className="text-gray-600 leading-relaxed">
                비즈니스의 기본은 상호 존중입니다. 한-MENA 문화 축제, 미술 전시회, 
                음식 문화 체험 행사를 통해 서로의 다름을 이해하고 즐거움을 나눕니다.
                특히 이슬람 문화에 대한 올바른 이해를 돕는 세미나를 정기적으로 개최합니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1590483863773-83f1dfd37525?q=80&w=600&auto=format&fit=crop" className="rounded-lg h-40 w-full object-cover" alt="Art" />
                 <img src="https://images.unsplash.com/photo-1555447437-a169f9e31980?q=80&w=600&auto=format&fit=crop" className="rounded-lg h-40 w-full object-cover" alt="Food" />
              </div>
           </div>
           <div className="bg-navy p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold text-gold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Upcoming Events
              </h3>
              <ul className="space-y-6">
                <li className="border-b border-white/10 pb-4">
                  <div className="text-xs text-gold mb-1">2023. 11. 15</div>
                  <div className="font-bold text-lg">아랍 영화제 (Arab Film Festival)</div>
                  <div className="text-sm text-gray-400 mt-1">부산 영화의 전당</div>
                </li>
                <li className="border-b border-white/10 pb-4">
                  <div className="text-xs text-gold mb-1">2023. 12. 01</div>
                  <div className="font-bold text-lg">할랄 푸드 체험전</div>
                  <div className="text-sm text-gray-400 mt-1">코엑스 Hall B</div>
                </li>
                <li>
                  <div className="text-xs text-gold mb-1">2024. 01. 10</div>
                  <div className="font-bold text-lg">이슬람 문화 이해 세미나</div>
                  <div className="text-sm text-gray-400 mt-1">K-MENA 타워 대강당</div>
                </li>
              </ul>
              <button className="mt-8 w-full py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-colors text-sm font-bold uppercase tracking-wider">
                전체 일정 보기
              </button>
           </div>
        </section>

        {/* Section 2: Cards for Language & Forum */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Language */}
            <div className="bg-beige rounded-2xl p-8 hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center mb-6 shadow-sm">
                 <Mic2 size={24} />
               </div>
               <h3 className="text-2xl font-serif font-bold text-navy mb-4">Language Program</h3>
               <p className="text-gray-600 mb-6">
                 언어는 마음을 여는 열쇠입니다. 비즈니스 아랍어 강좌 및 MENA 현지인을 위한 
                 한국어 교육을 지원합니다. 또한 검증된 통/번역 전문가 풀을 운영하여 
                 기업 활동을 지원합니다.
               </p>
               <a href="#" className="text-navy font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors">교육 프로그램 신청 &rarr;</a>
            </div>

            {/* Forum */}
            <div className="bg-beige rounded-2xl p-8 hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center mb-6 shadow-sm">
                 <BookOpen size={24} />
               </div>
               <h3 className="text-2xl font-serif font-bold text-navy mb-4">Academic Forum</h3>
               <p className="text-gray-600 mb-6">
                 MENA 지역 정세 분석 및 미래 전망 포럼을 정기적으로 개최합니다. 
                 국내외 중동 전문가 그룹과의 공동 연구 프로젝트를 통해 깊이 있는 
                 인사이트를 제공합니다.
               </p>
               <a href="#" className="text-navy font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors">지난 포럼 자료 보기 &rarr;</a>
            </div>
        </section>

      </div>
    </div>
  );
};

export default Culture;