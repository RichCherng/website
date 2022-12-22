import { Navbar, Nav, Container } from 'react-bootstrap';
import linkedInIcon from '../resources/nav-icon1.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router
} from 'react-router-dom';

const NavigationBar = ({ logo }) => {

    const { img: logo_img } = logo;
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
                    <Nav.Link href="" ><img src={linkedInIcon} className="icon1" alt="logo" /></Nav.Link>
                    <Nav.Link href="">GitHub</Nav.Link>
                    <Navbar.Text>
                        Rich Cherngchaosil
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;