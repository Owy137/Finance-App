import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FileTable from './Table.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FileTable />
  </StrictMode>,
)
