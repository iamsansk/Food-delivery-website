import React from 'react'
import { food_list } from '../../assets/assets'
import { Product } from '../Home Page/Products/Product'
import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'

export const DealProducts = () => {
  const { category } = useContext(StoreContext);

  return (
    <div className="products" id="products">
      {category != "Pasta" && <h1>Deals</h1>}
      {
        food_list.map(foodItem => {
          if (category === "All" || category === foodItem.category) {
            if (foodItem.type === "offer") {
              return <Product key={foodItem._id} id={foodItem._id} name={foodItem.name} price={foodItem.price} offerPrice = {foodItem.offer_price ? foodItem.offer_price : ""} image={foodItem.image} description={foodItem.description} />
            }
          }
        })
      }
    </div>
  )
}
