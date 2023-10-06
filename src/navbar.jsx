import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";

function BasicExample() {
    return (
        <Navbar expand="lg" className="position-fixed w-100 bg-black">
        <Container className='text-white'>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className='text-white'>
            <Nav className="me-auto">
                <Nav.Link href="#head" className='text-white pe-4'>Home</Nav.Link>
                <Nav.Link href="#about" className='text-white pe-4'>About Us</Nav.Link>
                <Nav.Link href="#skill" className='text-white pe-4'>Skills</Nav.Link>
                <Nav.Link href="#port" className='text-white pe-4'>Portfolio</Nav.Link>
                <Nav.Link href="#contact" className='text-white pe-4'>Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default BasicExample;