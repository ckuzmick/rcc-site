// app/components/nav.js
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/nav.module.css"; // example nav styles

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.homelink}>
        <Image
          src="/RCC_logo_outline.png"
          alt="RCC Logo"
          width={48}
          height={48}
        />
        <h1>CRLS Rubik's Cube &amp; Puzzles Club</h1>
      </Link>
      <ul>
        <li>
          <Link href="/whoweare">Who We Are</Link>
        </li>
        <li>
          <Link href="/leaders">The Leadership Team</Link>
        </li>
        <li>
          <Link href="/volunteering">Volunteering</Link>
        </li>
        <li>
          <Link href="/competitions">Competitions</Link>
        </li>
        <li>
          <Link href="/donate">Donate</Link>
        </li>
      </ul>
    </nav>
  );
}
