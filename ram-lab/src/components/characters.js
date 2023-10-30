import { useState } from "react";

const Character = ({ character }) => {
  return (
    <>
      <div className="d-flex-column marginTen cardBorder cardWidth marginTB eachCard">
        <div className="marginZero textCenter paddingTop">
          <h3 className="marginZero">Species:</h3>
          <h3 className="marginZero">{character.species}</h3>
        </div>
        <div className="marginZero textCenter">
          <img
            src={character.image}
            alt={`image of ${character.name}`}
            className="marginZero"
          />
        </div>
        <div className="marginZero textCenter">
          <h2 className="marginZero">Name:</h2>
          <h2 className="marginZero heightEighty imgWidth">{character.name}</h2>
        </div>
      </div>
    </>
  );
};

export default Character;
