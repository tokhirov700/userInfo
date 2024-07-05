import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppProduct from './provider/AppProduct.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProduct>    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProduct>
)
