import React from "react";
import Navbar from "../Navbar/navBar";
import Footer from "../Footer/footerPage";
import '../Styles/home.css';
import { useNavigate } from "react-router-dom";


function Home(){
    const navigate=useNavigate();
    return (
        <div className="portfolio-body">
            <Navbar />
            <section className="portfolio-content">
                <div className="portfolio-text">    
                    <h2>Welcome to my Portfolio</h2>
                    <h1>Hi, I am Shrikrishna Prasad</h1>
                    <h1>Software Developer</h1>
                    <p>
                        I am software developer with one year of experience. Specializes in Java, Spring Boot and other related technologies.
                        Open for Backend Development or Full Stack Development roles.
                    </p>
                    <div className="portfolio-btns">
                        <button className="discover" onClick={()=> navigate('/about')}>Discover</button>
                        <button className="contact" onClick={()=>navigate('/contact')}>Contact</button>
                    </div>
                </div>
                <div className="portfolio-image">
                        <img src="/images/crop2.jpg" alt="profile-pic" />
                </div>
            </section>
            <Footer/>
        </div>
    );
}
export default Home;