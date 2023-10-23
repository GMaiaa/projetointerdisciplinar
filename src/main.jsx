import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import { AdminPanel } from './pages/AdminPanel';
import { New } from './pages/New';
import GlobalStyles from "./styles/global";
import { Details } from './pages/Details';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
<<<<<<< HEAD
    <AdminPanel />
=======
    <New />
>>>>>>> d620f28e5a7ce9474b1c9198c98a6b321fbc2487
  </React.StrictMode>,
)
