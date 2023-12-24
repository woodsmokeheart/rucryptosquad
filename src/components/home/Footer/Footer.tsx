import Title from "@/components/Title/Title";
import PlayButton from "@/components/elements/PlayButton/PlayButton";
import React from "react";

interface FooterProps {
  title: string;
  toggleAudio: () => void;
  isPlaying: boolean;
}

const Footer: React.FC<FooterProps> = ({ title, toggleAudio, isPlaying }) => {
  return (
    <div className="absolute bottom-0 z-2 padding-40-50 w-100 d-flex align-center justify-between">
      <Title title={title} />
      <PlayButton onClick={toggleAudio} isPlaying={isPlaying} />
    </div>
  );
};

export default Footer;
