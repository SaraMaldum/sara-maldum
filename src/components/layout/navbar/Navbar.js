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

//Styles components
const StyledNavbar = styled(Navbar)`   
    filter: drop-shadow(5px 5px 5px rgba(48,46,52,0.5));
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
    color: ${function (props) {
        return props.theme.colors.white;
    }};
    padding: 10px 15px;
    text-transform: uppercase;
    border-bottom: 1px solid white;

    &:hover {
        text-decoration: none;
        color: ${function (props) {
        return props.theme.colors.white;
    }};
        font-weight: bold;
    }
`;

const style = {
    fontWeight: 'bold',
    borderBottom: '3px solid white',
}

const Logo = styled.img`
    width: 90px;
    margin-top: 10px;
`

const NavbarTxt = styled.p`
    text-align: center;
    color: ${function (props) {
        return props.theme.colors.white;
    }};
    margin-top: 70px;
    font-family: 'Josefin Slab', serif;
    font-size: 20px;
` 
//Navbar function
function NavBar() {
    return (
        <Router>
            <StyledNavbar variant="dark" expand="lg">
                <NavLink to="/">
                    <Navbar.Brand><Logo src={logo} alt="logo" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
            <NavbarTxt>Hi there, I'm Sara Maldum, a front-end development student. Always looking learn something new!</NavbarTxt>
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
