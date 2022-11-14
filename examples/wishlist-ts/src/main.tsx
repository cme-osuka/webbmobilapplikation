import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { WishProvider } from "./contexts/WishContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WishProvider>
      <App />
    </WishProvider>
  </React.StrictMode>
)
