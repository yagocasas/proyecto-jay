import React, { useState, useEffect } from "react";
import "./styles/characters.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import ReusableButton from "./Reusablebutton/Button";
import ReusableNavbar from "./Reusablenavbar/Navbar";
import Footer from "./ReusableFooter/Footer";
import { useDispatch } from "react-redux";
import { getCharacters } from "../redux/characters/charactersFunctions";
import { useSelector } from "react-redux";

const Characters = () => {


  const dispatch = useDispatch([])
  const {characters, isLoading, error} = useSelector((state) => state.characters);
  useEffect(() => {
    dispatch(getCharacters('/'));
},[]);


  return (
    <div className="container">
    <ReusableNavbar clase='navbar'/>
      <main>
        <div className="characters">
        {isLoading && ("Cargando...")}
        {error && ("Error al cargar")}
        {console.log(characters)}
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
                  <ReusableButton texto={<Link to={`/characters/${char.name}`}>Ver detalles</Link>} clase={`details--button button-${char.role}`}/>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
    
  );
};

export default Characters;
