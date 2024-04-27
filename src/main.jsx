import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContextProvider from './context/AppContext'
import FilterContextProvider from './context/FilterContext.jsx'
import CartContextProvider from './context/CartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render( 
    <AppContextProvider>
        <FilterContextProvider>
            <CartContextProvider>
        <App />
            </CartContextProvider>
        </FilterContextProvider>
    </AppContextProvider>
)
