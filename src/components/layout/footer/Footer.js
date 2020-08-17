import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    
    color: ${function (props) {
        return props.theme.colors.white;
    }};
    background-color: #2D0431;
    padding: 10px;
    border-radius: 0;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    padding: 20px;
`;

const A = styled.a`
    color: ${function (props) {
        return props.theme.colors.white;
    }};
    padding-right: 20px;
    margin-bottom: 10px;

    &:hover {
        color: ${function (props) {
        return props.theme.colors.white;
    }};
        text-decoration: none;
        font-weight: bold;
    }
`

function Footer() {
    return (
        <>
            <StyledFooter>
                <A href="mailto: saramaldum@hotmail.com">Email: sara.maldum@gmail.com</A>
                <A href="tel:+4794031832">Phone: +47 94 03 18 32</A>
                <p>&copy; Sara Maldum</p>
            </StyledFooter>
        </>
    )
}

export default Footer;