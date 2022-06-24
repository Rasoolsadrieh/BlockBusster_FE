import axios from "axios";
import { useContext, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { movieContext, userContext } from "../../App";
import DisplayInfo from "./favorite-display";

export default function FavoriteFindAll() {

    const navigate = useNavigate();
    const [favoriteBody, setFavoriteBody] = useState([]);
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
            const response = await fetch(`${url}/favorite/${user.email}`);
            const favorites = await response.json();
            const favoriteRows = favorites.map( (e) => getMovieInfo(e.movieId))

            console.log(favoriteRows)
            console.log(favoriteBody)
            setFavoriteBody(favoriteRows);
            getMovieInfo(favoriteRows)
            console.log(favoriteBody)
            console.log(favorites);

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
            <Button onClick={findAll}>Find Your Favorites</Button>
            <h1>Favorites</h1>
            <br></br>
            <br></br>
            <h6>{movies === undefined ||
            <DisplayInfo props={movies}/>} </h6>
            
            
        </>
    )
}