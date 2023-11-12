import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function AppHeader() {
    return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">AUC Office of Sustainability</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/survey" activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}}>Survey</Nav.Link>
                    <NavDropdown title="About us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/#objective">Project Objective</NavDropdown.Item>
                    <NavDropdown.Item href="/#services">Our Services</NavDropdown.Item>
                    <NavDropdown.Item href="/#teammembers">Team Members </NavDropdown.Item>
                    {/* <NavDropdown.Item href="#additional">Addition Resources</NavDropdown.Item> */}
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/#contactus">
                        Contact Us
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
        
    )
}