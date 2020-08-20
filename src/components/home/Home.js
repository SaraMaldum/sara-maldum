import React from "react";
import Info from '../layout/info/Infotxt';
import Heading1 from '../layout/headings/Heading1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Btn from '../layout/button/ProjectButton';
import StyledLink from '../layout/Link';
import Sara from '../../images/smaldum.png';
import styled from 'styled-components';

const BgCol = styled(Col)`
    &.imgSara {
        background-image: url(${Sara});
        background-repeat: no-repeat;
        background-position: center center;
        background-blend-mode: 50px;
        background-size: 190px;
    }  
`

function Home() {
    return (
        <>
            <Container>
                <Btn />
                <Heading1>Sara Maldum</Heading1>
                <Row>
                    <Col md={8} >
                        <Info>I'm a 28 year old front-end development student, graduating October 2020. I'm based in Jessheim, Norway.</Info>
                        <Info>My previous work experience are mainly sales and customer service, which I liked, as I got to work with people.
                        I like to understand other peoples perspectives, see their needs and help them achieve those thoughts and goals.
                        These are qualities I always want to evolve and make use of as I'm turning into a great front-end developer.
                        I have a passion to create and solve problems, and therefore I know I'll be a good developer.
                        I am currently in training and loving it!</Info>
                    </Col>
                    <BgCol md={4} className="imgSara">
                    </BgCol>
                </Row>
                <Info>Please take a look at my <StyledLink to="/Portfolio">school projects</StyledLink> to see my work, and my <StyledLink to="/Resume"> resumè </StyledLink>to see my skills list, education and work experience.</Info>

                <Info>If you have any questions or see that I can be a part of your team, please contact me by email or phone. I would love to hear from you!</Info>
            </Container>
        </>
    );
}

export default Home;