// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Soft Fade In Animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.98); }
  100% { opacity: 1; transform: scale(1); }
`;

// Page Wrapper with a more elegant color palette
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f6f0e2, #ece1d7);
  color: #4b4b4b;  /* Soft greyish text for a mature tone */
  font-family: "Georgia", serif;
  animation: ${fadeIn} 2s ease-in-out;
`;

// Elegant Header Style
const Header = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 30px;
  text-align: center;
  color: #4f4f4f;  /* Darker grey for better contrast */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${fadeIn} 2s ease-out;
`;

// Subtle Font for Subheading
const SubHeading = styled.p`
  font-size: 1.5rem;
  margin-bottom: 50px;
  color: #7a7a7a;
  font-weight: 300;
  text-align: center;
`;

// Styled Link Container
const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  animation: ${fadeIn} 2s ease-out;
`;

// Styled Link Button
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  padding: 18px 30px;
  background-color: #a39482;  /* Earthy taupe color for a mature feel */
  border-radius: 35px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  text-transform: capitalize;

  &:hover {
    background-color: #d1b094;  /* A warm golden tone on hover */
    transform: scale(1.05);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  }

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #f9d7c0, #f2e1d6, #d0a9e1);
    z-index: -1;
    border-radius: 35px;
    animation: glowing 1.5s infinite linear;
  }

  @keyframes glowing {
    0% {
      box-shadow: 0 0 5px #d1b094, 0 0 10px #d1b094;
    }
    50% {
      box-shadow: 0 0 15px #d1b094, 0 0 20px #d1b094;
    }
    100% {
      box-shadow: 0 0 5px #d1b094, 0 0 10px #d1b094;
    }
  }

  &:hover:before {
    animation: glowing 1s infinite linear;
  }
`;

const Home = () => {
  return (
    <PageWrapper>
      <Header>Welcome to Valentine's Week 💕</Header>
      <SubHeading>Celebrate love, joy, and special moments this week!</SubHeading>
      <LinkContainer>
        <StyledLink to="/RoseDay">Rose Day 🌹</StyledLink>
        <StyledLink to="/ProposeDay">Propose Day 💍</StyledLink>
        <StyledLink to="/ChocolateDay">Chocolate Day 🍫</StyledLink>
        <StyledLink to="/TeddyDay">Teddy Day 🧸</StyledLink>
        <StyledLink to="/PromiseDay">Promise Day 🤞</StyledLink>
        <StyledLink to="/HugDay">Hug Day 🤗</StyledLink>
        <StyledLink to="/KissDay">Kiss Day 💋</StyledLink>
        <StyledLink to="/ValentineDay">Valentine's Day 💌</StyledLink>
      </LinkContainer>
    </PageWrapper>
  );
};

export default Home;