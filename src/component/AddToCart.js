
import { useContext } from "react"
import { StateContext } from "../context/AppProvider"

const AddToCart=({addToCartItems})=>{

    const state=useContext(StateContext);

    let cartPackage=state.cartItem.map((item)=>{
        return(
            <div>
            <img src={item.img} />
                 <h5>{item.title}</h5>
            </div>
    )
    })

    // let addToCartResults=addToCartItems.map((item)=>{
    //     return(
    //         <div>
    //             <img src={item.img} />
    //             <h5>{item.title}</h5>
    //         </div>
    //     )
    // })


    return(
        <div className="add-to-cart-wrapper">
            <div className="add-to-cart-item">
                <h5>Your Cart</h5>
                {cartPackage}
            </div>
        </div>
    )
}
export default AddToCart