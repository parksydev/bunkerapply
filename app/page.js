import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* 임시 이미지 박스 */}
        <div className={styles.logoBox}>
          <Image 
            src="/shape1.png"
            alt="Bunker logo"
            width={140}
            height={141}
            priority
          />
        </div>

        <h1 className={styles.title}>Bunker</h1>
        <p className={styles.subtitle}>웹과 앱, 협업을 통해 개발을 배우는 동아리</p>

        <a href="t.me/idrewha" className={styles.button}>
          시작하기 ↗
        </a>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <div className={styles.iconCircle}>
              <Image 
                src="/github_icon.png"
                alt="GitHub icon"
                width={25}
                height={25}
              />
            </div>
            <div className={styles.linkText}>
              <span>GitHub</span>
              <a href="https://github.com/COMMON-jshs" className={styles.greenLink}>
                @COMMON-jshs ↗
              </a>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <div className={styles.iconCircle}>
              <Image 
                src="/mail_icon.png"
                alt="Email icon"
                width={25}
                height={25}
              />
            </div>
            <div className={styles.linkText}>
              <span>Mail</span>
              <a href="mailto:bunkerapply@gmail.com" className={styles.greenLink}>
                bunkerapply@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <div className={styles.iconCircle}>
              <Image 
                src="/globe_icon.png"
                alt="Web icon"
                width={25}
                height={25}
              />
            </div>
            <div className={styles.linkText}>
              <span>이디저디</span>
              <a href="https://new.이디저디.com" className={styles.greenLink}>
                new.이디저디.com ↗
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
