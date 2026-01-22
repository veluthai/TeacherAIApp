import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Shikshak Sahayak</h1>
      <p>Your AI Teaching Assistant</p>
      <button onClick={() => navigate("/role")}>Get Started</button>
    </div>
  );
}
