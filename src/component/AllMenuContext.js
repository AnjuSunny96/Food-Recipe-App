import React ,{useState,useEffect}from "react"
import Loader from "./Loader";


export const AllMenuContext=React.createContext();

export const AllMenus=(props)=>{
    let [menu, setMenu] = useState([]);
    let [loading,setLoading]=useState(false)


    async function getAllTheMenu() {
        //Calling an API using Jvascript Fetch() method.For calling an API The function should be in async.
    
        setLoading(true)
        let API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URL); //await is for waiting time.
        let data = await response.json(); //json is to convert the response into machine redable format.
        setMenu(data.meals);
        setLoading(false)
      }

      useEffect(() => {
        getAllTheMenu()
      }, []);

    return(
        <AllMenuContext.Provider value={menu}>

            {!loading ? props.children :<Loader/>} 
           
        </AllMenuContext.Provider>
    )
   

}
