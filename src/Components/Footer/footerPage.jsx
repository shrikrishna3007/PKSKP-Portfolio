import React from "react";
import '../Styles/footer.css';
import { Mail, Phone, MapPin } from 'lucide-react'; // Importing relevant icons

function Footer() {
  return (
    <footer className="footer">
        <div class="footer-content">
            <div class="contact-box">
                <h2>Reach Out</h2>
                <p>
                    <Mail className="icon" /> <a href="mailto:shrikrishnaprasad44@gmail.com">shrikrishnaprasad44@gmail.com</a>
                </p>
                <p>
                    <Phone className="icon" /> +91 8197479894
                </p>
                <p>
                    <MapPin className="icon" /> 
                    #1-164(4), Kademar House, Kurnad Post<br /> 
                    Bantwal Taluk, Dakshina Kannada<br />
                    Mangaluru, Karnataka, India<br />
                    574153
                </p>
                {/* <p>Please contact me about your projects or opportunities.</p> */}
            </div>
            <div class="social-links">
                <h2>Connect with Me</h2>
                <a href="https://github.com/shrikrishna3007">
                    <img src="/images/icons8-github-48.png" alt="GitHub Logo"/>
                </a>
                <a href="https://www.linkedin.com/in/p-k-shrikrishna-prasad-89aa57256">
                    <img src="\images\icons8-linkedin-48.png" alt="LinkedIn Logo"/>
                </a>
            </div>
        </div>
        <div class="copy-rights">
            <p>&copy; 2024 P K Shrikrishna Prasad. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
