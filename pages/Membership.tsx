import React from 'react';
import { Check } from 'lucide-react';

const Membership: React.FC = () => {
  return (
    <div className="w-full pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">Membership</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          K-MENA의 회원이 되어 <span className="text-gold font-bold">무한한 기회의 네트워크</span>에 접속하세요.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Pricing/Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          
          {/* Individual */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col">
            <div className="mb-4">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">For Individuals</span>
              <h3 className="text-2xl font-serif font-bold text-navy mt-1">개인 회원</h3>
            </div>
            <div className="text-3xl font-bold text-gold mb-6">₩100,000<span className="text-sm text-gray-400 font-normal"> / 년</span></div>
            <p className="text-gray-600 text-sm mb-8">
              중동 지역에 관심 있는 학자, 전문가, 학생을 위한 멤버십입니다.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-gray-700">
                <Check className="w-5 h-5 text-gold shrink-0" /> 뉴스레터 및 동향 리포트 구독
              </li>
              <li className="flex gap-3 text-sm text-gray-700">
                <Check className="w-5 h-5 text-gold shrink-0" /> 문화 행사 우선 초청
              </li>
              <li className="flex gap-3 text-sm text-gray-700">
                <Check className="w-5 h-5 text-gold shrink-0" /> 아카데미 강좌 20% 할인
              </li>
            </ul>
            <button className="w-full py-3 border-2 border-navy text-navy font-bold rounded hover:bg-navy hover:text-white transition-colors">
              가입 신청
            </button>
          </div>

          {/* Corporate (Featured) */}
          <div className="border-2 border-gold bg-navy rounded-2xl p-8 shadow-2xl relative transform md:-translate-y-4 flex flex-col text-white">
            <div className="absolute top-0 right-0 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              BEST CHOICE
            </div>
            <div className="mb-4">
              <span className="text-sm font-bold text-gold/80 uppercase tracking-wider">For Business</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">기업 회원</h3>
            </div>
            <div className="text-3xl font-bold text-gold mb-6">₩1,000,000<span className="text-sm text-gray-400 font-normal"> / 년</span></div>
            <p className="text-gray-300 text-sm mb-8">
              MENA 진출을 희망하는 법인을 위한 실질적인 비즈니스 지원 멤버십입니다.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm">
                <Check className="w-5 h-5 text-gold shrink-0" /> 입찰 정보 및 심층 리포트 제공
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="w-5 h-5 text-gold shrink-0" /> 협회 주최 포럼/세미나 무료 참가
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="w-5 h-5 text-gold shrink-0" /> 홈페이지/뉴스레터 회원사 홍보
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="w-5 h-5 text-gold shrink-0" /> 비즈니스 매칭 우선권 부여
              </li>
            </ul>
            <button className="w-full py-3 bg-gold text-navy font-bold rounded hover:bg-white transition-colors">
              기업 회원 가입 신청
            </button>
          </div>

          {/* Special */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col">
            <div className="mb-4">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">For Partners</span>
              <h3 className="text-2xl font-serif font-bold text-navy mt-1">특별 회원</h3>
            </div>
            <div className="text-3xl font-bold text-gold mb-6">문의<span className="text-sm text-gray-400 font-normal"> (후원사/기관)</span></div>
            <p className="text-gray-600 text-sm mb-8">
              협회 발전에 기여하는 공공기관 및 대규모 단체를 위한 파트너십입니다.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-gray-700">
                <Check className="w-5 h-5 text-gold shrink-0" /> 협회 사업 공동 추진
              </li>
              <li className="flex gap-3 text-sm text-gray-700">
                <Check className="w-5 h-5 text-gold shrink-0" /> 주요 행사 VIP 의전 제공
              </li>
              <li className="flex gap-3 text-sm text-gray-700">
                <Check className="w-5 h-5 text-gold shrink-0" /> 맞춤형 네트워킹 행사 개최
              </li>
            </ul>
            <button className="w-full py-3 border-2 border-navy text-navy font-bold rounded hover:bg-navy hover:text-white transition-colors">
              제휴 문의
            </button>
          </div>

        </div>

        {/* Process Section */}
        <div className="bg-beige rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-serif font-bold text-navy mb-8 text-center">가입 절차 안내</h2>
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -z-10 transform -translate-y-1/2"></div>
            
            <div className="flex flex-col items-center text-center bg-beige p-4 md:w-1/4">
              <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h4 className="font-bold text-navy mb-2">신청서 작성</h4>
              <p className="text-xs text-gray-600">온라인 가입 신청서 제출</p>
            </div>
            
            <div className="flex flex-col items-center text-center bg-beige p-4 md:w-1/4">
              <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h4 className="font-bold text-navy mb-2">사무국 심사</h4>
              <p className="text-xs text-gray-600">가입 자격 및 유형 확인</p>
            </div>
            
            <div className="flex flex-col items-center text-center bg-beige p-4 md:w-1/4">
              <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h4 className="font-bold text-navy mb-2">연회비 납부</h4>
              <p className="text-xs text-gray-600">회원 등급별 회비 입금</p>
            </div>
            
            <div className="flex flex-col items-center text-center bg-beige p-4 md:w-1/4">
              <div className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center font-bold mb-4">4</div>
              <h4 className="font-bold text-navy mb-2">가입 완료</h4>
              <p className="text-xs text-gray-600">환영 키트 발송 및 활동 시작</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Membership;