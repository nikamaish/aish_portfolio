import React, { useEffect } from 'react'
import "./portfolio.scss"
import {useStae} from "react"
import PortfolioList from "../portfolioList/portfolioList";
import {
  languages,
  frontend,
  backend,
  tools,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = React.useState("frontend");
  const [data, setData] = React.useState([]);
  const list = [
    {
      id: "languages",
      title: " Languages",
    },
    {
      id: "frontend",
      title: "FrontEnd",
    },
    {
      id: "backend",
      title: "BackEnd",
    },
    {
      id: "tools",
      title: "Tools",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "languages":
        setData(languages);
        break;
      case "frontend":
        setData(frontend);
        break;
      case "backend":
        setData(backend);
        break;
      case "tools":
        setData(tools);
        break;
     
        break;
      default:
        setData(frontend);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Technical Skills</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}