import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [restaurants, setRestaurants] = useState([])
  const [searchtext, setSearchtext] = useState("")
  const [filteredRestaurants,setFilteredResturants] = useState([])
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    console.log(json.data.cards[1])
    setRestaurants(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredResturants(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


  return restaurants.length === 0 ? <Shimmer /> : (<div className='res-body'>
    <div className='res-search'></div>
    <div className="filter-btn">
      <div className='search'>
        <input type='text' className="search-input" value={searchtext} onChange={(e) => { setSearchtext(e.target.value) }}></input>
        <button onClick={() => {
          let filteredRestaurants = restaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchtext.toLowerCase())
          )
          setFilteredResturants(filteredRestaurants)
         
          console.log(searchtext)
        }}>Search</button>
      </div>
      <button style={{ margin: '10px' }} onClick={() => {
        const filteredList = restaurants.filter(item => item.info.avgRating > 4);
        setRestaurants(filteredList)
      }}>Top Rated Restaurants</button>
    </div>
    <div className='res-card-container'>
      {filteredRestaurants.map((restaurant) => {
        return <Link to={'/restaurant/'+ restaurant?.info?.id}><RestaurantCard key={restaurant?.info?.id} {...restaurant.info} /> </Link>
      })}
    </div>
  </div>)
}

export default Body;