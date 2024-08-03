import React from "react";
import styled from "styled-components";
import { Link, GitHub, LinkedIn } from "@mui/icons-material";
import useIntersectionObserver from "../useInteractionObserver";

const Card = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row" : "row-reverse")};
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem auto;
  padding: 2rem;
  width: 60%;
  background: #f9f9f9;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  ${({ isVisible }) =>
    isVisible &&
    `
    opacity: 1;
    transform: translateY(0);
  `}

  @media (max-width: 1000px) {
    width: 80%;
    padding: 4rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    flex-direction: column;
    width: 80%;
    padding: 2rem;
  }
`;

const Image = styled.img`
  width: 20rem;
  height: auto;
  border-radius: 50%;
  margin: 0 2rem;

  @media (max-width: 768px) {
    margin: 0 0 1rem 0;
  }
`;

const Bio = styled.div`
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ProfileCard = ({ user, reverse }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <Card ref={ref} reverse={reverse} isVisible={isVisible}>
      <Image src={user.profilePicture} alt={`${user.name}'s profile`} />
      <Bio>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <p className='testimonial'>{user.testimonial}</p>
        <SocialLinks>
          <a href={user.vedaVerse} target='_blank' rel='noopener noreferrer'>
            <img src='/assets/icon-01.svg' height={25} alt='VedaVerse' />
          </a>
          <a href={user.linkedin} target='_blank' rel='noopener noreferrer'>
            <LinkedIn style={{ color: "#0a66c2" }} />
          </a>
          <a href={user.github} target='_blank' rel='noopener noreferrer'>
            <GitHub style={{ color: "#010409" }} />
          </a>
          {user.portfolio && (
            <a href={user.portfolio} target='_blank' rel='noopener noreferrer'>
              <Link style={{ color: "black" }} />
            </a>
          )}
        </SocialLinks>
      </Bio>
    </Card>
  );
};

export default ProfileCard;
