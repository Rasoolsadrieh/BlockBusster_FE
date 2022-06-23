import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { creditContext, userContext } from "../../App";

export default function CreditCardBuy(){

    const navigate = useNavigate();
    const url = "http://localhost:9005";


    const [user, setUser] = useContext(userContext);
    const [credit, setCredit] = useContext(creditContext);

    async function updatecc() {

        try {
            console.log(credit)
            setCredit({ccNumber: credit.ccNumber, ccName: credit.ccName, cvv: credit.cvv, expDate: credit.expDate, zip: credit.zip, limit: credit.limit-10, customerEmail:user.email})
            console.log(credit)
            const response = await axios.put(`${url}/updatecc`, credit);
            console.log(response.data);
            navigate("/orderall");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }

    }

    
    return (
        <>
            <br></br>
            <Button onClick={updatecc}>Pay Order </Button>
        </>
    )
}