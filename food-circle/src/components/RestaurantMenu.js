import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [restaurantData, setRestaurantData] = useState(null)
    useEffect(() => {
        fetchMenu();
    }, [])

    const { id } = useParams();

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json.data)
        // console.log("new",restaurantData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name)
        setRestaurantData(json.data)
    }
    return restaurantData === null ? <Shimmer /> : (
        <div className="menu">
            <h1>{restaurantData?.cards[2]?.card?.card?.info.name}</h1>
            <div className="res-details-card">
                <div className="res-details">
                    <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg></div>
                    <div>{restaurantData.cards[2]?.card?.card?.info.avgRating} ({restaurantData.cards[2]?.card?.card?.info.totalRatingsString})</div>
                    <div className="dot">•</div>
                    <div className="cost-message">{restaurantData.cards[2]?.card?.card?.info.costForTwoMessage}</div>
                </div>
                <div className="cuisines">
                    {restaurantData.cards[2]?.card?.card?.info.cuisines.map((item, key = Array.prototype.indexOf(item)) => key == restaurantData.cards[2]?.card?.card?.info.cuisines.length - 1 ? <span>{item}</span> : <span>{item},</span> )}
                </div>
                <div className="area">
                    {restaurantData.cards[2]?.card?.card?.info.areaName}
                </div>
            </div>

            <h2>Menu</h2>
            <ul>
                {restaurantData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item,key=item)=>{
                   return <li>{item?.card?.info?.name}</li>
                })

                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;