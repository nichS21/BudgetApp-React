import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import './css/App.css'

/*
* Entry point of the React application.
* This is where the 'App' React/TS function is injected into the 'index.html' file
*/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
