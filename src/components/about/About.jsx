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
          
             <div className="eclipse">     
            <img
              src="/assets/sn.png"
              alt="Profile picture"
              className="about-pic"
              
            />
            </div>

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
              Hey there! 👋 I'm Aishwarya Nikam, currently cruising through my final year of IT Engineering at P.E.S' Modern College of Engineering in Pune. 🚀 I'm a Full Stack Developer, specializing in something cool called the MERN Stack – it's like a tech toolbox with MongoDB, Express.js, React.js, and Node.js. 🛠️ I've been part of many projects and love making things work on the web!
 Always on the lookout for new techie skills, I'm into constant learning and staying up-to-date in this tech-savvy world. 📚💡
Now, let's talk about hobbies! 🎮 Gaming is my absolute jam, and I'm also geeking out about Blockchain for Web 3.0. 💻 One thing about me – when I start something, I make sure to finish it!

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