'use client';

import styles from './page.module.css';
import Link from 'next/link';

export default function Navigation() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToNextSection = (e) => {
    e.preventDefault();
    const sections = ['bunkerIs', 'plan', 'advantage', 'apply', 'lastpage'];
    const windowHeight = window.innerHeight;
    const currentScroll = window.scrollY + (windowHeight / 2); // 현재 화면 중앙의 스크롤 위치

    // 현재 보이는 섹션 찾기
    let nextSectionId = sections[0];
    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        if (currentScroll < elementTop) {
          nextSectionId = sections[i];
          break;
        }
        if (i === sections.length - 1) {
          nextSectionId = sections[i]; // 마지막 섹션이면 그 섹션으로
        }
      }
    }

    // 다음 섹션으로 스크롤
    const nextElement = document.getElementById(nextSectionId);
    if (nextElement) {
      const elementRect = nextElement.getBoundingClientRect();
      const absoluteElementTop = window.pageYOffset + elementRect.top;
      const middle = absoluteElementTop - (windowHeight / 2) + (elementRect.height / 2);
      
      let scrollPosition = middle;
      if (nextSectionId === 'bunkerIs') {
        scrollPosition = middle + 100;
      } else if (nextSectionId === 'apply') {
        scrollPosition = middle - 100;
      }

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <div className={styles.navigation} style={{
          position: 'fixed',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <button className={styles.navButton} onClick={scrollToTop}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="rgb(98, 98, 98)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.navButton} onClick={scrollToNextSection}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="rgb(98, 98, 98)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
    </div>
  )
}