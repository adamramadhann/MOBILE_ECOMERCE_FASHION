import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DarkMode from './DarkMode.jsx'
import SaveCardContext from './SaveCardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SaveCardContext>
        <DarkMode>
          <App />
        </DarkMode>
      </SaveCardContext>
    </BrowserRouter>
  </StrictMode>,
)
