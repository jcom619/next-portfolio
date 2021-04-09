import Link from "next/link";
import styles from "../styles/About.module.css";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home </a>
      </Link>
      <Link href="/about">
        <a> About</a>
      </Link>
    </nav>
  );
}
