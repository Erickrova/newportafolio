import { useContext } from 'react'
import appContext from '../context/AppProvider'

const useApp = () => {
  return useContext(appContext) 
}

export default useApp