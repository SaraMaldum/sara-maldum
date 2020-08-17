import React from 'react';
import Heading1 from '../layout/headings/Heading1';
import projects from '../../constants/projects';
import Heading3 from '../layout/headings/Heading3';

function Portfolio() {
    return (
        <>
            <Heading1>Portfolio</Heading1>
            <div>
                {projects.map((project, index) => 
                    <div key={index} className="col-md-6">
                        <Heading3>{project.name}</Heading3>
                        <a href={project.link}><img src={project.image} alt="Image of home page of school project"/></a>   
                    </div>
                )}
            </div>
        </>
    )
}

export default Portfolio;