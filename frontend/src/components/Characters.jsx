import React, { useState, useEffect } from "react";
import "./styles/characters.scss";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="characters">
      {characters &&
        characters.map((char) => {
          return <div key={char._id}>
                    <h2>{char.name}</h2>
                    <img src={char.img} alt={char.name} />
                    <Link to={`/characters/${char.name}`}>Ver detalles</Link>
                        

                 </div>
        })};
    </div>
  );
};

export default Characters;
