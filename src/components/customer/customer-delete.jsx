import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function CustomerDelete() {

    const navigate = useNavigate();
    const url = "http://localhost:9005";

 
    const emailInput = useRef();
 
    
    async function deletec() {

        const user = {

            email: emailInput.current.value,
 
            
        };
        try {
            const response = await axios.delete(`${url}/delete/${emailInput.current.value}`);
            console.log(response.data);
            navigate("/logout");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    async function dashboardReturn(){
        navigate("/dashboard");
    }
    return (
        <>
            <h4>Hello,  please enter your information below.</h4>
            <Button onClick={dashboardReturn}>Return to Dashboard</Button> 
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter Your Email" ref={emailInput}></input>
            <br></br>
            <Button onClick={deletec}>Delete Customer Account</Button>
        </>
    );

}