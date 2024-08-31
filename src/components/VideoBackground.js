import React from "react";

const VideoBackground = () => {
  return (
    <div style={{ position: "relative", height: "70vh", overflow: "hidden" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
      >
                <source src={`${process.env.PUBLIC_URL}/aivideo.mp4`} type="video/mp4" />
      </video>
      <div style={{ position: "relative",
          zIndex: "1",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",}}>
        <h1>Feel the power of AI</h1>
      </div>
    </div>
  );
};

export default VideoBackground;
