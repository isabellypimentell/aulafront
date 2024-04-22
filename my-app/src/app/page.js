import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <h1>HELLO WORD!</h1>
    <h2>subtitulo</h2> 
    <p>um texto </p>
    <p>dois texto </p>
    <p>tres texto </p>
    <div>
      <h2>outro subtitulo </h2>
    </div>
    </main>
  );
}
