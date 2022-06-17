import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { userContext } from "../../App";
import axios from "axios";
import { Button } from "@mui/material";


export default function Logout(){

    const navigate = useNavigate();
    const [user, setUser] = useContext(userContext);
    setUser({ ...user, email: "Guest" });
    navigate("/");
    

    return (
        <>
            
        </>
    )


}