import React from "react";
import FoodItems from "./components/FoodItems";
import Errormessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import {useState} from 'react';
function App() {

  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (<>
    <Container>
      <h1 className="heading">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <Errormessage items={foodItems}></Errormessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
    </>
  );
}

export default App;
