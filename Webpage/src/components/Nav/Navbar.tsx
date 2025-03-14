import React, { Component } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  color: #fff;
  font-size: 1.2rem;
`;

class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
        <NavbarList>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarList>
      </NavbarContainer>
    );
  }
}

export default Navbar;