import React from 'react';
import "./errors.css"
import errorIMG from "../../assets/imgs/undraw_page_not_found_su7k.svg"

const UnknownPath = () => {
    return (
      <div className="page_not_Found_main">
           <img src={errorIMG} alt="wrongPage" />
           <h2>OUPS ! La page que tu recherche n'existe pas !</h2>
      </div>
    );
}

export default UnknownPath;