import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Advantage() {
  return (
    <div id="advantage" className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px'
        }}>
          장점
          <Image
            src="/smileheart.png"
            alt="Smile Heart"
            width={50}
            height={50}
            priority
          />
        </h1>

        <div className={styles.content}>
          <p className={styles.description}>
            최신 AI 도구를 적극 활용하여 개발 역량을 향상시키고 있습니다. <span className={styles.highlight}>Chat GPT</span>와 <span className={styles.highlight}>Figma</span>, <span className={styles.highlight}>Cursor AI</span>의 향상된 버전을 지원하여, 다양한 도구를 적극적으로 활용할 수 있도록 지원합니다. 
            <br /><br />
            팀 기반의 협업 활동을 통해 커뮤니케이션 능력과 협동심을 배양합니다. 코드 리뷰 세션을 통해 다양한 의견을 수렴하고, 협업을 통한 최적의 결과물을 도출하는 경험을 쌓게 됩니다.
            <br /><br />
            정보 분야 진로를 희망하는 학생들의 <span className={styles.highlight}>생활기록부</span>를 풍부하게 만들 수 있는 기회입니다!!!
            <br /><br />
          </p>

          <div className={styles.imageBox}>
            <Image
              src="/shape3.png"
              alt="Shape 7"
              width={290}
              height={300}
              priority
            />
          </div>
        </div>

        <div className={styles.navigation} style={{
          position: 'fixed',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <Link href="/">
            <button className={styles.navButton}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="rgb(98, 98, 98)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
          <Link href="/plan">
            <button className={styles.navButton}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="rgb(98, 98, 98)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="scale(-1, 1) translate(-13, 0)"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
