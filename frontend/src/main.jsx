import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UploadButton from './Button.jsx'
import FileTable from './Table.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UploadButton />
    <FileTable />
  </StrictMode>,
)
