import React, { useState, useEffect } from "react";
import "./styles/characters.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import ReusableButton from "./Reusablebutton/Button";
import ReusableNavbar from "./Reusablenavbar/Navbar";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get("http://localhost:5000/characters");
      setCharacters(res.data);
    };

    getCharacters();
  }, []);

  return (
    <div className="container">
    <ReusableNavbar clase='navbar'/>
      <main>
        <div className="characters">
        {characters &&
          characters.map((char) => {
            return (
              <div
                className={
                  char.role === "light"
                    ? "card light"
                    : char.role === "darkness"
                    ? "card dark"
                    : "card unknown"
                }
                key={char._id}
              >
                <h2>{char.name}</h2>
                <img src={char.img} alt={char.name} />
                  {/* <Link to={`/characters/${char.name}`}>Ver detalles</Link> */}
                  {/* Preguntar a Santi */}
                  <ReusableButton texto={<Link to={`/characters/${char.name}`}>Ver detalles</Link>} clase='details--button'/>
              </div>
            );
          })}
        ;
        </div>
      </main>
      <footer>FOOOTER</footer>
    </div>
    
  );
};

export default Characters;
