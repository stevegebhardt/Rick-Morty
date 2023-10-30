import { useState } from "react";

const Location = ({ location }) => {
  return (
    <>
      <div className="d-flex-column marginTen cardBorder cardWidth marginTB eachCard locationHeight">
        <div className="marginZero textCenter paddingTop">
          <h2 className="marginZero">Dimension:</h2>
          <h2 className="marginZero">{location.dimension}</h2>
        </div>
        <div className="marginZero textCenter">
          <h3 className="marginZero">Name:</h3>
          <h3 className="d-flex-row marginZero">{location.name}</h3>
        </div>
        <div className="marginZero textCenter">
          <h3 className="marginZero">Type:</h3>
          <h3 className="marginZero">{location.type}</h3>
        </div>
      </div>
    </>
  );
};

export default Location;
