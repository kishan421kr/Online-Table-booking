import { useEffect, useState } from "react"
import BASE_URL from "../config";
import axios from "axios";

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
    })

    return(
        <>

            <div id="bookedtable">
            <h1>Tables Booked</h1>
            <table style={{border:"1px solid black"}}>
                <thead>
                    <tr> {/* Added <tr> to define a row */}
                    <th>Sr.No</th> {/* Use <th> for headers instead of <td> */}
                    <th>Name</th>
                    <th>Number</th>
                    <th>Restaurant Name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            </div>
        </>
    )
}
export default TableBooking