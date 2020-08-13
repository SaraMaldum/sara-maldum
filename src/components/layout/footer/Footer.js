import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    color: white;
    font-weight: bold;
    background-color: #2D0431;
    padding: 10px;
    border-radius: 0;
    display: flex;
    margin-top: auto;
    justify-content: center;
    flex-shrink: 0;
`;

const A = styled.a`
    color: white;
    padding: 10px;

    &:hover {
        color: white;
        text-decoration: none;
        font-style: italic;
    }
`

function Footer() {
    return(
        <StyledFooter>
            <A href="mailto: saramaldum@hotmail.com" className="footer__link">E: sara.maldum@gmail.com</A>
            <A href="tel:+4794031832" className="footer__link">T: +47 94 03 18 32</A>
            <p className="footer__copyright">&copy; Sara Maldum</p>
        </StyledFooter>
    )
}

export default Footer;