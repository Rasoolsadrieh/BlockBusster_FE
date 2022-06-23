import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddFavourites from './AddFavourites';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useRef } from 'react';
import { movieContext, userContext } from '../../App';
import Button from '@mui/material/Button';

export default function FavoriteAdd(){

    const navigate = useNavigate();
	const [movie, setMovie] = useContext(movieContext);
	const [searchValue, setSearchValue] = useState('');
	const [user, setUser] = useContext(userContext);

    const url2 = "http://localhost:9005";
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=76e93e0c`;

    const [movieTitle, setMovieTitle] = useState('')
	const [moviePoster, setMoviePoster] = useState('')
	const [moviePlot, setMoviePlot] = useState('')
    
	

	const getMovieRequest = async (searchValue) => {
		// const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=76e93e0c`;
		

		const response = await fetch(url);
		const movieResponse = await response.json();

		// if (movieResponse.Search) {
		// 	setMovies(movieResponse.Search);
		// }
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	async function dashboardReturn(){
        navigate("/dashboard");
    }

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

    async function addFav() {
		console.log(user)

        const favUser = {
            movieId : movie,
            accountEmail : user.email
        };
        try {
			
            const response = await axios.post(`${url2}/favorite`, favUser);
			console.log(response.data);
			navigate("/favall")
        } catch (error) {
			console.error(error.response.data);
			alert(error.response.data);
		}
    }



    return (
		<>

		<Button onClick={dashboardReturn}>Return to Dashboard</Button> 
		<br></br>
		<br></br>
		<br></br>
		{movieTitle === getMovieInfo()}
		<h1>Movie Title: {movieTitle}</h1>
		<h5>  Plot: {moviePlot}</h5>
		<img src = {moviePoster}/>
		<br></br>
		<Button onClick={addFav}>Add To Favorites</Button>
		<div className='container-fluid ross-movie-app'>

			</div>
		
		</>
	);
}