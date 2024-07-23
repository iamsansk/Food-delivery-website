import React, { useEffect } from 'react'
import './Deals.css'
import { DealsBanner } from './DealsBanner'
import { DealProducts } from './DealProducts'
import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'

export const Deals = () => {

  const { setCategory } = useContext(StoreContext);

  useEffect(()=>{
    setCategory("All");
  },[])
  return (
    <div className="deals">
      <DealsBanner/>
      <DealProducts/>
    </div>
  )
}
