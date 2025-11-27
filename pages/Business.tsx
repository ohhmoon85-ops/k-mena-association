import React from 'react';
import { TrendingUp, Users, Building2, Briefcase } from 'lucide-react';

const Business: React.FC = () => {
  return (
    <div className="w-full pt-24 pb-16">
      {/* Header */}
      <div className="relative bg-navy py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/10 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Business & Economy</h1>
          <p className="text-xl text-gray-300">
            성공적인 MENA 진출, <span className="text-gold font-bold">검증된 파트너</span>와 함께라면 가능합니다.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-16 space-y-24">
        
        {/* Service 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-navy text-white rounded-lg">
                  <TrendingUp size={24} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-navy">Market Entry Consulting</h2>
             </div>
             <p className="text-gray-700 leading-relaxed mb-6">
               국가별(UAE, 사우디, 이집트 등) 시장 특성에 맞는 정밀한 조사와 진입 전략을 수립합니다.
               현지의 복잡한 법률, 세무, 그리고 필수적인 할랄(Halal) 인증까지 원스톱으로 해결해 드립니다.
             </p>
             <ul className="space-y-2 text-sm text-gray-600">
               <li className="flex gap-2"><span className="text-gold">●</span> MENA 주요국 시장 동향 리포트 제공</li>
               <li className="flex gap-2"><span className="text-gold">●</span> 현지 법인 설립 행정 지원</li>
               <li className="flex gap-2"><span className="text-gold">●</span> 리스크 관리 및 규제 대응 솔루션</li>
             </ul>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
              alt="Consulting" 
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop" 
              alt="Networking" 
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-navy text-white rounded-lg">
                  <Users size={24} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-navy">B2B & B2G Matching</h2>
             </div>
             <p className="text-gray-700 leading-relaxed mb-6">
               검증되지 않은 바이어와의 만남은 리스크입니다. K-MENA는 현지 유력 바이어 발굴부터
               정부 입찰(B2G) 정보 제공 및 수주 지원 활동까지, 신뢰할 수 있는 네트워크를 연결합니다.
             </p>
             <ul className="space-y-2 text-sm text-gray-600">
               <li className="flex gap-2"><span className="text-gold">●</span> 무역 사절단 파견 및 바이어 초청</li>
               <li className="flex gap-2"><span className="text-gold">●</span> 1:1 비즈니스 매칭 상담회 개최</li>
               <li className="flex gap-2"><span className="text-gold">●</span> 정부 프로젝트 입찰 컨소시엄 구성</li>
             </ul>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-navy text-white rounded-lg">
                  <Building2 size={24} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-navy">Investment Support</h2>
             </div>
             <p className="text-gray-700 leading-relaxed mb-6">
               한국 기업의 현지 투자 유치뿐만 아니라, 오일머니를 포함한 MENA 자본의 
               국내 스타트업/기업 투자 연결을 지원합니다.
             </p>
             <ul className="space-y-2 text-sm text-gray-600">
               <li className="flex gap-2"><span className="text-gold">●</span> 양방향 투자 설명회(IR) 정기 개최</li>
               <li className="flex gap-2"><span className="text-gold">●</span> 현지 벤처 캐피탈(VC) 및 국부 펀드 연계</li>
             </ul>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop" 
              alt="Investment" 
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy text-white rounded-3xl p-12 text-center shadow-2xl">
          <Briefcase className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold mb-4">비즈니스 상담이 필요하신가요?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            전문 위원회가 귀사의 성공적인 MENA 진출을 위한 로드맵을 그려드립니다.
          </p>
          <button className="bg-gold text-navy font-bold px-10 py-3 rounded hover:bg-white transition-colors">
            비즈니스 상담 신청하기
          </button>
        </div>

      </div>
    </div>
  );
};

export default Business;