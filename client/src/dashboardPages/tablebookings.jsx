import { useEffect, useState } from "react"
import BASE_URL from "../config";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const TableBooking=()=>{

    const [data,setdata] = useState([]);

    const loaddata=async()=>{
        const api = `${BASE_URL}/coustomer/displaybookings`;
        
        try {
            const response = await axios.get(api);
            console.log(response.data)
            setdata(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loaddata();
    },[])

    let srno =0 ;

    return(
        <>

            <div id="bookedtable">
            <h1>Tables Booked</h1>
            
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Sr.No</th> 
                        <th>Name</th>
                        <th>Mob.No.</th>
                        <th>Restaurant Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {
                        data.map((key)=>{
                            srno++;
                            return(
                                <>
                                    <tr>
                                        <td>{srno}</td>
                                        <td>{key.name}</td>
                                        <td>{key.mobile}</td>
                                        <td>{key.restaurant}</td>
                                        <td>{key.email}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
                
            </Table>
            </div>
        </>
    )
}
export default TableBooking