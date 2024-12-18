import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { GraduationCap   } from 'lucide-react';

const TimeLineItem = ({ duration, degree, collegename, location, description }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-content">
                <div className="timeline-left">
                    <h2>{degree}</h2>
                    <p>{collegename}</p>
                    <ul className="description">
                        {description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="timeline-right">
                    <h3>{duration}</h3>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

const Education = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="work-timeline">
            <div className="work-experience-header" onClick={() => setIsOpen(!isOpen)}>
                <SectionHeader 
                    icon={GraduationCap} 
                    title="Education" 
                />
                <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className="timeline-items">
                    <TimeLineItem
                        duration="February 2022 - August 2023"
                        degree="MSc"
                        collegename="iHub IT Solutions"
                        location="Mangaluru, Karnataka, India"
                        description={[
                            "Developed and maintained applications using Spring Boot and Java.",
                            "Applied Agile principles for development.",
                        ]}
                    />
                    <TimeLineItem
                        duration="April 2023 - October 2023"
                        degree="Full Stack Developer Intern"
                        collegename="iHub IT Solutions"
                        location="Mangaluru, Karnataka, India"
                        description={[
                            "Developed and maintained applications using Spring Boot and Java.",
                            "Applied Agile principles for development.",
                        ]}
                    />
                </div>
            )}
        </div>
    );
};

export default Education;