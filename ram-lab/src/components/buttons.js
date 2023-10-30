import { useState } from "react";

const Buttons = ({
  toggleCharState,
  toggleEpisodeState,
  toggleLocationState,
}) => {
  return (
    <>
      <div className="d-flex-row md-width">
        <button type="button" onClick={toggleCharState} className="margin-auto">
          Show Characters
        </button>
        <button
          type="button"
          onClick={toggleLocationState}
          className="margin-auto"
        >
          Show Locations
        </button>
        <button
          type="button"
          onClick={toggleEpisodeState}
          className="margin-auto"
        >
          Show Episodes
        </button>
      </div>
    </>
  );
};

export default Buttons;
