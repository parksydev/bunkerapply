import styles from './page.module.css';

export default function Apply() {
  return (
    <div id="apply" className={styles.container}>
      {/* 지원 방법 텍스트 */}
      <h1 className={styles.title}>
        지원 방법
      </h1>

      {/* 날짜와 면접 태그 */}
      <div className={styles.tagContainer}>
        <div className={styles.tag}>
          <span className={styles.tagText}>
            <span className={styles.highlightDate}>3월 12일</span> 까지 접수
          </span>
        </div>
        <div className={styles.tag}>
          <span className={styles.tagText}>
            <span className={styles.highlightDate}>3월 13일</span> 면접 실시
          </span>
        </div>
      </div>

      {/* 설명 텍스트 */}
      <p className={styles.description}>
        1. 웹사이트 내에 있는 '지원하기' 버튼을 눌러주세요.<br />
        2. 페이지에서 지원서 및 이력서를 작성하세요.<br />
        3. 접수가 완료되면 면접 일시를 개별로 알려드립니다!
      </p>

      {/* 이미지 */}
      <div className={styles.imageWrapper}>
        <img 
          src="/shape5.png" 
          alt="지원 프로세스" 
          className={styles.image}
        />
      </div>
    </div>
  );
}
