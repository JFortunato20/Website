import React, { useRef, useState } from "react"; 
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase } from "react-icons/fa";
import { FaPython, FaJava, FaLinux, FaTerminal } from "react-icons/fa";
import vmwareLogo from "../assets/images/VMware_logo.png"; // Adjust path if necessary
import resume from "./Profile-Pic/JPF-Resume.jpg"; // Ensure this path is correct

const About = () => {
  const resumeRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [isResumeVisible, setIsResumeVisible] = useState(false); // State to toggle visibility
  const [fadeOut, setFadeOut] = useState(false); // Correctly define setFadeOut here

  // Function to handle scrolling and fade-in
  const handleScrollToResume = () => {
    setIsResumeVisible(true); // Make resume visible when clicked

    // Add a delay before starting the scroll
    setTimeout(() => {
      // Scroll to the center of the resume container
      if (resumeRef.current) {
        resumeRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center", // Scroll to the center of the container
        });
      }

      // After scroll completes, fade in the resume
      setTimeout(() => {
        setFadeIn(true);
      }, 500); // Adjust the delay (in ms) to allow the scroll effect to finish
    }, 500); // 1-second delay before starting the scroll
  };

  const handleHideResume = () => {
    setFadeOut(true); // Start the fade-out animation
    setTimeout(() => {
      // Scroll to the heading after animation
      const aboutHeading = document.querySelector('.about-heading');
      aboutHeading.scrollIntoView({ behavior: 'smooth' });
      
      // Optionally, hide the resume completely after animation
      setTimeout(() => {
        setIsResumeVisible(false);
        setFadeOut(false); // Reset fade-out state
      }, 500); // Match this duration with the CSS animation duration
    }, 500); // Delay before hiding the resume
  };

  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>

      {/* Left Section */}
      <div className="left-section">
        <div className="headshot"></div>
        <div className="description">
          <p>
          Hi, I’m Joseph Fortunato. I’m currently pursuing a bachelor’s degree
           in Computer Science with a concentration in Software Development and
            a minor in Cybersecurity. With a deep passion for technology, I’m honing
            my skills in coding, problem-solving, and securing systems. I’m driven to
           build a career in software development or cybersecurity, where I can tackle 
           complex challenges and create impactful solutions. Through my academic journey, 
           I’m gaining the expertise needed to thrive in the ever-evolving tech industry.

 
          </p>
        </div>
      </div>

      {/* Right Section with Icons */}
      <div className="right-section">
        <div className="icon-pyramid">
          {/* Fourth level: Top */}
          <div className="icon-container">
  <img 
    src={vmwareLogo} 
    alt="VMware Workstation" 
    style={{
      width: '48px', // Adjust width as needed
      height: '48px', // Adjust height as needed
      objectFit: 'contain' // Keeps aspect ratio
    }} 
  />
  <div className="icon-description">
    <p>VMware</p>
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
              <FaDatabase style={{ fontSize: '3em', color: '#00758F' }} />
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
      {isResumeVisible && (
        <div
          ref={resumeRef}
          className={`resume-container ${fadeIn ? "fade-in" : ""} ${fadeOut ? "fade-out" : ""}`}
          style={{
            marginTop: "30px", // Add margin to avoid overlap with description
            display: "flex",
            flexDirection: "column", // Stack title and image vertically
            alignItems: "center", // Center content horizontally
            textAlign: "center", // Center the title text
            paddingBottom: "30vh" // Padding below the resume to add space
          }}
        >
          <h2 className="resume-title" style={{ marginBottom: "-350px" }}>
            My Resume
          </h2>
          <img
            src={resume} // Use an image tag for the resume
            alt="Resume"
            className="resume-img"
            style={{
              paddingTop: "0vh",
              width: "100%", // Set the width as needed
              maxWidth: "750px", // Max width to prevent the image from getting too large
              height: "auto", // Maintain aspect ratio
              borderRadius: "0px", // Optional: Add rounded corners to the image
              margin: "0 auto", // Center the image on the x-axis
              paddingBottom: "12vh"
            }}
          />
        </div>
      )}

      {/* View Resume Button */}
      <div className="button-container">
        {!isResumeVisible ? (
          <button className="view-resume-btn" onClick={handleScrollToResume}>
            View Resume
          </button>
        ) : (
          <button className="hide-resume-btn" onClick={handleHideResume}>
            Hide Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
