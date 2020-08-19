import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from 'react-router-dom';
import Button from "react-bootstrap/Button";
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
    text-align: center;
    border-radius: 0;
    min-height: 200px;
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
    width: 80px;
`

const NavbarTxt = styled.p`
    text-align: center;
    color: ${function (props) {
        return props.theme.colors.white;
    }};
    margin: 40px 0 20px 0;
    font-family: 'Josefin Slab', serif;
    font-size: 24px;
`

const Btn = styled(Link)`
    color: ${function (props) {
        return props.theme.colors.white;
    }};
    border: 1px solid $white;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    text-decoration: none;
    box-shadow: 0px 0px 10px rgba(255,255,255,.5);
    width: 40%;
    &:hover {
        color: ${function (props) {
        return props.theme.colors.darkPurple;
    }};
        text-decoration: none;
        font-weight: bold;
        transition: .3s;
        background-color: rgba(255,255,255,.5);
    } 
`
//Navbar function
function NavBar() {
    return (
        <Router>
            <StyledNavbar variant="dark" expand="lg">
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
                <div className="heading__info">
                    <NavbarTxt>Interested, organized and eager to learn</NavbarTxt>
                    <Btn to="/Portfolio">My projects</Btn>
                </div>
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
