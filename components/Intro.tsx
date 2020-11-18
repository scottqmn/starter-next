import SettingsSVG from "../public/settings.svg";
import styles from "../styles/Intro.module.css";

export default function Intro() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SettingsSVG className={styles.icon} />
        <h1 className={styles.title}>Starter: Next</h1>
      </main>
    </div>
  );
}
