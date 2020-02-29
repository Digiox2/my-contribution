import React from 'react';
import "./errors.css"

const UnknownPath = () => {
    return (
      <div className="page_not_Found_main">
           <img src="imgs/undraw_page_not_found_su7k.svg" />
           <h2>OUPS ! La page que tu recherche n'existe pas !</h2>
      </div>
    );
}

export default UnknownPath;