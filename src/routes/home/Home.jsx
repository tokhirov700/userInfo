import "./Home.css"
import  data  from "../../db/data"
import { useContext } from "react"
import AppContext from "../../context/store/Index"

const Home = () => {
  const [ state, dispatch] = useContext(AppContext)

  const handleRemove = (user) => {
    const isState = state.findIndex((item) => item.id === user.id);

    if (isState) {
      dispatch({ type: "ADD_TO_CART", user });
     }
}

  return (
    <div className="main">
      <div className="container">
        <div className="mainWrapper">
          {
            data.map((user) => {
             return (
              <>
              <div className="wrapperCard" key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <h2>{user.first_name} {user.last_name}</h2>
              <a href={user.email}>Email</a> <br />
              <button className="btn" onClick={() => handleRemove(user)}>Fire User ⚡️</button>
              </div>
              </>
             )
            })
          }
        </div>
      </div>      
    </div>
  )

}

export default Home