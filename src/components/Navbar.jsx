import React from "react";
import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography } from "@mui/material";

const NavContainer = styled(AppBar)`
  width: 100%;
  background-color: #fcba03;
  position: static;
  margin-bottom: 1rem;
`;

const ToolbarContent = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  @media (max-width: 37.5rem) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 37.5rem) {
    width: 100%;
    justify-content: center;
  }
`;

const TitleContainer = styled.div`
  flex: 2;
  text-align: right;
  @media (max-width: 37.5rem) {
    margin-top: 0.5rem;
  }
`;

const Navbar = () => {
  return (
    <NavContainer position='static'>
      <ToolbarContent>
        <LogoContainer>
          <img
            src='/assets/logo-black-transparent.png'
            width='40rem'
            height='auto'
            alt='Logo'
          />
        </LogoContainer>
        <TitleContainer>
          <Typography variant='h6'>VedaVerse Leaderboard</Typography>
        </TitleContainer>
      </ToolbarContent>
    </NavContainer>
  );
};

export default Navbar;
