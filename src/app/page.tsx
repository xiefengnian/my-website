import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <h1>My Website</h1>
        <ul>
          <li>
            <a>
              <Link href={"/posts"}>posts</Link>
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
