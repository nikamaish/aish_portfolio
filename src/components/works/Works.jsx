import React from 'react'
import "./works.scss"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faGlobe} from '@fortawesome/free-solid-svg-icons' 

export default function Works() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "GuildMasters Website ",
      desc:
        "Built a website which serves as a Guild for gamers to explore different games, offering events, insights. Deployed frontend and backend on  Firebase and Render. It Contains SignUp, LogIn module built using Restful API using Node.js and Express.js that will securely store user Authentication data in cloud-based platform MongoDB Atlas.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    
      projectImg:"./assets/GuildMasters.png"  ,

        Github:"https://github.com/nikamaish/GuildMasters",
        Website:"https://gaming-hub-98328.web.app",

      },
      {
        id: "2",
        icon: "./assets/globe.png",
        title: "VisualMaster Website",
        desc:
          "Developed a website which visualizes real time stock market data and crypto data through graphs for better understanding,  particularly catering to newcomers in the stock market world. Set up and deployed on cloud based platform Firebase. Used MongoDB Atlas to store user data and authentication data. ",
        img:
          "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
  
          projectImg:"./assets/VisualMaster.png",
          
          
        Github:"https://github.com/nikamaish/VisualMaster_BE",
        Website:"https://vm-frontend-phi.vercel.app",
      },
      
      {
        id: "3",
        icon: "./assets/globe.png",
        
        title: "Simply Goods Website",
        desc:
        "Developed a hotel booking website using ReactJS for the user interface and Express.js with Node.js for the technical architecture and authorization. Implemented secure user registration and login functionality, utilizing bcrypt for password hashing and incorporating Cookies and JWT  for authentication and authorization ",
        img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        
        projectImg:"./assets/SimplyGoods.png",
        Github:"https://github.com/nikamaish/simply_Goods",
        Website: 'https://simplygoods-aish.web.app'
      },
      {
    id: "4",
    icon: "./assets/globe.png",
    title: "Sweet Junction Website",
    desc:
      "Developed a website which visualizes real time stock market data and crypto data through graphs for better understanding,  particularly catering to newcomers in the stock market world. Set up and deployed on cloud based platform Firebase. Used MongoDB Atlas to store user data and authentication data. ",
    img:
      "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",

      projectImg:"./assets/SweetJunction.png"  ,  
    Github:"https://github.com/nikamaish/Sweet_Junction.github.io",
    Website:"https://nikamaish.github.io/Sweet_Junction.github.io",
  },
    {
      id: "5",
      icon: "./assets/globe.png",

      title: "Quiz Web App",
      desc:
        "Developed a hotel booking website using ReactJS for the user interface and Express.js with Node.js for the technical architecture and authorization. Implemented secure user registration and login functionality, utilizing bcrypt for password hashing and incorporating Cookies and JWT  for authentication and authorization ",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      
      projectImg:"./assets/QuizApp.png",
        Github:"https://github.com/nikamaish/Quiz_App",
        Website: 'https://nikamaish.github.io/Quiz_App'
    },
    {
      id: "6",
      icon: "./assets/globe.png",

      title: "WebCraft Editor",
      desc:
        "Developed a hotel booking website using ReactJS for the user interface and Express.js with Node.js for the technical architecture and authorization. Implemented secure user registration and login functionality, utilizing bcrypt for password hashing and incorporating Cookies and JWT  for authentication and authorization ",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      
      projectImg:"./assets/WebCraftEditor.png",
        Github:"https://github.com/nikamaish/HTML_CSS_Editor",
        Website: 'https://nikamaish.github.io/HTML_CSS_Editor/'
    },
     {
        id: "7",
        icon: "./assets/globe.png",
  
        title: "E-Signature Studio",
        desc:
          "Developed a hotel booking website using ReactJS for the user interface and Express.js with Node.js for the technical architecture and authorization. Implemented secure user registration and login functionality, utilizing bcrypt for password hashing and incorporating Cookies and JWT  for authentication and authorization ",
        img:
          "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        
        projectImg:"./assets/Signature.png",
          Github:"https://github.com/nikamaish/Signature_App",
          Website:'https://nikamaish.github.io/Signature_App/'
      },
  
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d, index) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>


              <div className="gitwebsite">
                  <a href={d.Github} target='_blank' rel='noopener' style={{marginRight:"10px"}}>  <FontAwesomeIcon icon={faGithub} size="xl" className="ficon" />  </a> 

                   {d.Website && (
                  <a href={d.Website} target="_blank" rel="noopener" >
                    <FontAwesomeIcon icon={faGlobe} size="xl" className="ficon" />
                  </a>
                  )} 
                  {/* above help to apply website to only certain cards*/}
              </div>


                </div>
              </div>
              <div className="right">
                {d.projectImg && (
                  <img
                  src={d.projectImg}
                  alt="img"
                  className={index === 7 ? 'special-img' : ''}
                />
                )}
          
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
