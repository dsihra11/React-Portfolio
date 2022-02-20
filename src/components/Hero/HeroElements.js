import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-bottom: 14rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    max-width: 540px;
    padding-bottom: 14rem;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 85px 195px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
     padding: 65px 125px;
  }

  @media screen and (max-width: 480px) {
    padding: 60px 3.5px;
  }

`;

export const HeroH1 = styled.h1`
  font-size: 2.8rem;
  color: #f6f6f6;
  opacity: 0.98;
  font-weight: 400;

 

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @media screen and (max-width: 320px) {
    font-size: 27px;
  }

`;

export const HeroH5 = styled.h5`
  font-size: 1.6rem;
  color: rgb(119, 119, 121);
  margin-bottom: 0.5rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 21px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

`;

export const HeroP = styled.p`
  margin-top: 2px;
  font-size: 17px;
  color: #f6f6f6;
  opacity: 0.85;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
  
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

export const ScrollDown = styled(LinkScroll)`
  margin-top: 20rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  margin-left: 420px;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    justify-content: center;
     margin-left: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 16rem;
    margin-left: 50px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 13rem;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    margin-right: 50px;
  
    img {
      height: 30px;
      width: 30px;
      margin-left: 6px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin-top: 1.6rem;
    margin-right: 50px;

    img {
      height: 25px;
      width: 25px;
      margin-left: 6px;
    }
  }

  @media screen and (max-width: 320px) {
    display: none;
  }
  
`;
