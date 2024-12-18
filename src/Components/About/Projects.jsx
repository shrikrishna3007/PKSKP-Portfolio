import React, {useState} from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FolderCode } from 'lucide-react';

const TimeLineItem = ({ duration, title, type, location, description }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-content">
                <div className="timeline-left">
                    <h2>{title}</h2>
                    <p>{type}</p>
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

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="work-timeline">
            <div className="work-experience-header" onClick={() => setIsOpen(!isOpen)}>
                <SectionHeader 
                    icon={FolderCode} 
                    title="Projects" 
                />
                <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className="timeline-items">
                    <TimeLineItem
                        duration="June 2022 - July 2023"
                        title="Host Machine Underload Detection In Cloud Data Center"
                        type="Domain Knowledge Project"
                        location="Mangaluru, Karnataka, India"
                        description={[
                            "Developed and maintained applications using Spring Boot and Java.",
                            "Applied Agile principles for development.",
                        ]}
                    />
                    <TimeLineItem
                        duration="June 2021 - October 2021"
                        title="Sports Management System"
                        type="Web Development"
                        location="Puttur, Karnataka, India"
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

export default Projects;