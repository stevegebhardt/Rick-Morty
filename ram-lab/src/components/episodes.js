import { useState } from "react";

const Episode = ({ episode }) => {
  return (
    <>
      <div className="d-flex-column marginTen cardBorder cardWidth marginTB eachCard locationHeight">
        <div className="marginZero textCenter paddingTop">
          <h2 className="marginZero">Episode:</h2>
          <h2 className="marginZero">{episode.episode}</h2>
        </div>
        <div className="marginZero textCenter">
          <h3 className="marginZero">Name:</h3>
          <h3 className="marginZero">{episode.name}</h3>
        </div>
        <div className="marginZero textCenter">
          <h3 className="marginZero">Origional Air Date:</h3>
          <h3 className="marginZero">{episode.air_date}</h3>
        </div>
      </div>
    </>
  );
};

export default Episode;
