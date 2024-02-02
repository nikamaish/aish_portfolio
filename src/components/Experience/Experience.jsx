import React, { useState } from 'react';
import './experience.css'; // Make sure to import your CSS file

const jobData = [
  {
    id: 1,
    title: 'Web Developer Intern',
    company: 'Oasis Infobyte',
    description: 'Gained experience with front-end technologies like HTML, CSS, JavaScript, and  React. Worked on three front-end web development projects during the internship, which helped me to understand the real-world application of the technologies.',
    image: './assets/Oasis.png',
  },
  {
    id: 2,
    title: 'Frontend Developer Intern',
    company: 'TCR Innovation',
    description: ' Worked on project named Sweet Junction, providing a one-stop platform for indulging  favorite desserts Built by using HTML, CSS, and JavaScript. Used Flask to enhance shopping and streamline operations, creating a seamless API for efficient data management with MongoDB Compass',
    image: './assets/TCR.png',
  },
  {
    id: 3,
    title: 'Machine Learning Intern',
    company: 'YBI Foundation',
    description: 'Gained hands-on experience with programming languages like Python as well as libraries like Pandas , Numpy, scikit-learn, Matplotlib',
    
    image: './assets/YBI.png',
  },
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? jobData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === jobData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="work-section">
      <div>
        <h1 className="work-title">Experience</h1>
      </div>
      <div className="carousel">
        <div className="slider" >
          {jobData.map((job) => (
            <div className="card" key={job.id}>
              <div className="image-box">
                <img src={job.image} alt={`Experience ${job.id}`} style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
              </div>
              <div className="content">
                <h1 className='title'>{job.title}</h1>
                <h2 className='company'>{job.company}</h2>
                <p className='des'>{job.description}</p>
                {job.timeline && <h4 className='timeline'>{job.timeline}</h4>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
