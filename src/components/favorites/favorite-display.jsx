import { memo, useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import { movieContext, userContext } from "../../App";
import { Button } from "@mui/material";
import { useRef } from "react";

export default function DisplayInfo(props, order){
    
    const orders = props.order
    const movies = props.props
    const movieOrders = [];
    
    const navigate = useNavigate();
    const [movie,setMovie]= useContext(movieContext);
    const [user, setUser] = useContext(userContext);
    
    console.log(orders)
    console.log(movies)
    console.log("Display Info")

    function getOrderInfo(props){
        console.log(props)
        for(let i =0; i < orders.length; i++){
            if(orders[i].movieId === props){
                return(
                    <div>
                    <h5>Balance: {orders[i].balance}</h5>
                    <br></br>
                    <h5>Order Date: {orders[i].orderDate}</h5>
                    <br></br>
                    <h5>Return Date: {orders[i].returnDate}</h5>
                    </div>
                )
            }
        }
    }


    console.log(movieOrders)

    const output = movies.map((e) =>
    
    <div> 
        <h3>{e.Title}</h3>
        <h5>{e.imdbID}</h5>
        <img src={e.Poster}/>
        <h3>{getOrderInfo(e.imdbID)}</h3>
        <br/>
        <br/>
    </div>)


    return(
        <>
        
        <h6>{output}</h6>  
        
        
        </>
            
    )
}