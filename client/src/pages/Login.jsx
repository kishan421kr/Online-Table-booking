import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import BASE_URL from '../config';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

   const handleSubmit=async(e)=>{
    e.preventDefault();
    let api=`${BASE_URL}/coustomer/coustomerlogin`;

    try {
          const response = await axios.post(api, {email:email, password:password});
          console.log(response.data); 
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("docid", response.data._id);
          
          toast.success("You are Succesfully login!");
          navigate("/Dashboard");
 
    } catch (error) {
        toast.error(error.response.data.msg);
        
    }

   }

   const handelsignup=()=>{
        navigate("/signup")
   }
    return(
        <>
        <div id='loginheadingdiv'>
        <h1 id='loginheading'> Login</h1>
        </div>
        
        <div id="doclogin">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={password}
                    onChange={(e)=>{setPassword(e.target.value)}} />
            </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        <div id='signupdiv'>
            D'not have an account ? <span onClick={handelsignup}>SignUp</span>
        </div>


    <ToastContainer />
        </>
    )
}

export default Login;