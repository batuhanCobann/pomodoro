import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStateProvider } from './store/globalState/Provider.jsx'
import { ThemeProvider, createTheme } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <GlobalStateProvider>
      <ThemeProvider theme={createTheme()}>
      <App />
      </ThemeProvider>
    </GlobalStateProvider>
  </React.StrictMode>,
)
