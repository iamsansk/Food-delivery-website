import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    const {cartItems} = useContext(StoreContext);
    const orderedItems = JSON.parse(sessionStorage.getItem("order")) || [];
    if(Object.keys(cartItems).length === 0){
        return <Navigate to="/" replace/>
    }
    return children; 
}
