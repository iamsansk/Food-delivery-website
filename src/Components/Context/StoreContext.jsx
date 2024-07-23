import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [cartCount, setCartCount] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [category,setCategory] = useState("All");
    const [pagination,setPagination] = useState(15);
    const [productCount,setProductCount] = useState(0);

    //for storing user's address
    const [address, setAddress] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "addressField": "",
        "city": "",
        "state": "",
        "country": "",
        "pincode": "",
        "pNumber": "",
    })

    //Storing Cart Items data before refreshing the page or closing the tab
    window.addEventListener("beforeunload", () => {
        localStorage.setItem("Cart", JSON.stringify(cartItems));
    })
    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("Cart")) || []);
        setAddress(JSON.parse(localStorage.getItem("address")) || []);
        setProductCount(Object.keys(food_list).length);
    }, [])

    //Function for Adding cart items
    const CartAddItems = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems(prev => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    //Function for Removing Cart Items
    const RemoveCartItems = (itemId) => {
        setCartItems(prev => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };

    //Function for calculating Cart Total
    const cartTotal = () => {
        let totalPrice = 0;
        for (const item in cartItems) {
            let itemInCart = food_list.find((product) => product._id === item);
            totalPrice += itemInCart.price * cartItems[item];
        }
        return totalPrice;
    }

    //useeffect for calculating cart items count, every time cart item will be updated
    useEffect(() => {
        let sum = 0;
        for (const key in cartItems) {
            sum += cartItems[key];
        }
        setCartCount(sum);

        //Calculate Shipping fee

        if (cartTotal() < 399) {
            setShipping(49);
        }
        else {
            setShipping(0)
        }
    }, [cartItems]);

    //Exporting State variables and functions
    const ContextValue = {
        cartItems,
        setCartItems,
        CartAddItems,
        RemoveCartItems,
        cartCount,
        cartTotal,
        address,
        setAddress,
        shipping,
        setShipping,
        category,
        setCategory,
        pagination,
        setPagination,
        productCount,
    }
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;