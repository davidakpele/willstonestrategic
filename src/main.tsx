import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WhatsAppButton from './components/WhatsAppButton.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <WhatsAppButton />
  </StrictMode>,
)
