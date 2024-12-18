import React, { useState } from "react";
import Navbar from "../Navbar/navBar";
import Footer from "../Footer/footerPage";
import { Mail, Phone } from 'lucide-react';
import '../Styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzDvTfUoEnAG0z9k-3nLWnCJeOihmAmc30_0U4vr69g3vhmP_27qRO8FznngonFzzVs/exec'; // Replace with the actual URL of your Google Apps Script
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });

            const result = await response.json();
            if (result.result === 'success') {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Message failed to send. Please try again later.');
            }
        } catch (error) {
            console.error('Error Occurred: ' + error);
            setStatus('An Error Occurred.');
        }
    };

    return (
        <div className="contact-container">
            <Navbar />
            <div className="contact-body">
                <h2>Get In Touch</h2>
                <div className="main-content">
                    <div className="form">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Please leave a message</h3>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email ID"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                        {status && <p>{status}</p>}
                    </div>
                    <div className="contact-details">
                        <h3>Contact Me</h3>
                        <p>
                            <Mail className="icon" /> <a href="mailto:shrikrishnaprasad44@gmail.com">shrikrishnaprasad44@gmail.com</a>
                        </p>
                        <p>
                            <Phone className="icon" /> +91 8197479894
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
