import React from "react";
import { useNavigate } from "react-router-dom";

function P2PCard() {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1); // goes back to previous page
  };

  return (
    <div
      onClick={closeModal}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "350px",
          height: "250px",
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          position: "relative",
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ❌
        </button>

        <h3>P2P Modal</h3>
        <p>Empty card content here...</p>
      </div>
    </div>
  );
}

export default P2PCard;
