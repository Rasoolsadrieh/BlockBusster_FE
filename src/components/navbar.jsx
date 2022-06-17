import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


export default function NavBar(){
    const navigate = useNavigate();

    return (
        <nav>
            <Link to ="/">
                <Button>Home Page</Button>
            </Link>
            <span> </span>
            <Link to = "/login">
                <Button>Login</Button>
            </Link>
            <span></span>
            <Link to = "/register">
                <Button>Sign Up</Button>
            </Link>
        </nav>
    )

}