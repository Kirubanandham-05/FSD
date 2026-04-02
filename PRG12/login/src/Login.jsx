import React, { useState } from "react";
import "./App.css";
function Login() {
    const[Un,Sun] = useState("");
    const [Pa,Spa] = useState("");
    const[msg,Smsg] = useState("");
    const Hlogin = (e) => {
        e.preventDefault();
        if(Un === "admin" && Pa === "1234")
        {
            Smsg("TVK WON in 2026 election")
        } else {
            Smsg("TVKKKKKKKKKKKKKKKKKKKKKK")
        }
    };

return (
    <div className="App">
        <h2>Login Form</h2>
        <form onSubmit={Hlogin}>
        <div>
            <label > USERNAME :</label>
            <input type="text" placeholder="Enter Username" value={Un} 
            onChange={(e) => Sun(e.target.value)} />
        </div>
         <div>
            <label > PASSWORD:</label>
            <input type="password" placeholder="Enter Password" value={Pa} 
            onChange={(e) => Spa(e.target.value)} />
        </div>
        <button type="submit">LOGIN</button>
        </form>
        <h3>{msg}</h3>
        
    </div>
)
}

export default Login ;
