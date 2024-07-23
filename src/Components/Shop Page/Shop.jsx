import React, { useContext, useEffect } from 'react'
import { Collection } from '../Home Page/Collection/Collection'
import { Products } from '../Home Page/Products/Products'
import {DealProducts} from '../Deals/DealProducts'
import { StoreContext } from '../Context/StoreContext'

export const Shop = () => {
    const {setCategory} = useContext(StoreContext);
    useEffect(()=>{
        setCategory("All");
    },[])
    return (
        <>
            <Collection/>
            <DealProducts/>
            <Products/>
        </>
    )
}
