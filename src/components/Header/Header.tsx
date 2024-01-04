import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <section>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about_us">About Us</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/lore">Lore</Link>
          </li>
          <li>
            <Link href="/ranks">Ranks</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
