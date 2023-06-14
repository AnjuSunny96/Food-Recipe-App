import {useState,useContext,useEffect} from "react"
import Alert from "./Alert";
import CardDish from "./CardDish";
import Pagination from "./Pagination";
import {AllMenuContext} from './AllMenuContext'

function FilteredDishes(props) {

  const allMenu=useContext(AllMenuContext);

  let [menuCategory,setMenuCategory]=useState([])
  let [singleDish,setSingleDish]=useState([]);
  let [filteredList,setFilteredList]=useState([])
  let [activeDish,setActiveDish]=useState("Beef") // state variable for showing active menu list.
  let [currentpage,setCurrentPage]=useState(1); //state for pagination
  let [itemsPerPage,setItemsPerPage]=useState(4);

  
  
// API call for All categories
  async function getAllTheCategories(){
    let URL_API="https://www.themealdb.com/api/json/v1/1/categories.php"
    let response= await fetch(URL_API);
    let categorydata=await response.json();
    setMenuCategory(categorydata.categories);
    
  }

  //API call for a singl category
  async function getSingleCategory(){
    let URL_API="https://www.themealdb.com/api/json/v1/1/filter.php?c=beef"
    let response=await fetch(URL_API)
    let singleDishData=await response.json()
    setSingleDish(singleDishData.meals)
  }
  
 
  
  useEffect(() => {
    getAllTheCategories()
    getSingleCategory()
  }, []);


  
  

  let indexOfLastPage= currentpage*itemsPerPage;
  //1 * 4 = 4
  //2 * 4 = 8
  //3 * 4 = 12
  //4 * 4 = 16

  let indexOfFirstPage= indexOfLastPage - itemsPerPage;
  //4 - 4 = 0
  //8 - 4 = 4
  //12 - 4 = 8
  //16 - 4 = 12

  let showTheseDishesNow= filteredList.slice(indexOfFirstPage,indexOfLastPage);// showing 1st 4 items from the filteredList.
  

  //lets show single dish - showing beef items
  let maxDish=8
  let singledishItem=singleDish.map((menuItem,index)=>{
    if(index<maxDish){
      return(
      //   <li>
      //   <img src={item.strMealThumb} alt="" />
      //   <h5>{item.strMeal}</h5>
      // </li>
      <CardDish menuItem={menuItem}/>
    )
    }
    
  })
  
  
  // Show dishes on click
  function showFilteredMenuHandler(category) {
    setSingleDish([]) //empty array for removing beef items after an item link clicked.
    setActiveDish(category)
    
  let filteredDishesItems= allMenu.filter((item)=>{
      return item.strCategory === category
    }).map((menuItem)=>{
      return(
        <CardDish menuItem={menuItem} />
      )
    })
    setFilteredList(filteredDishesItems)
    
  }
  
  

  //Let's show all the categories
  let allCategories = menuCategory.map((item) => {
    return (
      <li className={item.strCategory == activeDish ? "active" : null} onClick={() => {showFilteredMenuHandler(item.strCategory);}}>{item.strCategory}</li>
    );
  });



  //Rendering
  return (
    <div>
      <div className="filterd-dishes">
        <div className="container">
          <div className="text-center">
            <h2>Choose your dishes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id
              blanditiis saepe nemo deserunt impedit vel reprehenderit,
              molestiae veniam sapiente.
            </p>
          </div>

          <div className="filtered-dishes">
            <ul>{allCategories}</ul>
          </div>

          <div className="filtered-dishes-results">
            <ul className="flex flex-wrap gap-30">
              {singledishItem}
              {singledishItem !=0 || filteredList.length !=0 ? showTheseDishesNow : <Alert/>}
              </ul>
          </div>

          <Pagination filteredList={filteredList} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentpage={currentpage}/>
        </div>
      </div>
    </div>
  );
}
export default FilteredDishes;
