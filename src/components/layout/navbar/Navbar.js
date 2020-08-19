import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
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
    border-radius: 0;
    margin-bottom: 20px;
    min-height: 80px;
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
    color: ${({ theme }) => theme.colors.white};
    padding: 10px 15px;
    text-transform: uppercase;
    border-bottom: 1px solid white;
    
    &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.hoverGreen};
        font-weight: bold;
        border-bottom: 1px solid #B9EFEA;
    }
`;

const style = {
    fontWeight: 'bold',
    borderBottom: '3px solid white',
}

const Logo = styled.img`
    width: 100px;

    &:hover {
        width: 106px;
        transition: .3s;
        filter: drop-shadow(5px 5px 5px #302E34); 
    }
`

//Navbar function
function NavBar() {
    return (
        <Router>
            <StyledNavbar variant="dark" expand="lg">
                <Container fluid>
                    <NavLink to="/">
                        <Navbar.Brand className="mr-auto"><Logo src={logo} alt="logo" /></Navbar.Brand>
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
                                Resumè
                        </StyledLink>
                            <StyledLink to="/about/" activeStyle={style} >
                                About me
                        </StyledLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
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
