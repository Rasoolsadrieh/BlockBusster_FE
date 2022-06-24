import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { creditContext, userContext } from "../../App";

export default function CreditCardUpdate(){

    const navigate = useNavigate();
    const url = "http://localhost:9005";

    const ccNumberInput = useRef();
    const ccNameInput = useRef();
    const cvvInput = useRef();
    const expDateInput = useRef();
    const zipInput = useRef();
    const limitInput = useRef();
    const customerEmailInput = useRef();
    const [user, setUser] = useContext(userContext);
    const [credit, setCredit] = useContext(creditContext);

    async function updatecc() {
        console.log(credit)
        try {
            console.log(credit)
            const response = await axios.put(`${url}/updatecc`, credit);
            console.log(response.data);
            navigate("/dashboard");
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
            <h4>Please add your credit card information below. </h4>
            <Button onClick={dashboardReturn}>Return to Dashboard</Button>
            <input placeholder="Enter Credit Card Number" ref={ccNumberInput}></input>
            <input placeholder="Enter Credit Card Name" ref={ccNameInput}></input>
            <input placeholder="Enter Credit Card cvv" ref={cvvInput}></input>
            <input placeholder="Enter Credit Card expiration date" ref={expDateInput}></input>

            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter zip code" ref={zipInput}></input>
            <input placeholder="Enter Credit Card limit" ref={limitInput}></input>
            <br></br>
            <Button onClick={updatecc}>Update Credit Card</Button>
        </>
    )
}