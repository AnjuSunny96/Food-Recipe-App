import React,{useContext} from "react";
import { AllMenuContext } from "./AllMenuContext";
import { DispatchContext } from "../context/AppProvider";
// import {AllMenuContext} from './Menus'

function Popup({ closePopup, popupcurrntDish,addToCartHandler}) {

  const allMenu=useContext(AllMenuContext)
  const dispatch=useContext(DispatchContext);
  console.log("dispatch is",dispatch);

  let dishResult = allMenu
    .filter((menuItem) => {
      return menuItem.strMeal == popupcurrntDish;
    })
    .map((item) => {
      return (
        <div className="popup-content-data">
          <div className="popup-header">
            <img src={item.strMealThumb} alt="" />
            <h5 className="popup-header-category">{item.strCategory}</h5>
          </div>
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>
          <ul className="dish-ingredients flex">
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
          </ul>
          <button onClick={()=>dispatch({type:'add_to_cart',
          payload:{
                    img:item.strMealThumb,
                    title:item.strMeal
          }})}>Order Now</button>
        </div>
      );
    });
  
  
    return (
    <div className="popup">
      <div className="popup-content">
        {dishResult}
        <h5 className="popup-close" onClick={closePopup}> close </h5>
      </div>
    </div>
  );
}

export default Popup;


// onClick={()=>addToCartHandler(item.strMealThumb,item.strMeal)}