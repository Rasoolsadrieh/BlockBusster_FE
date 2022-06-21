import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./customer-register.css";

export default function CustomerRegister() {
  const navigate = useNavigate();
  const url = "http://localhost:9005";

  const fnameInput = useRef();
  const lnameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const dobInput = useRef();

  async function register() {
    const user = {
      fName: fnameInput.current.value,
      lName: lnameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
      dob: dobInput.current.value
    };
    try {
      const response = await axios.post(`${url}/register`, user);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data);
    }
  }

  return (
    <>
      <h4>Hello new customer, please register below.</h4>
      <div className="input-box">
        <input
          className="box"
          placeholder="Enter First Name"
          ref={fnameInput}
        ></input>
        <input
          className="box"
          placeholder="Enter Last Name"
          ref={lnameInput}
        ></input>
        <input
          className="box"
          placeholder="Enter Date of Birth"
          ref={dobInput}
        ></input>
        <br></br>
        <input
          className="box"
          placeholder="Enter Your Email"
          ref={emailInput}
        ></input>
        <input
          className="box"
          type="password"
          placeholder="Enter Your Password"
          ref={passwordInput}
        ></input>
        <Button className="btn" onClick={register}>
          Sign Up
        </Button>
      </div>
    </>
  );
}
