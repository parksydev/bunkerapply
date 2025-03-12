import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function BunkerIs() {
  return (
    <div id="bunkerIs">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Bunker
          </h1>

          <div className={styles.content}>
            <p className={styles.description}>
              벙커에 들어온다면:
              <br /><br />
              Bunker는 <span className={styles.highlight}>웹·앱</span> 개발을 하는 비학술 동아리로, 학교 특별실 관리 시스템 '이디저디' 를 개발 및 유지보수, <span className={styles.highlight}>GitHub</span>를 통해 협업을 경험해보며 직접 코딩 기술을 익히는 동아리입니다.
              <br /><br />
              동아리에서는 <span className={styles.highlight}>TypeScript, Node.JS, Supabase</span> 등 최신 기술을 활용해 실제 프로젝트를 진행하며, 문제 해결과 협업 능력을 키우고 있습니다.
              <br /><br />
              Bunker는 기술에 열정을 가진 학생들이 모여 아이디어를 공유하고 함께 성장하는 동아리로, 경험을 통해 웹과 앱 개발 그리고 다양한 기술 역량을 강화하는 기회를 제공합니다.
            </p>

            <div className={styles.imageBox}>
              <Image
                src="/shape2.png"
                alt="Shape 7"
                width={270}
                height={282}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
