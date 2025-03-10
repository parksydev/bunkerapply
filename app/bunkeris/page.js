import Image from 'next/image'

export default function BunkerIs() {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-4">
      <div className="max-w-7xl mx-auto py-16">
        {/* Bunker 제목 */}
        <h1 className="text-4xl font-bold text-[#F7F7F5] mt-[100px] ml-[120px]">
          Bunker
        </h1>

        {/* 설명 텍스트 */}
        <p className="mt-10 ml-[120px] max-w-[700px] text-lg leading-relaxed">
          벙커에 들어온다면: Bunker는 웹·앱 개발을 하는 비학술 동아리로, 학교 특별실 관리 시스템 '이디저디' 를 개발 및 유지보수, GitHub를 통해 협업을 경험해보며 직접 코딩 기술을 익히는 동아리입니다. 동아리에서는 TypeScript, Node.JS, Supabase 등 최신 기술을 활용해 실제 프로젝트를 진행하며, 문제 해결과 협업 능력을 키우고 있습니다. Bunker는 기술에 열정을 가진 학생들이 모여 아이디어를 공유하고 함께 성장하는 동아리로, 경험을 통해 웹과 앱 개발 그리고 다양한 기술 역량을 강화하는 기회를 제공합니다.
        </p>

        {/* 지원하기 버튼 */}
        <div className="ml-[120px] mt-[89px]">
          <button className="bg-[#50FF6C] text-[#121212] px-8 py-3 rounded-[15px] font-medium hover:opacity-90 transition-opacity">
            지원하기 ↗
          </button>
        </div>

        {/* 네비게이션 버튼 */}
        <div className="flex justify-end mr-[668px] mt-[29px]">
          <div className="flex space-x-0">
            <button className="bg-[#1F1F1F] w-[52.5px] h-[51px] rounded-l-[15px] flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <path d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="bg-[#1F1F1F] w-[52.5px] h-[51px] rounded-r-[15px] flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 이미지 대체 박스 */}
        <div className="absolute right-[172px] top-[243px] w-[270px] h-[282px] bg-[#1F1F1F] rounded"></div>
      </div>
    </div>
  )
}
