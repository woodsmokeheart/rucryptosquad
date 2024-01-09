import React from "react";
import Header from "@/components/Header/Header";
import ScrollCards from "../ScrollCards/ScrollCards";

const GalleryPageDesktop: React.FC = () => {
  return (
    <div className="d-flex justify-center">
      <Header />
      <ScrollCards />
    </div>
  );
};

export default GalleryPageDesktop;
