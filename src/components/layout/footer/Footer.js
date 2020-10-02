import React from 'react';
import styled from 'styled-components';
import {HiOutlinePhone} from 'react-icons/hi';
import {HiOutlineMail} from 'react-icons/hi';

//Styled components
const StyledFooter = styled.footer`
    color: ${({ theme }) => theme.colors.white};
    background-color: #2D0431;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
`;

const A = styled.a`
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        color: ${({ theme }) => theme.colors.hoverGreen};
        text-decoration: none;
        font-weight: bold;
    }
`

const ListItem = styled.li`
    list-style-type: none;
    text-align: center;
    padding-top: 5px;

    &.copy {
        margin-top: 15px;
    }
`

//Footer function
function Footer() {
    return (
        <>
            <StyledFooter>
                <ul>
                    <ListItem>
                        <A href="mailto: saramaldum@hotmail.com"><HiOutlineMail /> sara.maldum@gmail.com</A>
                    </ListItem>
                    <ListItem>
                        <A href="tel:+4794031832"><HiOutlinePhone /> +47 94 03 18 32</A>
                    </ListItem>
                    <ListItem className="copy">
                        &copy; Sara Maldum
                    </ListItem>
                </ul>
            </StyledFooter>
        </>
    )
}

export default Footer;