import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full pt-24 pb-16">
      {/* Header */}
      <div className="bg-navy py-16 text-white mb-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About K-MENA</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            대한민국과 MENA 지역의 <span className="text-gold font-bold">상생과 번영</span>을 이끄는 구심점
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 space-y-24">
        
        {/* 1. History */}
        <section className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4 relative inline-block">
              From KEDA<br/>to K-MENA
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold"></span>
            </h2>
          </div>
          <div className="md:w-2/3 space-y-6 text-gray-700 leading-relaxed">
            <p>
              2015년 설립된 <strong>'한국-이집트 발전협회(KEDA)'</strong>는 지난 10여 년간 양국 교류의 핵심 창구 역할을 수행해왔습니다.
              우리는 수많은 기업의 현지 진출을 돕고, 민간 외교의 최전선에서 활동했습니다.
            </p>
            <p>
              그러나 급변하는 중동 정세와 기업들의 확장 요구는 이집트를 넘어선 더 넓은 시야를 요구했습니다.
              이에 우리는 활동 영역을 <strong>MENA(Middle East & North Africa) 전역</strong>으로 확대 개편하여,
              19개국의 잠재력을 한국과 연결하는 새로운 도약을 시작했습니다.
            </p>
          </div>
        </section>

        {/* 2. Mission & Vision */}
        <section className="bg-beige rounded-3xl p-8 md:p-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-gold font-bold uppercase tracking-widest mb-3">Our Mission</h3>
                <h2 className="text-2xl font-serif font-bold text-navy mb-4">장벽 없는 협력 플랫폼</h2>
                <p className="text-gray-700">
                  한국과 MENA 지역 간의 경제, 문화, 학술적 장벽을 허물고 
                  누구나 신뢰할 수 있는 실질적인 협력 플랫폼을 구축합니다.
                </p>
              </div>
              <div>
                <h3 className="text-gold font-bold uppercase tracking-widest mb-3">Our Vision</h3>
                <h2 className="text-2xl font-serif font-bold text-navy mb-4">No.1 민간 외교 파트너</h2>
                <p className="text-gray-700">
                  2030년까지 한-MENA 교류의 독보적인 민간 외교 플랫폼으로 도약하여,
                  양 지역의 공동 번영에 기여하는 핵심 리더가 됩니다.
                </p>
              </div>
           </div>
        </section>

        {/* 3. Organization Chart */}
        <section className="text-center">
           <h2 className="text-3xl font-serif font-bold text-navy mb-12">Organization</h2>
           <div className="max-w-4xl mx-auto">
             {/* Chart Visual using Flex/Grid */}
             <div className="flex flex-col items-center gap-8">
               <div className="border-2 border-navy bg-navy text-white px-8 py-4 rounded-lg font-bold text-lg w-64 shadow-lg">
                 이사장
               </div>
               <div className="h-8 w-0.5 bg-gray-300"></div>
               <div className="border border-gray-400 bg-white px-8 py-3 rounded-lg font-medium w-64">
                 사무국
               </div>
               <div className="h-8 w-0.5 bg-gray-300"></div>
               <div className="w-full h-0.5 bg-gray-300 relative">
                 <div className="absolute left-1/2 top-0 h-4 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
                 <div className="absolute left-0 top-0 h-4 w-0.5 bg-gray-300"></div>
                 <div className="absolute right-0 top-0 h-4 w-0.5 bg-gray-300"></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-4">
                 <div className="bg-beige p-6 rounded-xl hover:shadow-md transition-shadow">
                   <h4 className="font-bold text-navy mb-2">경제협력 위원회</h4>
                   <p className="text-sm text-gray-600">Business & Matching</p>
                 </div>
                 <div className="bg-beige p-6 rounded-xl hover:shadow-md transition-shadow">
                   <h4 className="font-bold text-navy mb-2">문화교류 위원회</h4>
                   <p className="text-sm text-gray-600">Culture & Events</p>
                 </div>
                 <div className="bg-beige p-6 rounded-xl hover:shadow-md transition-shadow">
                   <h4 className="font-bold text-navy mb-2">학술연구 위원회</h4>
                   <p className="text-sm text-gray-600">Research & Forum</p>
                 </div>
               </div>
             </div>
           </div>
        </section>

        <section className="text-center pb-12">
          <div className="inline-block p-1 bg-gradient-to-r from-navy to-gold rounded-full">
            <button className="px-8 py-3 bg-white rounded-full font-bold text-navy hover:bg-gray-50 transition-colors">
              협회 정관 및 연혁 자세히 보기
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;