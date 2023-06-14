import { useContext } from "react"
import { StateContext } from "../context/AppProvider"

const Checkout=()=>{
    let state=useContext(StateContext)
    let cartpackage=state.cartItem.map((item)=>{
        return(
            <div>
                <img src={item.img} alt="" />
                <h4>{item.title}</h4>
            </div>
        )
    })
return(
<div>
    <h2>This is checkout page</h2>
    {cartpackage}
</div>
)
}
export default Checkout