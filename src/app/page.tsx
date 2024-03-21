import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <h1>My Website</h1>
        <span className={styles.description}>Some Next.js based demos</span>
        <ul>
          <li>
            <Link href={"/posts"}>posts</Link>
          </li>
          <li>
            <Link href={"/antd"}>antd demos</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
