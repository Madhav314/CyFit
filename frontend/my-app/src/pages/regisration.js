import React, { useState , setEffect, useEffect ,useRef } from 'react';
import logo from './images/logo.svg';
import validatereg from './RegisrationValidation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
const users = '/users';


//import {Container, Paper,Button} from '@material-ui/core';
export function Register () {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
 
  let navigate = useNavigate();
  const routeChange = () => {
    if(validatereg()){
      navigate('/');
    }
    
  }

  useEffect(()=>{
    setErrMsg('');
  },[user,pwd])

  useEffect(()=>{

  },[success])

  const handleSubmit = async (event) =>{
    event.preventDefault();
        
      const respone = await axios.post(users+"/"+email+"/"+user+"/"+pwd);
      setSuccess(true);
     
     
 

 }
  
  

  return (
      <>
    {success ?(

      <div  class="form-outline mb-4" style={{background: "#0F4C75"}} >
      <h1>User created!</h1>
      <br />
      <p>
          { <Button title ="registerButton" variant="primary" onClick={() => navigate('/')}>
          Proceed To Login Page 
          </Button>}
      </p>
      </div>

    ):(

    <div style={{background: "#0F4C75", position: "absolute", top: "90px", right:"0px", bottom: "0px", left: "0px" }}>
    <div class= "d-flex flex-row justify-content-center align-items-center" style={{background: "#0F4C75",color: "white", margin: "10% 0", }} >
      <Form name="Regisration form" action="" onSubmit={handleSubmit} >
      <h1>Register</h1>
      <Form.Label htmlFor="username">Email: </Form.Label>
	     <Form.Control id="email" 
       type="text" 
       name="email" 
       value = {email}
       onChange={(e) => setEmail(e.target.value)} 
       placeholder="Email" />


       <br></br>
       <Form.Label htmlFor="username">User Name: </Form.Label>
       <Form.Control id="Username" 
       type="text" 
       value = {user}
       name="Uname"
       onChange={(e) => setUser(e.target.value)} 
       placeholder="Username"/>
    
       <br></br>
       <Form.Label htmlFor="username">Password: </Form.Label>
	     <Form.Control id="Password" 
       type="password" 
       name="Password"
       value ={pwd}
       onChange={(e) => setPwd(e.target.value)}  
       placeholder="Password"/>
        <br></br>
        <Button title ="loginButton" variant="primary" type="submit">
                    Submit
                  </Button>
      </Form>
    </div>
    </div>

    )}
      </>
  )
}


export default Register