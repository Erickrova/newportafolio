import { useState,useEffect } from "react";
import { createContext } from "react";
import { useTranslation } from "react-i18next"

const AppContext = createContext()

const AppProvider = ({children}) =>{

    const [t,i18n] = useTranslation("global")
    const [enabled, setEnabled] = useState(false);
    const [localStorageLan, setLocalStorageLan] = useState("es");
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
    
    useEffect(()=>{
        if(i18n){

            const localLan = localStorage.getItem("lan")
            if(!localLan){
                localStorage.setItem("lan","es")
                setLocalStorageLan("es")
            }
            if(localLan){
                setLocalStorageLan(localLan)
            }
        }
    },[i18n])
    useEffect(()=>{
        if(localStorageLan){
            i18n.changeLanguage(localStorageLan)
        }
    },[localStorageLan,i18n])

    return(
        <AppContext.Provider
            value={{
                enabled,
                setEnabled,
                localStorageLan,
                setLocalStorageLan
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