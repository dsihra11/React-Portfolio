import React from "react";
import {
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroH1,
  HeroH5,
  HeroP,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
 
  return (
    <main>
      <HeroContainer id="hero">
        <HeroWrapper>
          <HeroContent>
            <HeroH1>Hi, I'm Devon</HeroH1>
            <HeroH5>Web Developer</HeroH5>
            <HeroP>
              I design and code beautifully simple things, and I love what I do.
            </HeroP>
          </HeroContent>
        </HeroWrapper>
        <ScrollDown to="about">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
