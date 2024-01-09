import React from 'react';
import "./about.scss";
import Contact from '../contact/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  return (
    <div>

      <section id="about">
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="/assets/aish.jpg"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">

                <img src="./assets/experience.png" alt="Experience icon" className="icon" />

                <h3>Role</h3>
                <p> FullStack Developer</p>
              </div>


              <div className="details-container">

                <img src="./assets/education.png" alt="Education icon" className="icon" />

                <h3>Education</h3>
                <p>BE Degree In IT</p>
              </div>


              
              
                <div className='btn-container'>
                {/* <button
                  className="btn btn-color-2" 
                  onClick={() => window.open('/assets/Aishwarya_Nikam_final_resume.pdf')}><FontAwesomeIcon icon={faFileArrowDown}  size='xl' />Download Resume
                  
                </button> */}
                  <button className="btn btn-color-2">
                    <a href="/resume/Aishwarya_Nikam_Resume_.pdf" className='download' download={true}>
                      Download Resume
                      </a>
                </button>



              </div>
              </div>

            <div className="text-container">
              <p>
              I'm a fourth-year IT student with a passion for exploring new technologies. Web development and UI/UX design have captured my interest, so equipped with Web Development skills. I'm also an avid gamer and enjoy immersing myself in virtual worlds. My hardworking nature drives me to tackle any challenge head-on and ensure tasks are completed with excellence. With a strong commitment to both my studies and personal interests, I'm excited to apply my skills, dedication, and enthusiasm to make a meaningful impact in the field.
              </p>
            </div>
          </div>
        </div>

      </section>

      
    </div>
  );
}

export default About;


//  <FontAwesomeIcon icon={faFileArrowDown} className='icon' /> 