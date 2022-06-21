import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import { Button } from "@mui/material";
import "./customer-login.css";

export default function CustomerLogin() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const [user, setUser] = useContext(userContext);
  const navigate = useNavigate();
  const url = "http://localhost:9005";

  async function login() {
    const customer = {
      email: emailInput.current.value,
      password: passwordInput.current.value
    };

    try {
      const response = await axios.post(`${url}/auth`, customer);
      console.log(response.data);
      console.log("Hey this is the user prior ", user);
      setUser({ ...user, email: customer.email });
      console.log("This is after we set the user ", user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data);
    }
  }

  return (
    <div className="container">
      <h4>Welcome back, please log in below.</h4>
      <div className="input-box">
        <input
          className="box"
          placeholder="Enter Email"
          ref={emailInput}
        ></input>
        <input
          className="box"
          type="password"
          placeholder="Enter password"
          ref={passwordInput}
        ></input>
        <Button onClick={login}>Login</Button>
      </div>
    </div>
  );
}
