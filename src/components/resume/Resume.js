import React from 'react';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import Heading3 from '../layout/headings/Heading3';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Btn from '../layout/button/ProjectButton';

const ResumeList = styled(Col)`
    &.resumeList {
        border-left: 2px solid #2D0431;
        margin-bottom: 20px;
    }
`
const ResumeH3 = styled(Heading3)`
    text-align: left;
` 

function Resume() {
    return (
        <>
            <Container>
            <Btn />
            <Heading1>Resumé</Heading1>
                <Row>
                    <Col sm={4}>
                        <Heading2>Skills</Heading2>
                    </Col>
                    <ResumeList sm={8} className="resumeList">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>SCSS/SASS</li>
                            <li>Bootstrap</li>
                            <li>BEM Methodology</li>
                            <li>React</li>
                            <li>Adobe XD</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Team work</li>
                            <li>Customer service</li>
                            <li>Sales</li>
                        </ul>
                    </ResumeList>

                    <Col sm={4}>
                        <Heading2>Education</Heading2>
                    </Col>
                    <ResumeList sm={8} className="resumeList">
                        <Col>
                            <ResumeH3>Noroff - school of technology and digital media</ResumeH3>
                            <p className="year">Front-end development - 2018-2020</p>
                            <p className="resumeInfo">Two year study, where I've learned and will learn about how visual
                            design meets coding,
                                web and UX-design.</p>
                        </Col>
                        <Col>
                            <ResumeH3>Markedshøyskolen</ResumeH3>
                            <p className="year">Marketing - 2010-2013</p>
                            <p className="resumeInfo">Bachelors degree in marketing. This gave me a wide understanding of
                            the market and how
                            the customer affects decisions. How should we communicate and work together with other
                            businesses or customers. And I've learned how to work in a team and how to build
                                relations. </p>
                        </Col>
                        <Col>
                            <ResumeH3>Bjertnes High School</ResumeH3>
                            <p className="year">General studies - 2007-2010</p>
                            <p className="resumeInfo">High school educations which gave me general study. </p>
                        </Col>
                    </ResumeList>

                    <Col sm={4}>
                        <Heading2>Work Experience</Heading2>
                    </Col>
                    <ResumeList sm={8} className="resumeList">
                        <Col>
                            <ResumeH3>TNT Express</ResumeH3>
                            <p className="year">Indoor sales - 2016-2017</p>
                            <p className="resumeInfo">My job was to contact existing costumers and maintain the relations
                            with them, but also
                            to create new customer relations. The contact was made over phone or email. I booked
                            meetings for the other salesperson in my team and signed my own deals over the phone.
                            </p>
                        </Col>
                        <Col>
                            <ResumeH3>TNT Express</ResumeH3>
                            <p className="year">Customer Service - 2014-2016</p>
                            <p className="resumeInfo">I answered the phone and email that customers sent. I also booked
                            import and export of
                                packages, these inquiries was made over phone, email og TNT's booking systems. </p>
                        </Col>
                        <Col>
                            <ResumeH3>XXL Sport&Villmark</ResumeH3>
                            <p className="year">Customer Service</p>
                            <p className="resumeInfo">I answered inquiries over email from customers, informed them of
                            delays and shortages. I
                                always double checked that customer got refunded after return of products. </p>
                        </Col>
                        <Col>
                            <ResumeH3>XXL Sport&Villmark</ResumeH3>
                            <p className="year">Sales in shoes and textile department - 2012-2014</p>
                            <p className="resumeInfo">As a sales person I guided and helped customers to find correct shoes
                            to their needs, and
                            to help them prevent injuries. And I helped them find the proper clothes to their use.
                            </p>
                        </Col>
                        <Col>
                            <ResumeH3>Norsk Resirk AS</ResumeH3>
                            <p className="year">Warehouse employee - 2012</p>
                            <p className="resumeInfo">As a warehouse employee I handled an industrial container-deposit.</p>
                        </Col>
                        <Col>
                            <ResumeH3>Snask Storkiosk Nittedal</ResumeH3>
                            <p className="year">Sales - 2010-2012</p>
                            <p className="resumeInfo">I sold groceries, and "norsk tipping" and "Rikstoto". I opened and
                            closed the kiosk and
                                worked both alone and as a team.</p>
                        </Col>
                        <Col>
                            <ResumeH3>Peppes Pizza, dep. Nittedal</ResumeH3>
                            <p className="year">Shift team leader and waitress - 2008-2010</p>
                            <p className="resumeInfo">I started as a waitress in the restaurant, and then I worked my way up
                            to having the
                            responsibility of the shift I was working. I opened and closed the restaurant and had to
                                control the money at end of each shift.</p>
                        </Col>
                    </ResumeList>
                </Row>
            </Container>
        </>
    )
}

export default Resume; 