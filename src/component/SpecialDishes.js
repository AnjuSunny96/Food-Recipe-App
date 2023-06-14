import {useState , useContext} from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";
import AddToCart from "./AddToCart";

function SpecialDishes(props){  
    let [showPopup, setShowPopup] = useState(false);
    let [popupcurrntDish,setPopupCurrntDish]=useState('');
    let [addToCartItems,setaddToCartItems]=useState([{}]);

    //******step 5******
    //making the imported 'AllMenuContext' publicaly available using 'Context Hook'.
    let allMenus=useContext(AllMenuContext);
    // console.log("Global state menus are here:",allMenus);

    //let's show the popup when clicked
    function showPopupHandler(dishItem){
        setPopupCurrntDish(dishItem)
        setShowPopup(true);
      }
      
      //let's clos the popup when clicked
    function closePopupHandler(){
        setShowPopup(false);
    }

    //add to cart handler
    function addToCartHandler(addtocartImg,addtocartTitle){
        setaddToCartItems(
            [
                ...addToCartItems,
                {
                    img:addtocartImg,
                    title:addtocartTitle
                }
            ]
    )
    }
    

    let maxdishlist=8;
    let specialMenus=allMenus.map((menuItem,index)=>{
        if(index<maxdishlist){
            return (
                <CardDish menuItem={menuItem} showPopup={showPopupHandler}/>
        )
        }
       
    })
return(
    <>
    <section className="special-dishes">
        {showPopup && <Popup closePopup={closePopupHandler} popupcurrntDish={popupcurrntDish} allMenu={allMenus} addToCartHandler={addToCartHandler}></Popup>}
        <div className="container">
            <AddToCart addToCartItems={addToCartItems}/>
            <div className="special-dishes-content text-center">
                <h2>Our Special Dishes</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis  fuga excepturi numquam quas repudiandae magnam soluta ipsa dolorum deserunt eaque consequatur, temporibus impedit laboriosam sed !</p>
            </div>
            <div className="special-dishes-list">
                <ul className="flex flex-wrap gap-30">
                {specialMenus}
                </ul>
            </div>
        </div>
    </section>
    </>
)
}
export default SpecialDishes;