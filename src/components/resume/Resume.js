import React from 'react';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';

function Resume() {
    return (
        <>
        <Heading1>Resumé</Heading1>
        <div class="col-sm-4 resumeHeading">
            <Heading2>Skills</Heading2>
        </div>
        <div class="col-sm-8 resumeList">
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SCSS/SASS</li>
                <li>Bootstrap</li>
                <li>BEM Methodology</li>
                <li>Adobe XD</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Team work</li>
                <li>Customer service</li>
                <li>Sales</li>
            </ul>
        </div>

        <div class="col-sm-4 resumeHeading">
            <Heading2>Education</Heading2>
        </div>
        <div class="col-sm-8 resumeList">
            <div>
                <h3>Noroff - school of technology and digital media</h3>
                <p class="year">Front-end development - 2018-2020</p>
                <p class="resumeInfo">Two year study, where I've learned and will learn about how visual
                design meets coding,
                                web and UX-design.</p>
            </div>
            <div>
                <h3>Markedshøyskolen</h3>
                <p class="year">Marketing - 2010-2013</p>
                <p class="resumeInfo">Bachelors degree in marketing. This gave me a wide understanding of
                the market and how
                the customer affects decisions. How should we communicate and work together with other
                businesses or customers. And I've learned how to work in a team and how to build
                                relations. </p>
            </div>
            <div>
                <h3>Bjertnes High School</h3>
                <p class="year">General studies - 2007-2010</p>
                <p class="resumeInfo">High school educations which gave me general study. </p>
            </div>
        </div>

        <div class="col-sm-4 resumeHeading">
            <Heading2>Work Experience</Heading2>
        </div>
        <div class="col-sm-8 resumeList">
            <div>
                <h3>TNT Express</h3>
                <p class="year">Indoor sales - 2016-2017</p>
                <p class="resumeInfo">My job was to contact existing costumers and maintain the relations
                with them, but also
                to create new customer relations. The contact was made over phone or email. I booked
                meetings for the other salesperson in my team and signed my own deals over the phone.
                            </p>
            </div>
            <div>
                <h3>TNT Express</h3>
                <p class="year">Customer Service - 2014-2016</p>
                <p class="resumeInfo">I answered the phone and email that customers sent. I also booked
                import and export of
                                packages, these inquiries was made over phone, email og TNT's booking systems. </p>
            </div>
            <div>
                <h3>XXL Sport&Villmark</h3>
                <p class="year">Customer Service</p>
                <p class="resumeInfo">I answered inquiries over email from customers, informed them of
                delays and shortages. I
                                always double checked that customer got refunded after return of products. </p>
            </div>
            <div>
                <h3>XXL Sport&Villmark</h3>
                <p class="year">Sales in shoes and textile department - 2012-2014</p>
                <p class="resumeInfo">As a sales person I guided and helped customers to find correct shoes
                to their needs, and
                to help them prevent injuries. And I helped them find the proper clothes to their use.
                            </p>
            </div>
            <div>
                <h3>Norsk Resirk AS</h3>
                <p class="year">Warehouse employee - 2012</p>
                <p class="resumeInfo">As a warehouse employee I handled an industrial container-deposit.</p>
            </div>
            <div>
                <h3>Snask Storkiosk Nittedal</h3>
                <p class="year">Sales - 2010-2012</p>
                <p class="resumeInfo">I sold groceries, and "norsk tipping" and "Rikstoto". I opened and
                closed the kiosk and
                                worked both alone and as a team.</p>
            </div>
            <div>
                <h3>Peppes Pizza, dep. Nittedal</h3>
                <p class="year">Shift team leader and waitress - 2008-2010</p>
                <p class="resumeInfo">I started as a waitress in the restaurant, and then I worked my way up
                to having the
                responsibility of the shift I was working. I opened and closed the restaurant and had to
                                control the money at end of each shift.</p>
            </div>
        </div>
        </>
    )
}

export default Resume; 