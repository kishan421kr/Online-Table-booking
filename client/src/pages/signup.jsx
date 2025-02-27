import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../config';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

const SignUp=()=>{
    const [input ,setInput] = useState("");


    const handelinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input);

    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const api=`${BASE_URL}/coustomer/coustomersignup`;
        try {
            const response = await axios.post(api , input)
            console.log(response.data);
            toast.success(response.data.msg);
        } catch (error) {
            console.log(error)
            toast.error(response.data.msg);
        }
        
    }

    const navigate= useNavigate();
    const handellogin=()=>{
        navigate("/login")
   }
    return(
        <>
            <div id='loginheadingdiv'>
        <h1 id='loginheading'> Sign Up</h1>
        </div>
        
        <div id="doclogin">
          <Form>
            <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={input.name} 
                    onChange={handelinput}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={input.email} 
                    onChange={handelinput}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" name="number" value={input.number} 
                    onChange={handelinput}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={input.password}
                    onChange={handelinput} />
            </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Signup
                </Button>
            </Form>
        </div>
        <div id='signupdiv'>
            Have a account ? <span onClick={handellogin}>Login</span>
        </div>

        <ToastContainer />
        </>
    )
}
export default SignUp