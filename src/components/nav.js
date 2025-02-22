import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/nav.module.css";

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
                <h1>
                    CRLS Rubik's Cube Club
                </h1>
            </Link>
            <ul>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/news">
                        News
                    </Link>
                </li>
                <li>
                    <Link href="/leaders">
                        Leadership
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
