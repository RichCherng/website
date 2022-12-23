import { Navbar, Nav, Container } from 'react-bootstrap';
import linkedInIcon from '../resources/nav-icon1.svg';
import gihubIcon from '../resources/github-icon.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router
} from 'react-router-dom';

const NavigationBar = ({ logo, links }) => {

    const { img: logo_img } = logo;
    const { linkedin: link_linkedIn, github: link_github } = links;
    console.log(link_linkedIn)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo_img} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">Project</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href={link_linkedIn} ><img src={linkedInIcon} className="icon1" alt="logo" /></Nav.Link>
                        <Nav.Link href={link_github}><img src={gihubIcon} className="icon1" alt="logo" /></Nav.Link>
                        <Navbar.Text>
                            Rich Cherngchaosil
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;