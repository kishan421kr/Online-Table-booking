const Contact=()=>{
    return(
        <>
            <div id="contact">
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@bookmytable.com">info@bookmytable.com</a></p>
                    <p><strong>Address:</strong> 1234 Restaurant St, City, Country</p>
                    <p><strong>Follow Us:</strong> 
                        <a href="https://facebook.com/restaurant">Facebook</a> | 
                        <a href="https://instagram.com/restaurant">Instagram</a>
                    </p>
                </div>
        
                {/* <div className="contact-form">
                    <h3>Send Us a Message</h3>
                    <form >
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
            
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
            
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
            
                        <button type="submit">Submit</button>
                    </form>
                </div> */}
        
            </div>
        </>
    )
}
export default Contact