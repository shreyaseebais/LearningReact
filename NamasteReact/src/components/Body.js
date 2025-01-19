import { CORS_PROXY, SWIGGY_API_URL } from "../utils/constants";
import RestautantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    //Local state variable - super powerful variable 
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    // Never put state variables inside if or for loop/any conditions 

    useEffect(()=>{
        fetchData();
    }, []);

    console.log('Body rendered ')
    
    const PROXY_URL = CORS_PROXY;
    const API_URL = SWIGGY_API_URL;
    const fetchData = async() => {
        console.log('fetchData()')
        const data = await fetch(API_URL)
       
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    return listOfRestaurants.length === 0 ?(<Shimmer/>) : (
            <div className="body">
                <div className="search m-4 p-4">
            <input
                type="text"
                className="border border-solid border-black"
                value={searchText}
                onChange={(e) => {
                setSearchText(e.target.value);
                }}
            />
            <button
                className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={() => {
                console.log(searchText);

                const filteredRestaurants = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredListOfRestaurants(filteredRestaurants);
                }}
            >
                Search
            </button>
            </div>
            <div className="restoContainer">
                { filteredRestaurants.map((el)=> 
                    <RestautantCard key={el.info.id} restoData={el}></RestautantCard>)
                }
            </div>
        </div>
    )
}

export default Body;
