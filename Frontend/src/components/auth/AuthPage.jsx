import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="center">
      <h2>Welcome Back</h2>
      <p>Select your role to continue</p>

      <Link to="/login/teacher">
        <button>Login as Teacher</button>
      </Link>

      <Link to="/login/student">
        <button>Login as Student</button>
      </Link>
    </div>
  );
};

export default AuthPage;
