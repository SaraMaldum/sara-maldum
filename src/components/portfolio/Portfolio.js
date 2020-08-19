import React from 'react';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import Heading3 from '../layout/headings/Heading3';
import projects from '../../constants/projects';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Styled components
const ProjImg = styled.img`
    width: 100%;
    margin: 10px 0;
    box-shadow: 0px 0px 30px rgba(0,0,0,.4);
    filter: grayscale(100%);
    
    &:hover {
        filter: grayscale(0);
        transition: .5s;
    }
`

//Function of the Portfolio site
function Portfolio() {
    return (
        <>
            <Container>
                <Heading1>Portfolio</Heading1>
                <Heading2>School projects</Heading2>
                <Row>
                    {projects.map((project, index) =>
                        <Col key={index} sm={6}>
                            <Heading3>{project.name}</Heading3>
                            <a href={project.link}><ProjImg src={require("../../images/" + project.image)} alt="School project with direct link" className="project__img" /></a>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default Portfolio;