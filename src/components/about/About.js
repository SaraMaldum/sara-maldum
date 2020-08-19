import React from 'react'
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import Heading3 from '../layout/headings/Heading3';
import Info from '../layout/info/Infotxt';
import StyledLink from '../layout/Link';
import Container from 'react-bootstrap/Container';
import Btn from '../layout/button/ProjectButton';

function About() {
    return (
        <>
            <Container className="container">
                <Btn />
                <Heading1>About me</Heading1>
                <Heading2>Who am I?</Heading2>
                <Info>I'm a perfectionist who likes to keep things organized. Learning, developing and challenging myself is fun and interesting.
                I like to see where I can push myself to learn even more. I find it rewarding to help, work and understand other people.
                And likewise with programming. At first you might not understand or know a person or code that well, but if you open up and spend some
                    time to get to know them, eventually you'll get a deeper insight and understanding on how to solve problems with or for that person.</Info>


                <Info>I know I have much more to learn as a front-end developer. But I see how much I've learned the last two years at Noroff, and I believe that my work
                experience combined with my bachelors in marketing will help me understand the customer better. I have the passion, curiostiy and
                    willingness to learn.</Info>

                <Heading3>Facts</Heading3>
                <Info>I'm 28 years old, live in Jessheim, two kids, engaged to an army officer, two dogs (chihuahua and finnish lapdog), dancer, clumsy, organized.</Info>
                <Info>Please take a look at my <StyledLink to="/Portfolio">school projects</StyledLink> to see my work, and my <StyledLink to="/Resume"> resumè </StyledLink>to see my skills list, education and work experience.</Info>
                <Info>If you have any questions or see that I can be a part of your team, please contact me by email or phone. I would love to hear from you!</Info>
            </Container>
        </>
    )
}

export default About;