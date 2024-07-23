import './Products.css'
import { food_list } from '../../../assets/assets'
import { Product } from './Product'
import { useContext, useEffect, useRef } from 'react'
import { StoreContext } from '../../Context/StoreContext'

export const Products = () => {
  const { category,pagination,setPagination,productCount } = useContext(StoreContext);
  const loadButtonRef = useRef(null);
  const loadProduct = ()=>{
    pagination===productCount ? setPagination(15):setPagination(productCount);
    loadButtonRef.current.innerText= pagination===productCount ? "Show More" : "Show Less";
  }
  useEffect(()=>{
    setPagination(15);
  },[])
  return (
    <>
      <div className="products" id="products">
        <h1>Our Products Near You</h1>
        {
          food_list.slice(0,pagination).map(food => {
            if (category === "All" || category === food.category) {
              if (food.type === "default") {
                return <Product key={food._id} id={food._id} name={food.name} price={food.price} image={food.image} description={food.description} />
              }
            }
          })
        }
      </div>
      {category==="All" &&
        <div className="load__more">
        <button ref={loadButtonRef} onClick={loadProduct}>Show More</button>
      </div>
      }
    </>
  )
}
