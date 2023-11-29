
import axios from "axios";
import React, { useContext, useState } from "react";
import { LoginPro } from "../navigations/Navigator";
import { useNavigate } from "react-router-dom";

function Logincompo() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let navigate=useNavigate()

  const loginHandler=useContext(LoginPro)

  const emailvalid = (data) => {
    setEmail(data.target.value); 
  };

  const passvalid = (data) => {
    setPass(data.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/users");
      const user_data = response.data;

      const user = user_data.find((val) => email === val.email);

      if (user) {
        if (pass === user.Password) {
          console.log("Login successful");
          loginHandler.handleLogin() 
          console.log(loginHandler);


        } else {
          alert("Incorrect password");

        }
      } else {
        alert("User does not exist");


      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister=()=>{
    navigate("/register")
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="Email">Email</label>
        <br />
        <input
          type="email"
          id="Email"
          value={email}
          onChange={(data) => emailvalid(data)}
          required
        />
        <br />
        <label htmlFor="pass">Password</label>
        <br />
        <input
          type="password"
          id="pass"
          value={pass}
          onChange={(data) => passvalid(data)}
          required
        />
        <br />
        <input type="submit" onClick={handleLogin} />

        <button onClick={handleRegister}>Register Here..</button>
      </form>

    </div>
  );
}

export default Logincompo;
