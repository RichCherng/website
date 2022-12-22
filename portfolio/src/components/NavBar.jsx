import { Navbar, Nav, Container } from 'react-bootstrap';
import navIcon1 from '../resources/nav-icon1.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router
} from 'react-router-dom';

const NavigationBar = ({ logo }) => {

    const { img: logo_img } = logo;
    return (
        <Navbar>
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
                    <Nav.Link href="" style={{width: "42px", height: "42px"}}><img src={navIcon1} className="icon1" alt="logo" /></Nav.Link>
                    <Nav.Link href="">GitHub</Nav.Link>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <Navbar bg="light" expand="lg">
        //     <Container>
        //     <Nav className="me-auto">
        //     <Nav.Link href="#home">Home</Nav.Link>
        //     <Nav.Link href="#features">Features</Nav.Link>
        //     <Nav.Link href="#pricing">Pricing</Nav.Link>
        //   </Nav>
                /* <Navbar.Brand href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">Project</Nav.Link>
                    <Nav.Link href="/">ETC</Nav.Link>
                </Nav>
                <Nav>

                </Nav> */
                /* <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Navbar.Text>Rich Cherngchaosil</Navbar.Text>
                </Navbar.Collapse> */
        //     </Container>
        // </Navbar>
    )
}

export default NavigationBar;