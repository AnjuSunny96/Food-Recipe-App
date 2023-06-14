import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Hero  from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout";
import { AppProvider } from "../context/AppProvider";

//step:1 & 3
//create a global context that can be shared to it's children.
// export const AllMenuContext = React. createContext();

function Menus() {

  return (
    <>    <Router>
          <AppProvider>
          <Header/>
          <Hero/>
              <Routes>  

                  <Route exact path="/" element={
                      <AllMenus>
                      <SpecialDishes />
                      <FilteredDishes />
                      </AllMenus>
                  }/>
                  
                  <Route exact path="/checkout"
                  element={ <Checkout/>}/>

              </Routes>
              </AppProvider>
          </Router>
          
    </>

//**********Removed code**********
  // let [menu, setMenu] = useState([]);
  // const [loading,setLoading]=useState(false)
//   let [menuCategory,setMenuCategory]=useState([])
//   let [singleDish,setSingleDish]=useState([])

//   //API call for All menu
//   // async function getAllTheMenu() {
//   //   //Calling an API using Jvascript Fetch() method.For calling an API The function should be in async.

//   //   setLoading(true)
//   //   let API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
//   //   let response = await fetch(API_URL); //await is for waiting time.
//   //   let data = await response.json(); //json is to convert the response into machine redable format.
//   //   setMenu(data.meals);
//   //   setLoading(false)
//   // }
  
// // API call for All categories
//   async function getAllTheCategories(){
//     let URL_API="https://www.themealdb.com/api/json/v1/1/categories.php"
//     let response= await fetch(URL_API);
//     let categorydata=await response.json();
//     setMenuCategory(categorydata.categories);
    
//   }

//   //API call for a singl category
//   async function getSingleCategory(){
//     let URL_API="https://www.themealdb.com/api/json/v1/1/filter.php?c=beef"
//     let response=await fetch(URL_API)
//     let singleDishData=await response.json()
//     setSingleDish(singleDishData.meals)
//   }
  
//   useEffect(() => {
//     //getAllTheMenu()
//     getAllTheCategories()
//     getSingleCategory()
//   }, []);

  
  );
}
export default Menus;


//*********Removed code**********
// {/* step2 */}
// <AllMenuContext.Provider value={menu}>
// {/* {!loading ?<SpecialDishes /> :<Loader/>} 
// {!loading ?<FilteredDishes allMenuCategories={menuCategory} allMenus={menu} SingleDish={singleDish} setSingleDish={setSingleDish}/> :<Loader/>}  */}
//  {/* <SpecialDishes specialMenu={menu}/>  
//  <FilteredDishes categoryList={menuCategory} allMenus={menu}/> */}
//  </AllMenuContext.Provider>
