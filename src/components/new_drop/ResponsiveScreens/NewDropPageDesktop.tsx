import React from "react";

import VideoBackground from "../components/VideoBackground/VideoBackground";
import NewDropContent from "../components/NewDropContent/NewDropContent";

const NewDropPageDesktop = () => {
  return (
    <div
      className="d-flex justify-center"
      style={{ overflowY: "scroll", height: "100vh" }}
    >
      <title>New Drop</title>
      <VideoBackground />
      <NewDropContent />
    </div>
  );
};

export default NewDropPageDesktop;
