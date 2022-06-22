import axios from "axios";
import { useContext, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { userContext } from "../../App";

export default function CCFindAll(){

    const navigate = useNavigate();
    const [creditCardBody, setCreditCardBody] = useState([]);
    const url = "http://localhost:9005";
    const emailInput = useRef();
    const [user, setUser] = useContext(userContext);

    async function findAll() {
        try {
            const response = await fetch(`${url}/creditcard/${user.email}`);
            const creditCards = await response.json();
            const ccRows = creditCards.map((e) => {
                return (
                    <tr>
                         <td>{e.ccNumber}</td>
                         <td>{e.ccName}</td>
                         <td>{e.cvv}</td>
                         <td>{e.expDate}</td>
                         <td>{e.zip}</td>
                         <td>{e.limit}</td>
                    </tr>
                );
            })
            setCreditCardBody(ccRows);
            console.log(creditCards);

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
            <Button onClick={findAll}>View Your CreditCards</Button>
            <table>
                <thead>
                    <tr>
                        <th>ccNumber</th>
                        <th>ccName</th>
                        <th>cvv</th>
                        <th>expDate</th>
                        <th>zip</th>
                        <th>limit</th>
                    </tr>
                </thead>
                <tbody>{creditCardBody}</tbody>
            </table>
        </>
    )


}