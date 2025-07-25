import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import {AuthProvider} from './store/auth.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <App/>
    </StrictMode>
    <ToastContainer/>
  </AuthProvider>
  
)
