import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

export const ProtectedRoute = ({children}) => {
    const {cartItems} = useContext(StoreContext);
    const cartItemsCheckout = JSON.parse(localStorage.getItem("Cart")) || [];
    if(Object.keys(cartItemsCheckout).length === 0 && Object.keys(cartItems).length === 0){
        return <Navigate to="/" replace/>
    }
    return children; 
}
