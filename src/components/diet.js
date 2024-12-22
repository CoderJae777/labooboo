import Navbar from "./navbar";
import React, { useState } from "react";
import "../styles/diet.css"; // Import the CSS file
import fried_rice from "../images/fried_rice.png";

const Diet = () => {
  const [showIngredients, setShowIngredients] = useState(false);

  const toggleIngredients = () => {
    setShowIngredients((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="diet-container">
        <div className="text-prompt">
          <input
            type="text"
            placeholder="It's lunchtime, looking for meal suggestions?"
          />
        </div>
        <div className="food-image">
          <img src={fried_rice} alt="Braised Chicken Bee Hoon" />
        </div>
        <div className="food-description" onClick={toggleIngredients}>
          <h2>Yangzhou Fried Rice</h2>
          <div className="food-info">
            <span>0.3 km</span>
            <span>$5.00</span>
          </div>
          <p>350 to 400 calories per 100 grams</p>
          {showIngredients && (
            <div className="ingredients-dropdown">
              <h3>Ingredients & Steps:</h3>
              <ul>
                <li>Prep: Dice char siu/ham, clean shrimp, chop veggies and green onions, and loosen the rice.</li>
                <li>Cook Eggs: Scramble eggs in a hot wok with oil. Set aside.</li>
                <li>Cook Proteins: Stir-fry shrimp/char siu until cooked. Set aside.</li>
                <li>Stir-Fry Veggies: Cook veggies briefly in the wok.</li>
                <li>Add Rice: Stir-fry rice, breaking clumps, then season with soy sauce, salt, and pepper.</li>
                <li>Combine: Mix in eggs, proteins, and green onions. Stir well and heat through.</li>
                <li>Serve: Enjoy your fried rice!</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Diet;
