import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const MainNavContainer = styled.div`
  background-color: #444;
`;

class MainNav extends Navbar {
  render() {
    return (
      <MainNavContainer>
        {super.render()}
      </MainNavContainer>
    );
  }
}

export default MainNav;