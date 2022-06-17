import axios from "axios";
import { useContext, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieContext } from "../../App";
import { Button } from "@mui/material";

export default function OrderBuy(){

    const navigate = useNavigate();
    const movieIdInput = useRef();
    const orderDateInput = useRef();
    const orderEmailInput = useRef();
    const [movie, setMovie] = useContext(movieContext);
    const url = "http://localhost:9005";

    async function orderBuy(){

        const user = {
            movieId: movie,
            orderDate: "06/17/2022",
            balance: 10,
            isOwned: true,
            returnDate: "Owned",
            orderEmail: orderEmailInput.current.value,
        };
        try {
            const response = await axios.post(`${url}/order`, user);
            console.log(response.data);
            navigate("/ccbuy");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }
    async function dashboardReturn(){
        navigate("/dashboard");
    }

    return(
        <>
            <Button onClick={dashboardReturn}>Return to Dashboard</Button>
            <br></br>
            <br></br>
            <br></br>
            <h4>Place an order Below.</h4>
            <h6>Each Movie is $10 to buy.</h6>
            <h1> Movie ID: {movie}</h1>
            <input placeholder="Enter Your Email" ref={orderEmailInput}></input>
            <Button onClick={orderBuy}>Place Order</Button>
 
        </>
    )
}