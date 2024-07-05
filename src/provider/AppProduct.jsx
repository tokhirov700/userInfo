import { useReducer } from "react"
import AppContext from "../context/store/Index"
import{ reducer, initialState} from "../context/reducer"
const AppProduct = ({children}) => {
  return (
     <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
     </AppContext.Provider>
  )
}

export default AppProduct