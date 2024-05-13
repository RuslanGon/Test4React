import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import AppHTTPRequest from './AppHTTPRequest.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppHTTPRequest />
    {/* <App /> */}
  </React.StrictMode>,
)
