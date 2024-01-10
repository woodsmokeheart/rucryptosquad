import Title from "@/components/Title/Title";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <div className="absolute bottom-0 z-2 padding-40-50 w-100 d-flex align-center justify-between">
      <Title title={title} />
      <div className="d-flex">
        <Link target="_blank" href="https://twitter.com/RuCryptoSquad">
          <Image
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/twitter-circled.png"
            alt="twitter-circled"
          />
        </Link>
        <Link
          target="_blank"
          href="https://vk.com/rucryptosquad"
          className="ml-4"
        >
          <Image
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/vk-circled--v1.png"
            alt="vk-circled--v1"
          />
        </Link>
        <Link target="_blank" href="https://t.me/daorcs" className="ml-4">
          <Image
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/telegram-app--v1.png"
            alt="telegram-app--v1"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
