
import {useReducer,useContext, createContext} from 'react';

let DispatchContext = createContext(); //usecontext
let StateContext= createContext();

const AppProvider=({children})=>{

    let initialstate={
        cartItem:[]
    }

    const reducer=(state,action)=>{
        
        switch(action.type){
            case 'add_to_cart': return{
                ...state,cartItem:[...state.cartItem,action.payload]
            }

            default:return state
        }
    }

const [state,dispatch]=useReducer(reducer,initialstate);
// console.log("AppProvider state is:",state);
    return(
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
            {children}
            </StateContext.Provider>
        </DispatchContext.Provider>

)
}
export{DispatchContext,AppProvider,StateContext} 
