import axios from "axios";
import { useContext, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { movieContext, userContext } from "../../App";
import DisplayInfo from "../favorites/favorite-display";

export default function OrderFindAll(){

    const navigate = useNavigate();
    const [orderBody, setOrderBody] = useState();
    const [user, setUser] = useContext(userContext);
    const [movie, setMovie] = useContext(movieContext);
    const [movies, setMovies] = useState();

    const url = "http://localhost:9005";

    const emailInput = useRef();
    const [movieTitle, setMovieTitle] = useState('')
	const [moviePoster, setMoviePoster] = useState('')
	const [moviePlot, setMoviePlot] = useState('')
    const movieArray = []

    async function findAll() {
        try {
            const response = await fetch(`${url}/order/${user.email}`);
            const favorites = await response.json();
            const favoriteRows = favorites.map( (e) => getMovieInfo(e.movieId))
            const orderInfo = favorites.map( setOrderBody )
            console.log(favoriteRows)
            setOrderBody(favorites)
            getMovieInfo(favoriteRows)
            console.log(favorites);
            console.log(orderBody)
            console.log(orderInfo)

        } catch (e){
            console.error(e);
        }
    }

    async function getMovieInfo(props){
		try{
			console.log(props)
            
            
			const response = await fetch(`http://www.omdbapi.com/?i=${props}&apikey=76e93e0c`);
			const movieResponse = await response.json();
            
            movieArray.push(movieResponse)
			console.log(movieResponse)
			console.log(movieResponse.Title)
			setMovieTitle(movieResponse.Title)
            console.log(movieArray)
            
            
            
		}catch(error){
			console.error(error.response.data);
			alert(error.response.data);
        }
        setMovies(movieArray)
	}
    async function dashboardReturn(){
        navigate("/dashboard");
    }

    return (
        <> 
            <Button onClick={dashboardReturn}>Return to Dashboard</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={findAll}>View Your Orders</Button>
            <br></br>
            <br></br>
            <h6>{movies === undefined ||
            <DisplayInfo props={movies} order={orderBody}/>} </h6>
           
        </>
    )


}