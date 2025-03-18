import React, { useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from "react-icons/fa";
import { FaPython, FaJava } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import resume from "./Profile-Pic/Resume.pdf";

const About = () => {
  const resumeRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  // Function to handle scrolling and fade-in
  const handleScrollToResume = () => {
    setFadeIn(true);
    resumeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>

      {/* Left Section */}
      <div className="left-section">
        <div className="headshot"></div>
        <div className="description">
          <p>
            Hello! I'm a passionate web developer with experience in front-end
            and back-end technologies. I'm always looking for opportunities to
            grow and learn. I enjoy problem-solving and creating user-centric
            applications.
          </p>
        </div>
      </div>

      {/* Right Section with Icons */}
      <div className="right-section">
        <div className="icon-pyramid">
          {/* Fourth level: Top */}
          <div className="icon-container">
            <FaTerminal style={{ fontSize: '3em', color: '#4B4B4B' }} />
            <div className="icon-description">
              <p>PowerShell</p>
            </div>
          </div>

          {/* Third level */}
          <div className="level">
            <div className="icon-container">
              <FaLinux style={{ fontSize: '3em', color: '#FCC624' }} />
              <div className="icon-description">
                <p>Linux</p>
              </div>
            </div>
            <div className="icon-container">
              <FaReact style={{ fontSize: '3em', color: '#61DAFB' }} />
              <div className="icon-description">
                <p>React</p>
              </div>
            </div>
          </div>

          {/* Second level */}
          <div className="level">
            <div className="icon-container">
              <FaJava style={{ fontSize: '3em', color: '#007396' }} />
              <div className="icon-description">
                <p>Java</p>
              </div>
            </div>
            <div className="icon-container">
              <FaTerminal style={{ fontSize: '3em', color: '#4B4B4B' }} />
              <div className="icon-description">
                <p>Git Bash</p>
              </div>
            </div>
            <div className="icon-container">
              <FaGithub style={{ fontSize: '3em', color: '#333' }} />
              <div className="icon-description">
                <p>SQL</p>
              </div>
            </div>
          </div>

          {/* First level: Bottom */}
          <div className="level">
            <div className="icon-container">
              <FaJsSquare style={{ fontSize: '3em', color: '#F7DF1E' }} />
              <div className="icon-description">
                <p>JavaScript</p>
              </div>
            </div>
            <div className="icon-container">
              <FaPython style={{ fontSize: '3em', color: '#306998' }} />
              <div className="icon-description">
                <p>Python</p>
              </div>
            </div>
            <div className="icon-container">
              <FaHtml5 style={{ fontSize: '3em', color: '#E34F26' }} />
              <div className="icon-description">
                <p>HTML</p>
              </div>
            </div>
            <div className="icon-container">
              <FaCss3Alt style={{ fontSize: '3em', color: '#1572B6' }} />
              <div className="icon-description">
                <p>CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <div
        ref={resumeRef}
        className={`resume-container ${fadeIn ? "fade-in" : ""}`}
      >
        <h2 className="resume-title">My Resume</h2>
        <embed
          src={resume}
          type="application/pdf"
          width="80%"
          height="310px"
        />
      </div>

      {/* View Resume Button */}
      <div className="button-container">
        <button className="view-resume-btn" onClick={handleScrollToResume}>
          View Resume
        </button>
      </div>
    </div>
  );
};

export default About;
