import React from "react";
import '../Styles/ServiceDescription.css';

const ServiceDetails = ({ showDetails, onClose }) => {
  if (!showDetails) return null;

  const serviceDescriptions = {
    frontendDevelopment: "Specializing in building interactive and responsive user interfaces using client-side technologies like HTML, CSS, and JavaScript. Experienced in modern frontend frameworks such as React.js to create dynamic web applications that are user-friendly and visually appealing.",
    backendDevelopment: "Proficient in server-side programming and API development, with expertise in Java and Spring Boot. Skilled in using related technologies such as Spring Data, Spring Security, and Spring REST to build robust and scalable server-side applications. Experienced in unit testing with frameworks like JUnit and Mockito. Exposure to Microservices Architecture for building distributed, maintainable systems.",
    fullStackDevelopment: "Combining frontend and backend expertise to develop complete, functional web applications. Experienced in both client-side and server-side development, including API integration and data handling to deliver seamless user experiences.",
    databaseManagement: "Experienced in designing and managing MySQL databases, including database schema design and query writing. Knowledgeable in relational databases like MySQL and has basic exposure to PostgreSQL. Also experienced in working with NoSQL databases like MongoDB and its integration into applications, focusing on efficient data access and ensuring data integrity through best practices.",
    designAndTesting: "Skilled in designing and testing REST APIs using tools like Postman for API testing and documentation, as well as Swagger for documenting APIs in Spring Boot applications. Knowledgeable in ensuring API quality through proper design, testing, and maintaining clear documentation for smooth integration and functionality."
  };

  const capitalizeWords = (service) => {
    const smallWords = ['and', 'or', 'the', 'of', 'in', 'to', 'for', 'with', 'on'];
    return service
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase into separate words
    .split(' ') // Split by space
    .map((word, index) => {
      // Capitalize first word and proper nouns, leave small words lowercase
      if (index === 0 || !smallWords.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase(); // Keep small words in lowercase
    })
    .join(' ');
  };

  return (
    <div className="service-details-container">
        <h3>Service Description</h3>
        {Object.keys(serviceDescriptions).map((service, index) => (
            <div key={index} className="service-item-box">
                <div className="service-item">
                    <h4>{capitalizeWords(service)}</h4>
                    <p>{serviceDescriptions[service]}</p>
                </div>
            </div>
        ))}
      <button onClick={onClose} className="close-btn">Close</button>
    </div>
  );
};

export default ServiceDetails;
