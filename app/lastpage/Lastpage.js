import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Lastpage() {
  return (
    <div id="lastpage">
      <div className={styles.page}>
        <main className={styles.main}>
          {/* 임시 이미지 박스 */}
          <div className={styles.logoBox}>
            <Image 
              src="/shape1.png"
              alt="Bunker logo"
              width={145}
              height={146}
              priority
            />
          </div>

          <h1 className={styles.title}>지금 바로 지원하세요</h1>
          <p className={styles.subtitle}>Bunker와 함께 성장할 준비가 되셨나요? 지금 지원하세요!</p>

          <Link href="/bunkeris" className={styles.button}>
            지원하기 ↗
          </Link>
        </main>
      </div>
    </div>
  );
}