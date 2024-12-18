import React from "react";

function SectionHeader({icon: Icon,title}){
    return(
        <div className="section-header">
            <Icon className="icon" />
            <h2>{title}</h2>
        </div>
    );
}

export default SectionHeader;