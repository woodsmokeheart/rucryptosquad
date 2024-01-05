import Link from "next/link";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [audio] = useState(new Audio("/korotkiy.mp3"));

  const playAudio = () => {
    audio.play();
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const handleMouseEnter = () => {
    playAudio();
  };

  const handleMouseLeave = () => {
    stopAudio();
  };

  useEffect(() => {
    audio.addEventListener("ended", stopAudio);
    return () => {
      audio.removeEventListener("ended", stopAudio);
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <section>
        <ul>
          <li>
            <Link
              href="/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about_us"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/lore"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Lore
            </Link>
          </li>
          <li>
            <Link
              href="/ranks"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Ranks
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
