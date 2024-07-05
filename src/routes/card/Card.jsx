import { useContext } from "react"
import AppContext from "../../context/store/Index"
const Card = () => {
  const [ state, dispatch] = useContext(AppContext)

  const handleRemoveUser = (id) => {
    dispatch({type: "REMOVE_USER", id})
  }

  return (
    <div className="main">
      <div className="container">
        <div className="mainWrapper">
          {
            state.map((user) => {
             return (
              <>
              <div className="wrapperCard" key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <h2>{user.first_name} {user.last_name}</h2>
              <a href={user.email}>Email</a> <br />
              <button className="btn" onClick={() => handleRemoveUser(user.id)}>Remove User</button>
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

export default Card