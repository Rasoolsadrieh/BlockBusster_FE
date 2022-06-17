import { memo, useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import { movieContext, userContext } from "../../App";
import { Button } from "@mui/material";

export default function MovieInfo(props){
    
    const movies = props.props
    const navigate = useNavigate();
    const [movie,setMovie]= useContext(movieContext);
    const [user, setUser] = useContext(userContext);
    const index = 0;

    
    const output = movies.map((e,index) =>
    
    <div> 
        <h1>{e.Title}</h1>
        <h2>{e.Year}</h2> 
        <br/>
        <a href={setMovieID(e.imdbID)}/>
        <img src = {e.Poster}/>
        <br/>
        <Button onClick={() => goBuy(e.imdbID)}>Buy Movie </Button>
        <Button onClick={() => goRent(e.imdbID)}>Rent Movie</Button>
        <Button onClick={() => goFavorite(e.imdbID)}>Favorite Movie</Button>
        <br/>
    </div>)
    
    function setMovieID(props){
        // console.log(props)
        setMovie(props)
    }


    function goBuy(id){
        console.log(id)
        console.log(user.email)
         if(user.email === "Guest"){
            navigate("/login")
        }else{
        setMovie(id)
        navigate("/buyMovie")
        }
    }

    function goRent(id){
        if(user.email === "Guest"){
            navigate("/login")
        }else{
        setMovie(id)
        navigate("/orderrent")
        }
    }

    function goFavorite(id){
        if(user.email === "Guest"){
            navigate("/login")
        }else{
        setMovie(id)
        navigate("/favadd")
        }
    }

    return(
        <>
        <div> {output} </div>

        
        </>
            
    )
}