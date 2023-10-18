import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import { AdminPanel } from './pages/AdminPanel';
import { New } from './pages/New';
import GlobalStyles from "./styles/global";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <New />
  </React.StrictMode>,
)
