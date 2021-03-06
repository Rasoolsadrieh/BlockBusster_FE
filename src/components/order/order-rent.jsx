import axios from "axios";
import { useContext, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieContext, userContext } from "../../App";
import { Button } from "@mui/material";

export default function OrderRent(){

    const navigate = useNavigate();
    const [movie, setMovie] = useContext(movieContext);
    const movieIdInput = useRef();
    const orderDateInput = useRef();
    const orderEmailInput = useRef();
    const [user, setUser] = useContext(userContext);

    const url = "http://localhost:9005";

    const [movieTitle, setMovieTitle] = useState('')
	const [moviePoster, setMoviePoster] = useState('')
	const [moviePlot, setMoviePlot] = useState('')

    async function getMovieInfo(){
		try{
			console.log(movieTitle)
			const response = await fetch(`http://www.omdbapi.com/?i=${movie}&apikey=76e93e0c`);
			const movieResponse = await response.json();
			console.log(movieResponse)
			console.log(movieResponse.Title)
			setMovieTitle(movieResponse.Title)
			setMoviePoster(movieResponse.Poster)
			setMoviePlot(movieResponse.Plot)
			
		}catch(error){
			console.error(error.response.data);
			alert(error.response.data);
		}
	}


    async function orderRent(){

        const rentUser = {
            movieId: movie,
            orderDate: "06/24/2022",
            balance: 5,
            isOwned: false,
            returnDate: "07/8/2022",
            orderEmail: user.email
        };
        try {
            console.log(user)
            const response = await axios.post(`${url}/order`, rentUser);
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
            {movieTitle === getMovieInfo()}
		<h1>Movie Title: {movieTitle}</h1>
		<h5>  Plot: {moviePlot}</h5>
		<img src = {moviePoster}/>
		<br></br>
            <Button onClick={orderRent}>Place Order</Button>
 
        </>
    )
}