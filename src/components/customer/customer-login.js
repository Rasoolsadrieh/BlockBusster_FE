import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { creditContext, userContext } from "../../App";
import { Button } from "@mui/material";

export default function CustomerLogin() {
    const emailInput = useRef();
    const passwordInput = useRef();
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();
    const [credit, setCredit] = useContext(creditContext);

    const url = "http://localhost:9005" ;

    async function login() {

        const customer = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
        };

        try {
            const response = await axios.post(`${url}/auth`, customer);
            console.log(response.data);
            console.log("Hey this is the user prior ", user);
            setUser({ ...user, email: customer.email });
            console.log("This is after we set the user ", user);

            setCredit({...credit, ccNumber: "null", ccName: "null", cvv: "null", expDate:"null", zip:"null", limit:"null", customerEmail:user.email})
        
            getCreditCard(customer.email);

            navigate("/dashboard");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data)
        }
    }

    async function getCreditCard(props){
            const creditResponse = await fetch(`${url}/creditcard/${props}`)
            const creditCards = await creditResponse.json();
            console.log(creditCards)
            creditCards.map((e) => setCredit({ccNumber: e.ccNumber, ccName: e.ccName, cvv: e.cvv, expDate: e.expDate, zip: e.zip, limit: e.limit, customerEmail: props.email}) )
            console.log(credit)
    }

    return (
        <>
            <h4>Welcome back, please log in below.</h4>
            <input placeholder="Enter Email" ref={emailInput}></input>
            <input type="password" placeholder="Enter password" ref={passwordInput}></input>
            <Button onClick={login}>Login</Button>
        </>
    )
}
