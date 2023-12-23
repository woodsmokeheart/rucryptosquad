import React from "react";
import Image from "next/image";

interface PlayButtonProps {
  onClick: () => void;
  isPlaying: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick, isPlaying }) => {
  return (
    <button onClick={onClick} className="text_only_secondary_btn">
      <Image
        width="20"
        height="20"
        src={
          isPlaying
            ? "https://img.icons8.com/ios-glyphs/30/pause--v1.png"
            : "https://img.icons8.com/ios-glyphs/30/play--v1.png"
        }
        alt="pause--v1"
      />
    </button>
  );
};

export default PlayButton;
