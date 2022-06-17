import { useRef, useState } from "react";

import MovieInfo from "./MovieInfo";
import { Button } from "@mui/material";


export default function FindMovie(){

    const movieInput = useRef();
    const [movies, setMovies] = useState();
    

    

 	const getMovieRequest = async () => {
    
    const searchValue ={Title: movieInput.current.value}
    const movie = JSON.stringify(searchValue.Title)
    
    const url = `http://www.omdbapi.com/?s=${movie}&apikey=76e93e0c`;
    

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    const props = responseJson
    

    setMovies(props.Search)
    
};


return(
        <>
        <h4>Please Enter a Movie Title below.</h4>
        <input placeholder="Enter Movie Title" ref={movieInput}></input>
        <Button onClick={getMovieRequest}>Search</Button>
        <div>
            {movies === undefined ||
            <MovieInfo props={movies}/>}
        </div>
        
        </>
);

}
