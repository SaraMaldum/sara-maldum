import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Btn = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    border: 3px solid #10CCAC;
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    width: 150px;
    margin: 10px;
    text-transform: uppercase;
    justify-content: center;
    display: flex;
    background-color: ${({theme}) => theme.colors.blueGreen};
    font-size: 18px;
    font-weight: bold;

    &:hover {
        color: ${({theme}) => theme.colors.white};
        text-decoration: none;
        transition: .4s;
        background-color: ${({theme}) => theme.colors.darkPurple};
        border: 3px solid #2D0431;

    } 
`

function ProjectButton() {
    return( 
        <Btn to="/Portfolio" className="ml-auto">My projects</Btn>
    )
}

export default ProjectButton;