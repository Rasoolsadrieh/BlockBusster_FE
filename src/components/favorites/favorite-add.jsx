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

    const movieidInput = useRef();
    const accountEmailInput = useRef();
	

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

    async function addFav() {
		console.log(user)

        const favUser = {
            movieId : movie,
            accountEmail : user.email
        };
        try {
            const response = await axios.post(`${url2}/favorite`, favUser);
			console.log(response.data);
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
		<h1>Movie ID: {movie}</h1>
		<Button onClick={addFav}>Add To Favorites</Button>
		<div className='container-fluid ross-movie-app'>
			
			</div>
		
		</>
	);
}