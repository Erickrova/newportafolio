import { useState,useEffect } from "react";
import { createContext } from "react";

const AppContext = createContext()

const AppProvider = ({children}) =>{

    const [enabled, setEnabled] = useState(false);
    const [theme, setTheme] = useState(false);


    useEffect(()=>{
        const theme = localStorage.getItem("theme") ?? "ligth"
        if(theme && theme == "dark"){
            setEnabled(true)
        }else{
            setEnabled(false)
        }
        setTheme(true)
    },[])

    useEffect(()=>{
        if(theme){

            if(enabled){
                document.documentElement.classList.add('dark')
                localStorage.setItem("theme","dark")       
            }else{
                document.documentElement.classList.remove('dark')
                localStorage.setItem("theme","ligth")       
            }
        }
    },[enabled,theme])

    return(
        <AppContext.Provider
            value={{
                enabled,
                setEnabled
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export{
    AppProvider
}
export default AppContext