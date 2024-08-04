import React, { useEffect, useState } from "react";
import Profiles from "./components/Profiles";
import styled, { keyframes, css } from "styled-components";
import useIntersectionObserver from "./useInteractionObserver";
import { Link as LinkScroll } from "react-scroll";
import Navbar from "./components/Navbar";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #274c78;
  color: white;
  position: relative;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-20px)"};
  transition: opacity 1s ease-out, transform 1s ease-out;

  h1 {
    font-size: 4rem;
    margin: 0;
  }

  footer {
    position: absolute;
    bottom: 20px;
    font-size: 1.5rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 100vw;

    h1 {
      font-size: 2rem;
    }

    footer {
      font-size: 1rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }

    footer {
      // display: none;
    }
  }
`;

const Paragraph = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
      animation: ${fadeIn} 1s ease-out forwards;
    `}
`;

const Main = styled.main`
  padding: 2rem;
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const ScrollDown = styled(LinkScroll)`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;

const App = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [paraRef, paraVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    setHeaderVisible(true);

    const onScroll = () => {
      if (window.scrollY > 100) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Container className='App'>
      <Navbar isVisible={navbarVisible} />
      <Header isVisible={headerVisible}>
        <img
          src='assets/logo-white.png'
          style={{ height: "10rem", width: "auto" }}
          alt=''
        />
        <h1>VedaVerse Pioneers</h1>
        <Paragraph ref={paraRef} isVisible={paraVisible}>
          At VedaVerse, we are immensely proud to introduce our initial users —
          Pioneers who have trusted and embraced our products from the very
          beginning. These exceptional students have not only utilized our
          offerings to enhance their skills but have also provided invaluable
          feedback that has driven our innovation and growth. Their dedication
          and support have been instrumental in shaping our journey, and we hold
          them in the highest regard. Each profile below represents a unique
          story of ambition, resilience, and success. We are grateful for their
          continued partnership and look forward to celebrating many more
          achievements together.
        </Paragraph>
        <footer>
          <ScrollDown to='profiles'>
            <ScrollLink>
              Meet Our Pioneers
              <img
                src='https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg'
                alt='scroll-down'
              />
            </ScrollLink>
          </ScrollDown>
        </footer>
      </Header>
      <Main>
        <Profiles />
      </Main>
    </Container>
  );
};

export default App;
