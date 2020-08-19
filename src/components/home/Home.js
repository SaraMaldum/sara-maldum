import React from "react";
import Info from '../layout/info/Infotxt';
import {Link} from 'react-router-dom';
import Heading1 from '../layout/headings/Heading1';

function Home() {
    return (
        <>
            <div className="container">
                <Heading1>Sara Maldum</Heading1>
                <Info>I'm Sara Maldum, a 28 year old front-end development student, graduating October 2020. I'm based in Jessheim.</Info>
                <Info>My previous work experience have mainly been in sales and customer service, which I liked since I got to work with people. I like to understand other peoples perspectives, see their needs and help them achieve those thoughts and goals. These are qualities I always want to evolve and make use of as I'm turning into a great front-end developer. I have a passion to create and solve problems, and therefore I know I'll be a good developer. I am currently in training and loving it!</Info>
                <Info>Please take a look at my <Link to="/Portfolio">school projects</Link> to see my work, and my <Link to="/Resume"> resumè </Link>to see my skills list, education and work experience.</Info>
                <Info>If you have any questions or see that I can be a part of your team, please contact me by email or phone. I would love to hear from you!</Info>
            </div>
        </>
    );
}

export default Home;