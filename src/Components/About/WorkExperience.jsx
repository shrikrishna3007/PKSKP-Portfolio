import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { BriefcaseBusiness   } from 'lucide-react';
import '../Styles/WorkExperience.css';

const TimeLineItem = ({ date, title, companyname, location, description }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-content">
                <div className="timeline-left">
                    <h2>{title}</h2>
                    <p>{companyname}</p>
                    <ul className="description">
                        {description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="timeline-right">
                    <h3>{date}</h3>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

const WorkExperience = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="work-timeline">
            <div className="work-experience-header" onClick={() => setIsOpen(!isOpen)}>
                <SectionHeader 
                    icon={BriefcaseBusiness} 
                    title="Work Experience" 
                />
                <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className="timeline-items">
                    <TimeLineItem
                        date="October 2023 - Present"
                        title="Software Engineer"
                        companyname="iHub IT Solutions"
                        location="Mangaluru, Karnataka, India"
                        description={[
                            "Developed and maintained applications using Spring Boot and Java.",
                            "Applied Agile principles for development.",
                        ]}
                    />
                    <TimeLineItem
                        date="April 2023 - October 2023"
                        title="Full Stack Developer Intern"
                        companyname="iHub IT Solutions"
                        location="Mangaluru, Karnataka, India"
                        description={[
                            "Developed and maintained applications using Spring Boot and Java.",
                            "Applied Agile principles for development.",
                        ]}
                    />
                    {/* Add more TimeLineItem components here as needed */}
                </div>
            )}
        </div>
    );
};

export default WorkExperience;
