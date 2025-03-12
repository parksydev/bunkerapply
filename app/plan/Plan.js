import styles from './page.module.css';
import Link from 'next/link';

export default function Plan() {
  return (
    <div id="plan" className={styles.container}>
      <h1 className={styles.title}>활동 계획</h1>
      
      <p className={styles.description}>
        프로젝트를 통해 웹, 앱 개발 및 코딩 기술을 직접 체험할 수 있도록 구성되어 있습니다. 
        특별실 관리 시스템 '이디저디'를 비롯해 다양한 개발 프로젝트에 참여하며, 
        최신 기술을 배우고 실제 문제 해결 능력을 기르는 데 집중합니다. 
        <br></br>
        <br></br>
        또한 정기적인 스터디, 코드 리뷰 등의 활동을 통해 이론과 실무를 접목시켜 
        협업 능력을 향상할 수 있습니다 😉
      </p>

      <div className={styles.timeline}>
        <TimelineItem
          title="Git & GitHub"
          description="버전 관리와 협업을 위한 Git 과 GitHub"
        />
        <TimelineItem
          title="웹 개발 기초"
          description="HTML, CSS, JavaScript 등 기본 웹 기술"
        />
        <TimelineItem
          title="Figma"
          description="Figma를 활용한 UI/UX 디자인과 프로토타이핑"
        />
        <TimelineItem
          title="최신 기술 습득"
          description="최신 개발 도구와 트렌드를 소개"
        />
        <TimelineItem
          title="코드 리뷰 세션"
          description="코드 리뷰를 통해 협업 및 문제 해결 능력을 향상"
        />
        <TimelineItem
          title="앱 개발 기초"
          description="Flutter를 활용한 모바일 앱 개발 실습"
        />
        <TimelineItem
          title="이디저디 개발 및 유지보수"
          description="학교 관리 시스템 개발 및 유지보수"
        />
      </div>
    </div>
  );
}

function TimelineItem({ title, description }) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.circle} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
