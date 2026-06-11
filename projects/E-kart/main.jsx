import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
