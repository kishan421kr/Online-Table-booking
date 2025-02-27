const Footer=()=>{
    return(
        <>
          {/* <div id="footer">
            <h4>www.Doctor Appointment.com</h4>
          </div> */}

<footer>
            <div class="footer-container">
                {/* <!-- Logo and About Section --> */}
                <div class="footer-section about">
                    <img src="logo.png" alt="Restaurant Logo" class="footer-logo"/>
                    <p>Experience exquisite dining with us. Reserve your table now and indulge in culinary delights.</p>
                </div>
        
                {/* <!-- Quick Links --> */}
                <div class="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservation">Book a Table</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
        
                {/* <!-- Contact Information --> */}
                <div class="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Foodie Lane, Gourmet City</p>
                    <p><i class="fas fa-phone-alt"></i> +1 234 567 890</p>
                    <p><i class="fas fa-envelope"></i> reservations@restaurant.com</p>
                </div>
        
                {/* <!-- Opening Hours --> */}
                <div class="footer-section hours">
                    <h3>Opening Hours</h3>
                    <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
                </div>
            </div>
        
            {/* <!-- Footer Bottom --> */}
            <div class="footer-bottom">
                <p>&copy; 2024 Gourmet Restaurant | All Rights Reserved</p>
                <div class="social-media">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </footer>
        
        </>
    )
}


export default Footer;