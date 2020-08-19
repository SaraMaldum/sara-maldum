import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarTxt = styled.p`
    color: ${({theme}) => theme.colors.white};
    margin: 10px;
    font-family: 'Josefin Slab', serif;
    font-size: 24px;
`

const Btn = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    border: 1px solid $white;
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    box-shadow: 0px 0px 10px rgba(255,255,255,.5);
    width: 40%;

    &:hover {
        color: ${({theme}) => theme.colors.darkPurple};
        text-decoration: none;
        font-weight: bold;
        transition: .3s;
        background-color: rgba(255,255,255,.5);
    } 
`

function Header() {
    return (
        <>
            <NavbarTxt classa>Interested, organized and eager to learn</NavbarTxt>
        </>

    )
}

export default Header;