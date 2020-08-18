import React from 'react'
import Heading2 from '../layout/headings/Heading2';
import Heading3 from '../layout/headings/Heading3';
import Info from '../layout/info/Infotxt';

function About() {
    return (
        <>
            <div className="container">
                <Heading2>Who am I?</Heading2>
                <Info>I love learning new things, developing my own knowledge and challenge my self. I find it rewarding to help, work and understand new people. And likewise with programming. Some things you don't understand at first, but if you really open up and spend some time to get to know them, eventually you'll love them. And others you connect with instantly.</Info>
                <Info>I know I have a long way to go, as I don't have that much previous experience because I've mainly worked in customer service and sales. But I believe that my experience combined with my bachelors in marketing will help me understand the customer better. I have the passion, curiostiy and willingness to learn.</Info>

                <Heading3>Facts</Heading3>
                <Info>I'm 28 years old, live in Bardufoss (soon Jessheim), two kids, engaged to a army officer, two dogs (chihuahua and finnish lapdog), dancer, clumsy, organized.</Info>
                <Info>Please take a look at my school projects to see my work, and my resumè to see my skills list, education and work experience.</Info>
                <Info>If you have any questions or see that I can be a part of your team, please contact me by email or phone. I would love to hear from you!</Info>
            </div>
        </>
    )
}

export default About;