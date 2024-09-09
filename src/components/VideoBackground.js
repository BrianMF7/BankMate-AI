import React from "react";

const VideoBackground = () => {
  const handleButtonClick = () => {
    window.open("/chatbot", "_blank"); // Open in a new tab
  };

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
      <div
        style={{
          position: "relative",
          zIndex: "1",
          color: "white",
          display: "flex",
          flexDirection: "column", // Ensure vertical stacking
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            margin: "0",
            padding: "0",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Feel the power of AI
        </h1>
        <button
          onClick={handleButtonClick}
          style={{
            marginTop: "20px", // Add margin to create space between text and button
            padding: "10px 20px",
            fontSize: "1.5rem",
            cursor: "pointer",
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "none",
            borderRadius: "5px",
            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;
