import React, { useEffect, useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Signup() {
  const navigate=useNavigate()
  
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  

  function handleName(event) {
    setName(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    
      axios.post("http://localhost:3001/auth",{
        username:name,
        password:password
    
      }).then((response)=>{
        if(response.status===200 && handleSubmit){
          navigate('/join')
        }
        else if(response.status===401){
         console.log(response.data)
         
        }
    
    }).catch((error)=>{
      console.log("An error occured")
    })
    
    
  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id=""
            value={name}
            onChange={handleName}
            required={true}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id=""
            value={password}
            onChange={handlePassword}
            required={true}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
