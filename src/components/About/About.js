import React from "react";
import './About.css';
import { stackList } from "../../data/ProjectData";
import {
//  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <h1 className="SectionTitle">About Me</h1>
        <div className="BigCard">

          <div className="about__container" id="about-me">
              <div>
              <img
                src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
                alt="man-svgrepo"
              />
              </div>
              <div className="about__text">
                <p>
                I am a Web Developer experienced in creating, developing, and maintaining websites and web applications. 
                I've done a lot of full-stack work, though now I am mostly focused on the front-end. I enjoy working with HTML, CSS, 
                JavaScript, C#, and Bootstrap.
                </p>
                <br/>
                <p>
                I recently worked at the Ministry of Government and Consumer Services (MGCS), where I joined the Infrastructure Technology Services team as a co-op student and later as a Junior Web Developer. 
                Before joining MGCS, I completed Niagara College's Computer Programmer - Analyst (Co-op) program in 2020 and earned a diploma. 
                </p>
                <br />
                <p>
                  When I am not in front of a computer, I enjoy playing sports, watching movies, and spending time with my family.
                </p>
              </div>
            </div>

          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
