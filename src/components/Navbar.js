import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #274c78;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  z-index: 1000;

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const Logo = styled.img`
  height: 2.5rem;
  width: auto;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const Navbar = ({ isVisible }) => {
  return (
    <NavbarContainer isVisible={isVisible}>
      <a href='https://vedaai.io' target='_blank'>
        <Logo src='assets/logo-white.png' alt='VedaVerse Logo' />
      </a>
      <Title>VedaVerse Pioneers</Title>
    </NavbarContainer>
  );
};

export default Navbar;
