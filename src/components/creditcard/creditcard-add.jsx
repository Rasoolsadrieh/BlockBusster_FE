import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function CreditCardAdd(){

    const navigate = useNavigate();
    const url = "http://localhost:9005";

    const ccNumberInput = useRef();
    const ccNameInput = useRef();
    const cvvInput = useRef();
    const expDateInput = useRef();
    const zipInput = useRef();
    const limitInput = useRef();
    const customerEmailInput = useRef();

    async function createcc() {
        const user = {
            ccNumber: ccNumberInput.current.value,
            ccName: ccNameInput.current.value,
            cvv: cvvInput.current.value,
            expDate: expDateInput.current.value,
            zip: zipInput.current.value,
            limit: limitInput.current.value,
            customerEmail: customerEmailInput.current.value,
        };
        try {
            const response = await axios.post(`${url}/registercc`, user);
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
            <input placeholder="Enter Your Email" ref={customerEmailInput}></input>
            <br></br>
            <Button onClick={createcc}>Add Credit Card</Button>
        </>
    )
}