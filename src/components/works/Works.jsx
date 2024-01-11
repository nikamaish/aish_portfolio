import React from 'react'
import "./works.scss"
import { useState } from "react";
 
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
    
      },
      {
        id: "2",
        icon: "./assets/globe.png",
  
        title: "Hotel Booking Website",
        desc:
          "Developed a hotel booking website using ReactJS for the user interface and Express.js with Node.js for the technical architecture and authorization. Implemented secure user registration and login functionality, utilizing bcrypt for password hashing and incorporating Cookies and JWT  for authentication and authorization ",
        img:
          "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Visual Master",
      desc:
        "Developed a website which visualizes real time stock market data and crypto data through graphs for better understanding,  particularly catering to newcomers in the stock market world. Set up and deployed on cloud based platform Firebase. Used MongoDB Atlas to store user data and authentication data. ",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <p>Certifiacate</p> */}
                  <a href="https://github.com/nikamaish" target='_blank' rel='noopener'><span>GitHub</span></a> 
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
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
