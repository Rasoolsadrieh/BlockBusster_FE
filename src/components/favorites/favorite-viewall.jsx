import axios from "axios";
import { useContext, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { userContext } from "../../App";

export default function FavoriteFindAll() {

    const navigate = useNavigate();
    const [favoriteBody, setFavoriteBody] = useState([]);
    const [user, setUser] = useContext(userContext);

    const url = "http://localhost:9005";
    const emailInput = useRef();

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

    return (
        <> 
            <Button onClick={dashboardReturn}>Return to Dashboard</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={findAll}>Find Your Favorites</Button>
            <table>
                <thead>
                    <tr>
                        <th>movieId</th>
                    </tr>
                </thead>
                <tbody>{favoriteBody}</tbody>
            </table>
        </>
    )
}