import React from "react";
import Navbar from "../Navbar/navBar";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FileText  } from 'lucide-react';
import '../Styles/about.css';
import Footer from "../Footer/footerPage";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Projects from "./Projects";

function About() {
    return(
        <div className="about-container">
            <Navbar />
            <div className="about-body">
                <div className="about">
                    <SectionHeader 
                        icon={FileText  } 
                        title="Professional Overview" 
                    />
                    <p>
                    Driven and ambitious Java developer with one year of experience creating scalable, efficient applications using Java and Spring Boot. 
                    Skilled in designing and developing resilient, maintainable software with a solid grasp of object-oriented programming principles. 
                    Experienced in full-stack development, crafting user-friendly interfaces with HTML, CSS, and JavaScript, while ensuring smooth integration with backend systems. 
                    Known for strong teamwork and collaboration skills, I thrive in collaborative environments, consistently contributing to team success and effectively communicating with peers to achieve project goals.
                    </p>
                </div>
                <WorkExperience /> 
                <Education />
                <Projects />
            </div>
            <Footer />
        </div>
    )
}

export default About;