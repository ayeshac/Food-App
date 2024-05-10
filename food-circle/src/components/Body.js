import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";

const Body = () => {
    const [restaurants,setRestaurants]=useState(restaurantList)
    return (<div className='res-body'>
      <div className='res-search'>Search</div>
      <div className="filter-btn"><button onClick={()=>{
        const filteredList=restaurants.filter(item=>item.data.avgRating>4);
        setRestaurants(filteredList)
      }}>Top Rated Restaurants</button></div>
      <div className='res-card-container'>
      {restaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    </div>)
  }

  export default Body;