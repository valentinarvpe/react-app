import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { ClienteApp } from './components/ClienteApp.jsx'
import { ProductoApp } from './components/ProductoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ProductoApp/>
  </React.StrictMode>,
)
