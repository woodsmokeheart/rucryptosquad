import Title from "@/components/Title/Title";
import React from "react";

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <div className="absolute bottom-0 z-2 padding-40-50 w-100 d-flex align-center justify-between">
      <Title title={title} />
    </div>
  );
};

export default Footer;
