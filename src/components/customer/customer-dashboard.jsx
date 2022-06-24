import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { creditContext, userContext } from "../../App";
import Logout from "./customer-logout";
import { Button } from "@mui/material";

export default function CustomerDashboard() {
    const [user, setUser] = useContext(userContext);
    const [credit, setCredit] = useContext(creditContext);
    console.log(user);
    console.log(credit);
    
    const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to your dashboard!!!!!</h1>
            <Button onClick={() => navigate("/")}>Find Movies</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={() => navigate("/favdel")}>Delete Favorites</Button>
            <Button onClick={() => navigate("/favall")}>View Favorites</Button>
            <Button onClick={() => navigate("/orderall")}>View all Orders</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={() => navigate("/ccadd")}>Add Credit Card Info</Button>
            <Button onClick={() => navigate("/ccupd")}>Update Credit Card</Button>
            <Button onClick={() => navigate("/ccdel")}>Delete Credit Card</Button>
            <Button onClick={() => navigate("/ccall")}>View Credit Cards</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={() => navigate("/logout")}>Logout</Button>
            <Button onClick={() => navigate("/delete")}>Delete Account</Button>

            

            
            
        </>
    );
}