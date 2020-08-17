import React from 'react';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import Heading3 from '../layout/headings/Heading3';
import projects from '../../constants/projects';

function Portfolio() {
    return (
        <>
            <Heading1>Portfolio</Heading1>
            <div>
                <Heading2>School projects</Heading2>
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