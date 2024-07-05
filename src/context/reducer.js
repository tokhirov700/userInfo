const initialState = JSON.parse(localStorage.getItem("cart")) || []
import { saveLocalHost } from "../utils/local"

const reducer = (state, action) => {
     switch(action.type) {
          case "ADD_TO_CART": { 
          const newState = [...state, action.user]
          saveLocalHost("cart", newState)
          return newState
          }
          case "REMOVE_USER":{ 
          const newState =  state.filter(user => user.id !== action.id) 
          saveLocalHost("cart", newState)
          return newState
          }
          default: 
               return state
     }
}


export { reducer, initialState }