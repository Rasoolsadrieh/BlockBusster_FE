import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./navbar.css";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <nav className="nav">
        <Link to="/">
          <Button>Home Page</Button>
        </Link>
        <span> </span>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <span></span>
        <Link to="/register">
          <Button>Sign Up</Button>
        </Link>
      </nav>
    </div>
  );
}
