import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" className="backgroundImage" variant="light">
            <Container>
            <Navbar.Brand href="/"><img src="https://i.ibb.co/vVWFDz3/Frame-123456.jpg" height="35px" width="94px" alt="" /></Navbar.Brand>
            {/* <img src="https://i.ibb.co/V9FTVxX/bb0fd118d19442faa82fc078bfe7edd7.pnghttps://i.ibb.co/V9FTVxX/bb0fd118d19442faa82fc078bfe7edd7.png" height="37px" width="77px" alt="" /> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                          <Link to="/places" className="nav-link">Places</Link>
                           <Link to="/" className="nav-link">News</Link>
                           <Link to="/" className="nav-link">Blog</Link>
                           <Link to="/" className="nav-link">Contact</Link>
                </Nav>
                <Nav>
                 {localStorage.getItem('user')?<div className="nav-link">{localStorage.getItem('user')}</div>:<Link to="/login" className="nav-link">Login</Link>}
                 {localStorage.getItem('user')?<Link to="/" className="nav-link" onClick={()=>{localStorage.clear(); window.location.reload()}}>Logout</Link>:<Link to="/login" className="nav-link">SignUp</Link>}
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </div>
    );
};

export default HeaderNav;