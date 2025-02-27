import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

import { useState } from 'react';
import axios from 'axios';

import BASE_URL from '../config';



const Search=()=>{
    const [input, setInput] = useState({});
    const [mydata, setMydata] = useState([]);
    
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
     }


     const handleSubmit=async()=>{
        
        let api=`${BASE_URL}/doctor/searchdoctor`;
        const response = await axios.post(api, input);
        console.log(response.data);
        setMydata(response.data);
     }

const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td>{key.name} </td>   
            <td>{key.address} </td>       
            <td>{key.city} </td>   
            <td>{key.email} </td>
            <td>{key.mobile} </td>
            <td>{key.specailization} </td>   
           
          </tr>
        </>
      )
})
    return(
        <>
        <div id='searchformandheading'>
         <h1 > Search Doctor</h1> 

         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>select Restaurunt</Form.Label>
        <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
          <option>Open this select menu</option>
          <option value="Hakeems">Hakeems</option>
          <option value="Rajhans">Rajhans</option>
          <option value="Manohar">Manohar</option>
          
    </Form.Select>
      </Form.Group>
       <input type="button" value="search" onClick={handleSubmit} /> 
    </Form>      
    </div>

    <hr />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Doctor name#</th>
          <th>Address</th>
          <th>City</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Specialization</th>
        </tr>
      </thead>
      <tbody>
          {ans}
        </tbody>
        </Table>

        </>
    )
}

export default Search;