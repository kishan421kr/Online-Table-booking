import { useState, useEffect } from "react";
import BASE_URL from "../config";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import img1 from '../images/kimi-albertso.jpg'
import img2 from '../images/jason-leung.jpg'
import img3 from '../images/brooke-lark.jpg'



const Home=()=>{
const [mydata, setMydata] = useState([]);
const loadData=async()=>{
    let api=`${BASE_URL}/doctor/homedoctorsdisplay`;
    try {
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    } catch (error) {
         console.log(error);
    }
}

// useEffect(()=>{
//     // loadData();
// }, []);


// const ans= mydata.map((key)=>{
//     return(
//         <>
//            <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>{key.name}</Card.Title>
//         <Card.Text>
//           {key.specialization}
//           Address : {key.address} City : {key.city} Mobile : {key.mobile}
//           Email : {key.email}
//         </Card.Text>
//         <Button variant="primary">Appointemtn Now!</Button>
//       </Card.Body>
//     </Card>
        
//         </>
//     )
// })



    return(
        <>
        {/* <div id="homediv">
            <h1> Welcome To Online Appointment System</h1>
            <h2>Our Doctors</h2>
             <div id="homeDoctors">
                {ans}
            </div> 
        </div> */}
          
          <div id="hero">
            <div>
                <div class="hero-slider">
                    <div class="slides">
                        <img src={img1} alt="Delicious Food 1"/>
                        <img src={img2} alt="Delicious Food 2"/>
                        <img src={img3} alt="Delicious Food 3"/>
                    </div>
                    
                </div>
                <div id="btndiv">
                    <p>Experience exquisite dining with us. Reserve your table now and indulge in culinary delights.</p>

                    <button class="button">

  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round"        stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                     </svg>

  
                    <div class="text">
                        Book Now
                    </div>

                    </button>
                </div>
                
                
            </div>
        </div>

        {/* <!-- ----------------description of reaturant------------ --> */}
        <section id="description">
            <div class="description-content">
                <h2>Welcome to Food and Roof</h2>
                <p>At <strong>Food and Roof</strong>, we believe in providing an unforgettable dining experience that celebrates the richness of Indian cuisine. Whether you're here for a special occasion or a casual meal, we offer a range of delectable dishes that are made with the freshest ingredients, expertly crafted by our world-class chefs.</p>
        
                <h3>Delicious Indian Cuisine</h3>
                <p>Our menu is a celebration of India's diverse culinary heritage, offering a wide range of starters, main courses, desserts, and beverages. From the creamy richness of Butter Chicken to the tangy flavors of Chole Bhature, every dish is a masterpiece crafted with passion and precision.</p>
        
                <h3>Online Table Booking</h3>
                <p>Reserve your table from the comfort of your home with our easy-to-use online booking system. Whether you're planning a romantic dinner, a family gathering, or a corporate event, we ensure that every detail is taken care of for you to enjoy a hassle-free experience.</p>
        
                <h3>World-Class Chefs</h3>
                <p>Our team of world-class chefs brings years of expertise and innovation to every dish. Trained in the finest kitchens and passionate about the art of cooking, they create dishes that delight both the eyes and the taste buds. At <strong>Food and Roof</strong>, you can be sure that you're enjoying the best of both traditional and contemporary Indian flavors.</p>
                
                <div class="cta-button">
                    <a href="/book-table" class="button">Book Your Table Now</a>
                </div>
            </div>
        </section>
         

        </>
    )
}


export default Home;