import {useRef , useState, useEffect } from 'react';
import './css/App.css';
import './css/login.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from './images/logo.svg';
import loginValidate from './loginValidation';
import axios from '../api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const users = '/users';


export function Login (){
  let navigate = useNavigate();
 
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

  useEffect(()=>{
    setErrMsg('');
  },[user,pwd])

  useEffect(()=>{

  },[success])

  const handleSubmit = async (event) =>{
    event.preventDefault();

    try {
        
       const respone = await axios.get(users+"/"+user+"/"+pwd);
      // const respone = await fetch('http://coms-319-g12.class.las.iastate.edu:8080/users/'+user+'/'+pwd)

      // console.log(respone.data);

      if(respone.data === "Logged in"){
        setSuccess(true);
      }else if(respone.data === "account does not exist" || respone.data === "account does not exist"){
        setUser('');
        setPwd('');
      }
  

    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
        {success ? (
          
            <div  class="form-outline mb-4" style={{background: "#0F4C75"}} >
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <Button title ="registerButton" variant="primary" onClick={() => navigate('/mainpage')}>
                    Go to Home
                    </Button>
                </p>
            </div>
        ) : (

          <div style={{background: "#0F4C75", position: "absolute", top: "90px", right:"0px", bottom: "0px", left: "0px" }}>
               <div class= "d-flex flex-row justify-content-center align-items-center" style={{background: "#0F4C75",color: "white", margin: "10% 0", }} >
                <Form onSubmit={handleSubmit} >
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="username">Username: </Form.Label>
                    
                    <Form.Control 
                    type="email"  
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    placeholder="Enter email" 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    value={pwd}
                    required 
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Password" 
                    />

                  </Form.Group>
                  <Button title ="loginButton" variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button title ="registerButton" variant="primary" onClick={() => navigate('/register')}>
                    Register
                    </Button>
                </Form>
             </div>
            
          </div>
           
        )}
    </>
)

}


export default Login