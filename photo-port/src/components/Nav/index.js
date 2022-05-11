import React, { useState } from "react";
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

useEffect(() => {
  document.title = capitalizeFirstLetter(currentCategory.name); //Assign the DOM node in the function body of the callback function
}, [currentCategory]); //directs the hook to re-render the component on changes to the value of this state-if currentCategory changes now, the component will re-render so that the change in document.title will be visible to the user

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className={`mx-1 ${ //short-circuit expression
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
                </span> 
              </li> //we used category.name because we don't expect any categories to share the same name. Often the key will be an id
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;