import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

  
 
const Body = () => {
  const ListOfResturants={
    name: "Dominos",

  };


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
         onClick={()=>{
          //filter logic here
        
          
          console.log();
        }
          }>Top Rated Resturants</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default  Body;
