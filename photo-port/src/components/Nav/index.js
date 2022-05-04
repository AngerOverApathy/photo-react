import React from 'react';

function categorySelected() {
  console.log("hello")
}

function Nav() {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  return (
    <header>
  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
       {categories.map((category) => ( //map() method creates a new array populated with the results of your parameters
        <li className="mx-1"
          key={category.name}>     
          <span onClick={() => categorySelected(category.name)} >
            {category.name}
          </span> 
        </li> //we used category.name because we don't expect any categories to share the same name. Often the key will be an id
      ))}
    </ul>
  </nav>
</header>
  );
}

export default Nav;