import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Select Role</h2>
      <button onClick={() => navigate("/login/teacher")}>Teacher Login</button>
      <br /><br />
      <button onClick={() => navigate("/login/student")}>Student Login</button>
    </div>
  );
}
