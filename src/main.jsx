import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CyberProvider } from './context/CyberContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CyberProvider>
        <App />
      </CyberProvider>
    </BrowserRouter>
  </StrictMode>,
)
