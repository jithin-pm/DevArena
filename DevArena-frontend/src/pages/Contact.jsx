import React, { useState } from 'react'
import '../styles/contact.css'
import { sendContactMessageApi } from '../services/allApi';

function Contact() {

    const [contactFormData, setContactFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: ""
    })

    const sendContactMessage = async (e) => {
        e.preventDefault();
        console.log(contactFormData);
        const { fullName, phoneNumber, email, message } = contactFormData;
        if (!fullName || !phoneNumber || !email || !message) {
            alert("Please fill all the fields");
        }

        try {
            const result = await sendContactMessageApi(contactFormData);
            if (result.status === 200) {
                alert("Thanks for reaching out! We'll get back to you soon.");
                setContactFormData({ fullName: "", phoneNumber: "", email: "", message: "" });
            } else {
                alert("Message sending failed. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong. Please try again later.");
            console.error(error);
        }
    };


    return (
        <div className='contact-main' >
            <div className='contact-heading' >
                <h1>Get in Touch & Join the Adventure</h1>
            </div>

            <div className='contact-section'>

                {/*   left contact details section */}
                <div className='contact-text-section' >
                    <div className='contact-text-logo'>
                        <i className="fa-brands fa-connectdevelop fa-2xl"></i>
                        <h1>DevArena</h1>
                    </div>
                    <div className='contact-adresses' >
                        <h4>Adress : <span> Lorem ipsum dolor sit amet consectetur</span></h4>
                        <h4>Pin Code :<span> 78907</span></h4>
                        <h4>Phone Number :<span> 91+ 7560844748</span></h4>
                        <h4>Email : <span> devarena.official@gmail.com</span></h4>
                        <h4>Hours : <span> 9 Am to 5 Pm</span></h4>
                    </div>
                    <div className='map-container' >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61282.84959268708!2d76.8870904568365!3d8.594991406286143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05befbad688f91%3A0x58e8fb83cf5ddf6a!2sTechnopark%20Trivandrum!5e0!3m2!1sen!2sin!4v1752853945404!5m2!1sen!2sin"
                            width="500" height="220" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                {/* right contact form section */}
                <div className='contact-card-section'>
                    <h2>Contact Us</h2>
                    <form className='contact-form'>
                        <input
                            className='contact-form-inputs'
                            type="text"
                            placeholder='Full Name'
                            value={contactFormData.fullName}
                            onChange={(e) => setContactFormData({ ...contactFormData, fullName: e.target.value })}
                        />

                        <input
                            className='contact-form-inputs'
                            type="text"
                            placeholder='Email'
                            value={contactFormData.email}
                            onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                        />

                        <input
                            className='contact-form-inputs'
                            type="text"
                            placeholder='Phone Number'
                            value={contactFormData.phoneNumber}
                            onChange={(e) => setContactFormData({ ...contactFormData, phoneNumber: e.target.value })}
                        />

                        <textarea
                            className='contact-form-inputs'
                            placeholder='Message'
                            value={contactFormData.message}
                            onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                        ></textarea>

                        <div className='contact-btn' onClick={sendContactMessage}>
                            Send message
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
