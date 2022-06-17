import axios from "axios";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../home.css';
import MovieList from './../MovieList';
import MovieListHeading from './../MovieListHeading';
import SearchBox from './../SearchBox';
import { useNavigate } from "react-router-dom";

export default function CustomerWelcome() {

    const navigate = useNavigate();
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=76e93e0c`;
		

		const response = await fetch(url);
		const movieResponse = await response.json();

		if (movieResponse.Search) {
			setMovies(movieResponse.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

    return (
        <>
            <h1>Welcome to the BlockBusster Application</h1>
            <div className='container-fluid ross-movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				{/* <MovieListHeading heading='BlockBusster Application' /> */}
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div class='grid-container'>
				<MovieList
					movies={movies}
				/>
			</div>
		    </div>
        </>
    );
}