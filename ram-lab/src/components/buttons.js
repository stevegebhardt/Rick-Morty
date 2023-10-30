import { useState } from "react";

const Buttons = (props) => {
  return (
    <>
      <div className="d-flex-row md-width">
        <button
          type="button"
          onClick={props.toggleCharState}
          className="margin-auto"
        >
          Show Characters
        </button>
        <button
          type="button"
          onClick={props.toggleLocationState}
          className="margin-auto"
        >
          Show Locations
        </button>
        <button
          type="button"
          onClick={props.toggleEpisodeState}
          className="margin-auto"
        >
          Show Episodes
        </button>
      </div>
    </>
  );
};

export default Buttons;
