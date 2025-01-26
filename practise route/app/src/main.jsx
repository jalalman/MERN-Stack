import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  ReactDom from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
const root = createRoot(document.getElementById('root'))
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </StrictMode>,
)
