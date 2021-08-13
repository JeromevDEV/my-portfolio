import React from "react"
import './Card.css';

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {  
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0.2), rgba(0, 0, 0, 0.3)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header" style={{color: "black", fontSize: 25}}>{heading}</h1>
        <p className="text" style={{color: "black", fontSize: 18}}>{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a>
      </div>
    </div>
  )
}

export default Card
