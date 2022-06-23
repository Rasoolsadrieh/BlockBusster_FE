import axios from "axios";
import { useContext, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieContext, userContext } from "../../App";
import { Button } from "@mui/material";

export default function OrderBuy(){

    const navigate = useNavigate();
    const movieIdInput = useRef();
    const orderDateInput = useRef();
    const orderEmailInput = useRef();
    const [movie, setMovie] = useContext(movieContext);
    const [user, setUser] = useContext(userContext);

    const url = "http://localhost:9005";

    async function orderBuy(){

        const buyUser = {
            movieId: movie,
            orderDate: "06/23/2022",
            balance: 10,
            isOwned: true,
            returnDate: "Owned",
            orderEmail: user.email
        };

        try {
            console.log(user.email)
            const response = await axios.post(`${url}/order`, buyUser);
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
            <Button onClick={orderBuy}>Place Order</Button>
 
        </>
    )
}