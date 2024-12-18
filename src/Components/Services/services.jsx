import React, {useState} from "react";
import '../Styles/services.css';
import Navbar from "../Navbar/navBar";
import Footer from "../Footer/footerPage";
import ServiceDetails from "./ServiceDescription";

function Services(){
    const [showDetails, setShowDetails] = useState(false);
    const handleToggleDetails = () =>{
        setShowDetails(!showDetails);
    };

    return(
        <div className="service-container">
            <Navbar/>
            <div className="service-body">
                <h2>My Services</h2>
                <div className="images-container">
                    <div className="card">
                        <img src="/images/front-end_8099473.png" alt="Frontend" className="card-img"/>
                        <div className="card-content">
                            <p>Frontend Development</p>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="/images/programming.png" alt="Backend" className="card-img"/>
                        <div className="card-content">
                            <p>Backend Development</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/fullstack-service.png" alt="Fullstack" className="card-img"/>
                        <div className="card-content">
                            <p>Full-Stack Development</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/database-management.png" alt="Testing" className="card-img"/>
                        <div className="card-content">
                            <p>Database Management</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/api-development.png" alt="Version-control" className="card-img"/>
                        <div className="card-content">
                            <p>Design and Testing</p>
                        </div>
                    </div>
                </div>
                <button className="btn" onClick={handleToggleDetails}>
                    {showDetails ? "Show Less" : "Read More"}
                </button>
                {/* conditionally render service description */}
                <ServiceDetails showDetails={showDetails} onClose={handleToggleDetails} />
            </div>
            <Footer/>
        </div>
    );

};

export default Services;