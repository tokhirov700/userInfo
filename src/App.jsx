import { Routes , Route } from 'react-router-dom'
import './App.css'
import Home  from "./routes/home/Home"
import Card  from "./routes/card/Card"
import Nav from "./components/Nav"
function App() {

  return (
  <>
      <Nav />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="card" element={<Card/>} />
    </Routes>
  </>
  )
}

export default App
