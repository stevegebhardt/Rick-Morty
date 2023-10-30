//Set up import routes for css, states, axios, and components
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Characters";
import Location from "./components/Locations";
import Episode from "./components/Episodes";
import Buttons from "./components/Buttons";
import "animate.css";

function App() {
  //Setting up different states and a hook for each state.
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [charState, setCharState] = useState(true);
  const [locationState, setLocationState] = useState(true);
  const [episodeState, setEpisodeState] = useState(true);
  const [next, setNext] = useState({});
  const [prev, setPrevious] = useState({});

  //Setting up different get routes as a function
  const getCharacters = () => {
    axios.get("https://rickandmortyapi.com/api/character").then(({ data }) => {
      // console.log(response.data.results);
      setCharacters(data.results);
      setNext(data.info.next);
      setPrevious(data.info.prev);
    });
  };
  const getLocations = () => {
    axios.get("https://rickandmortyapi.com/api/location").then(({ data }) => {
      // console.log(data.results);
      setLocations(data.results);
      setNext(data.info.next);
      setPrevious(data.info.prev);
    });
  };
  const getEpisodes = () => {
    axios.get("https://rickandmortyapi.com/api/episode").then(({ data }) => {
      // console.log(data.results);
      setEpisodes(data.results);
      setNext(data.info.next);
      setPrevious(data.info.prev);
    });
  };
  const nextCharPage = () => {
    axios.get(next).then(({ data }) => {
      setCharacters(data.results);
      setNext(data.info.next);
      setPrevious(data.info.prev);
    });
  };
  const prevCharPage = () => {
    axios.get(prev).then(({ data }) => {
      setCharacters(data.results);
      setNext(data.info.next);
      setPrevious(data.info.prev);
    });
  };
  const nextLocPage = () => {
    axios.get(next).then(({ data }) => {
      setLocations(data.results);
      setNext(data.info.next);
      setPrevious(data.info.prev);
    });
  };
  const prevLocPage = () => {
    axios.get(prev).then(({ data }) => {
      setLocations(data.results);
      setNext(data.info.next);
      setPrevious(data.info.prev);
    });
  };
  const nextEpiPage = () => {
    axios.get(next).then(({ data }) => {
      setEpisodes(data.results);
      setNext(data.info.next);
      setPrevious(data.info.prev);
    });
  };
  const prevEpiPage = () => {
    axios.get(prev).then(({ data }) => {
      setEpisodes(data.results);
      setNext(data.info.next);
      setPrevious(data.info.prev);
    });
  };

  useEffect(() => {
    getCharacters();
  }, []);
  useEffect(() => {
    getLocations();
  }, []);
  useEffect(() => {
    getEpisodes();
  }, []);

  //Setting up toggle states for display conditions
  const toggleCharState = () => {
    {
      charState ? setCharState(false) : setCharState(true);
    }
    setEpisodeState(true);
    setLocationState(true);
  };
  const toggleLocationState = () => {
    {
      locationState ? setLocationState(false) : setLocationState(true);
    }
    setCharState(true);
    setEpisodeState(true);
  };
  const toggleEpisodeState = () => {
    {
      episodeState ? setEpisodeState(false) : setEpisodeState(true);
    }
    setCharState(true);
    setLocationState(true);
  };
  const reload = () => {
    window.location.reload(true);
  };

  //final return
  return (
    <>
      <div className="d-flex-column container z-index">
        <img
          src="https://media3.giphy.com/media/i2tLw5ZyikSFdkeGHT/source.gif"
          className="portal"
        />
        <div className="wrapper d-flex-column container">
          <header className="underline">
            <h1 className="title animate__animated animate__bounce">
              Rick and Morty
            </h1>
          </header>
          <div className="marginTThirty">
            <Buttons
              toggleCharState={toggleCharState}
              toggleLocationState={toggleLocationState}
              toggleEpisodeState={toggleEpisodeState}
            />
          </div>
          {/* ternary to check state of charState to display or hide characters */}
          {charState ? null : (
            <>
              <div className="d-flex-row paddingSixty card animate__animated animate__fadeInUp">
                {characters.map((character) => {
                  return (
                    <>
                      <Character character={character} />
                    </>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  className="marginAuto"
                  onClick={prevCharPage}
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="marginAuto"
                  onClick={nextCharPage}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* ternary to check state of locationState to display or hide locations */}
          {locationState ? null : (
            <>
              <div className="d-flex-row paddingSixty card animate__animated animate__fadeInUp">
                {locations.map((location) => {
                  return (
                    <>
                      <Location location={location} />
                    </>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  className="marginAuto"
                  onClick={prevLocPage}
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="marginAuto"
                  onClick={nextLocPage}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* ternary to check state of episodeState to display or hide episodes */}
          {episodeState ? null : (
            <>
              <div className="d-flex-row paddingSixty card animate__animated animate__fadeInUp">
                {episodes.map((episode) => {
                  return (
                    <>
                      <Episode episode={episode} />
                    </>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  className="marginAuto"
                  onClick={prevEpiPage}
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="marginAuto"
                  onClick={nextEpiPage}
                >
                  Next
                </button>
              </div>
            </>
          )}
          <button type="button" className="marginBottom" onClick={reload}>
            Make It Bounce!
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
