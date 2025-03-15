import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Cartprovider } from './context/Cartcontext.jsx'
import { AuthProvider } from './context/Authcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Elecxo/">
    <AuthProvider>
    <Cartprovider>
    <App />
    </Cartprovider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
