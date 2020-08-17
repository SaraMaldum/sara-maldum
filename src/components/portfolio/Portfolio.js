import React from 'react';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import Heading3 from '../layout/headings/Heading3';
import projects from '../../constants/projects';
import styled from 'styled-components';



function Portfolio() {
    return (
        <>
            <Heading1>Portfolio</Heading1>
            <div>
                <Heading2>School projects</Heading2>
                {projects.map((project, index) => 
                    <div key={index} className="col-md-6">
                        <Heading3>{project.name}</Heading3>
                        <a href={project.link} className="project__link"><img src={require("../../images/got.jpg")} /></a>   
                    </div>
                )}
            </div>
        </>
    )
}

export default Portfolio;