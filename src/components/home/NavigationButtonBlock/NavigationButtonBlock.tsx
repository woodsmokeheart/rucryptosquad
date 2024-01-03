import React from "react";
import styles from "./NavigationButtonBlock.module.scss";
import Image from "next/image";

import about from "../../../assets/img/img_navigation/about.png";
import contacts from "../../../assets/img/img_navigation/contacts.png";
import gallery from "../../../assets/img/img_navigation/gallery.png";
import lore from "../../../assets/img/img_navigation/lore.png";
import ranks from "../../../assets/img/img_navigation/ranks.png";
import team from "../../../assets/img/img_navigation/team.png";
import Link from "next/link";

const pages = [
  { title: "about us", image: about, link: "/about_us" },
  { title: "team", image: team, link: "/team" },
  { title: "gallery", image: gallery, link: "/gallery" },
  { title: "lore", image: lore, link: "/lore" },
  { title: "ranks", image: ranks, link: "/ranks" },
  { title: "contacts", image: contacts, link: "/contacts" },
];

const NavigationButtonBlock = () => {
  return (
    <div className={styles.wrapper}>
      {pages.map((page, key) => (
        <div className={styles.button_container} key={key}>
          <Link href={page.link}>
            <div className={styles.image}>
              <Image
                src={page.image}
                alt={page.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.title}>{page.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavigationButtonBlock;
