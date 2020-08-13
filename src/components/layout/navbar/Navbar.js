import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import Home from '../../home/Home';
import Portfolio from '../../portfolio/Portfolio';
import Resume from '../../resume/Resume';
import About from '../../about/About';
import logo from '../../../images/smLogo.png';
import styled from 'styled-components';
import Heading1 from '../../layout/headings/Heading1';
import Sara from '../../../images/smaldum.png'

//Styles components
const StyledNavbar = styled(Navbar)`   
        background-image: linear-gradient(-45deg, #10CCAC, #720073);
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
        position: relative;
        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
        height: 200px;
        border-radius: 0;
`

const StyledLink = styled(NavLink)`
    color: white;
    padding: 10px;
    text-transform: uppercase;
    
    &:hover {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
`;

const style = {
    fontWeight: 'bold'
}

const Logo = styled.img`
    width: 90px;
    margin-top: 10px;
`

//Navbar function
function NavBar() {
    return (
        <Router>
            <StyledNavbar variant="light" expand="lg">
                <NavLink to="/">
                    <Navbar.Brand><Logo src={logo} alt="logo" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <StyledLink to="/" activeStyle={style} exact>
                            Home
                        </StyledLink>
                        <StyledLink to="/portfolio/" activeStyle={style} >
                            Portfolio
                        </StyledLink>
                        <StyledLink to="/resume/" activeStyle={style} >
                            Resume
                        </StyledLink>
                        <StyledLink to="/about/" activeStyle={style} >
                            About me
                        </StyledLink>
                    </Nav>
                </Navbar.Collapse>
                <Heading1>Sara Maldum</Heading1>
            </StyledNavbar>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/resume" exact component={Resume} />
                <Route path="/about" exact component={About} />
            </Switch>
        </Router>
    )
}

export default NavBar;
