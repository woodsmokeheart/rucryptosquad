import Title from "@/components/Title/Title";
import React from "react";
import Link from "next/link";
import { Vkontakte } from "@/assets/svg/vkontakte";
import { Telegram } from "@/assets/svg/telegram";
import { Twitter } from "@/assets/svg/twitter";
import { Rarible } from "@/assets/svg/rarible";
import styles from "./Footer.module.scss";

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <Title title={title} />
      <div className={styles.link_container}>
        <Link target="_blank" href="https://vk.com/rucryptosquad">
          <Vkontakte />
        </Link>
        <Link target="_blank" href="https://t.me/daorcs" className="ml-4">
          <Telegram />
        </Link>
        <Link
          target="_blank"
          href="https://twitter.com/RuCryptoSquad"
          className="ml-4"
        >
          <Twitter />
        </Link>
        <Link
          target="_blank"
          href="https://rarible.com/RuCryptoSquad"
          className="ml-4"
        >
          <Rarible />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
