import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useRef } from 'react';
import { Button } from '@mui/material';
import { userContext } from '../../App';

export default function FavoriteDelete() {
    
    const navigate = useNavigate();
    const [favoriteBody, setFavoriteBody] = useState([]);
    const [user, setUser] = useContext(userContext);

    const url = "http://localhost:9005";
    
    const movieIdInput = useRef();
    const emailInput = useRef();

    async function deleteFav(){

        try {
            const response = await axios.delete(`${url}/deletefv/${movieIdInput.current.value}`);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    async function findAll() {
        try {
            const response = await fetch(`${url}/favorite/${user.email}`);
            const favorites = await response.json();
            const favoriteRows = favorites.map((e) => {
                return (
                    <tr>
                         <td>{e.movieId}</td>
                    </tr>
                );
            })
            setFavoriteBody(favoriteRows);
            console.log(favorites);

        } catch (e){
            console.error(e);
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
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter the MovieID" ref={movieIdInput}></input>  
            <Button onClick={deleteFav}>Remove Favorite</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={findAll}>Find Your Favorites</Button>
            <table>
                <thead>
                    <tr>
                        <th>movie Id</th>
                    </tr>
                </thead>
                <tbody>{favoriteBody}</tbody>
            </table>

        </>
    )
}