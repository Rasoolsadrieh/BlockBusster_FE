import axios from "axios";
import { useContext, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieContext } from "../../App";
import { Button } from "@mui/material";

export default function OrderRent(){

    const navigate = useNavigate();
    const [movie, setMovie] = useContext(movieContext);
    const movieIdInput = useRef();
    const orderDateInput = useRef();
    const orderEmailInput = useRef();
    const url = "http://localhost:9005";

    async function orderRent(){

        const user = {
            movieId: movie,
            orderDate: "06/22/2022",
            balance: 5,
            isOwned: false,
            returnDate: "07/06/2022",
            orderEmail: orderEmailInput.current.value,
        };
        try {
            const response = await axios.post(`${url}/order`, user);
            console.log(response.data);
            navigate("/ccrent");
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
            <h6>Each Movie is $5 to rent.</h6>
            <h1>Movie Id:{movie}</h1>
            <input placeholder="Enter Your Email" ref={orderEmailInput}></input>
            <Button onClick={orderRent}>Place Order</Button>
 
        </>
    )
}