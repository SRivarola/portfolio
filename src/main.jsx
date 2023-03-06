import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </HashRouter>
  </React.StrictMode>,
)
