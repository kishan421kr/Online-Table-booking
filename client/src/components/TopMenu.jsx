import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



const TopMenu=()=>{
     const [input, setInput] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values, [name]:value}));
       console.log(input);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        let api=`${BASE_URL}/coustomer/booking`;
        try {
            const response = await axios.post(api, input);
            console.log(response);
            toast.success(response.data.msg);
            setShow(false)
        } catch (error) {
            console.log(error);
        }


        
    }
    return(
        <>
           <Navbar className='navbar' data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Book My Table</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to={'home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'menu'}>Menu</Nav.Link>
            <Nav.Link as={Link} to={'about'}>About-us</Nav.Link>
            <Nav.Link href="#" onClick={handleShow}>Reservation</Nav.Link>
            {/* <Nav.Link as={Link} to={'reservation'}>Reservation</Nav.Link> */}
            <Nav.Link as={Link} to={'contact'}>Contact</Nav.Link>
            <Nav.Link as={Link} to={'login'}>Login/SignUp</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>



       
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Table Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Restaurunt</Form.Label>
        <Form.Select aria-label="Default select example" name="restaurant" onChange={handleInput}>
          <option>Open this select menu</option>
          <option value="Hakeems">Hakeems</option>
          <option value="Rajhans">Rajhans</option>
          <option value="Manohar">Manohar</option>
          
    </Form.Select>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile no</Form.Label>
        <Form.Control type="text" name="mobile" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleInput} />
      </Form.Group>
      
     
    </Form>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>



      <ToastContainer />


        </>
    )
}

export default TopMenu;