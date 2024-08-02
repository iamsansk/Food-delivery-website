import './Collection.css'
import { menu_list } from '../../../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

export const Collection = () => {
  const {category,setCategory,setPagination} = useContext(StoreContext);
  const handleCollectionClick = (menuName)=>{
    setCategory((prev)=>{
      if(prev===menuName){
        setPagination(15);
        return "All";
      }
      else{
        setPagination(30);
        return menuName;
      }
    })
  }
  return (
    <div className="collections">
        <h1>Our Collections</h1>
        <div className="collection-list">
          {
            menu_list.map((menu,index)=>(
              <div className='menus' key={index} onClick={()=>handleCollectionClick(menu.menu_name)}>
                <img key={index} src={menu.menu_image} alt={menu.menu_name} className={category==menu.menu_name?"active":""}/>
                <p>{menu.menu_name}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}
