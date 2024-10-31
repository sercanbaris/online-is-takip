import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      
        <div className={styles.ctas}>
          Çalışma Altında!
        </div>
      </main>
      <footer className={styles.footer}>

      <p>Designing by Sercan Barış</p>
      </footer>
    </div>
  );
}
