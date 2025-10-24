import { StrictMode , useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FileTable from './Table.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
