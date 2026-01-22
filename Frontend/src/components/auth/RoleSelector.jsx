import { useNavigate } from "react-router-dom";

const RoleSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="center">
      <h2>Select Your Role</h2>

      <button onClick={() => navigate("/teacher/dashboard")}>
        👩‍🏫 Teacher
      </button>

      <button onClick={() => navigate("/student/dashboard")}>
        👨‍🎓 Student
      </button>
    </div>
  );
};

export default RoleSelector;
