import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from "./styles/global";
import { Routes } from './routes';
import { CartContext } from "./Context/CartContext";

function App() {
 const [isClicked, setIsClicked] = useState(false);
 const [items, setItems] = useState([]);
 const [itemsCount] = useState(0);


 return (
   <CartContext.Provider value={{  isClicked, setIsClicked, itemsCount: items.length }}>
     <React.StrictMode>
       <GlobalStyles />
       <Routes />
     </React.StrictMode>
   </CartContext.Provider>
 );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);