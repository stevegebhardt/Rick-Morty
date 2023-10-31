//Set up import routes for css, states, axios, and components
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Character from "./components/characters";
import Location from "./components/locations";
import Episode from "./components/episodes";
import "animate.css";

function App() {
  //Setting up different states and a hook for each state.
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
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

  const reload = () => {
    window.location.reload(true);
  };

  //final return
  return (
    <>
      <div className="d-flex-column container z-index">
        <img
          src="https://media3.giphy.com/media/i2tLw5ZyikSFdkeGHT/source.gif"
          alt="gif of R&M portal"
          className="portal"
        />
        <div className="wrapper d-flex-column container">
          <header className="underline">
            <h1 className="title animate__animated animate__bounce">
              Rick and Morty
            </h1>
          </header>
          <Router>
            <Route path="/characters">
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
            </Route>
            <Route path="/locations">
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
            </Route>
            <Route path="/episodes">
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
            </Route>
          </Router>
          <button type="button" className="marginBottom" onClick={reload}>
            Make It Bounce!
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
