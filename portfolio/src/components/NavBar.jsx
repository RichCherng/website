import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router
} from 'react-router-dom';

const NavBar = ({ logo }) => {
    return (
    <Router>
        <NavBar>
            <Container>
                <Navbar.Brand href="/">
                    {/* <img src={logo.img} alt="Logo" /> */}
                </Navbar.Brand>
            </Container>
        </NavBar>
    </Router>
    )
}

export default NavBar;