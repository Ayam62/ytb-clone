import { createContext, useState } from "react";
import { use } from "react";
export const Context=createContext();

const ContextProvider=(props)=>{

    const [hideName,setHideName]=useState(false)
    const[category,setCategory]=useState(0);
   

    const contextValue={
        hideName,setHideName,category,setCategory
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;



