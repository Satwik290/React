import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -logo
 * - nav items 
 * Body 
 *  - search
 *  - Resturants
 * - cuisine
 * Footer
 * - copyright
 * - links
 * - adresses
 * - contact
 * 
 */

const Header=()=>{
     return(
          <div className="header">
               <div>
                    <img className="logo" src="https://www.bing.com/images/search?q=food%20app%20logo&view=detailv2&FORM=IQFRBA&id=0B464013664FBC63157EEAD3FE72359547685D4D&selectedindex=7&&expw=512&exph=512&ccid=mguPurfz&ck=C82B705EDE5DE401691ADC0EF4A8C814&simid=607988957275384247&thid=OIP.mguPurfzVjZ1oFwEJn70JgHaHa&idpp=serp&idpbck=1"/>
               </div>
               <div className="nav-items">
                    <ul>
                      <li>Home</li>   
                      <li>About Us</li>   
                      <li>Contact US</li>   
                      <li>Cart</li>   
                    </ul>
               </div>
          </div>
     )
};


const RestaurantCard = () => {
   return (
     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
          <img className="res-logo" alt="res-logo" src="https://th.bing.com/th/id/R.58ba568b930c997ecb5f1ac13259db6d?rik=RYnLj4zmKXKc6A&riu=http%3a%2f%2fwww.theimagecompany.in%2fuploads%2ftheimagecompanycom%2f1-Boneless-Chicken-Biryani.jpg&ehk=Bx%2fQpJI7TstjcQx1%2fRIQ4wGlbGoIZ9hbrgotJPGlnDU%3d&risl=&pid=ImgRaw&r=0"/>
         <h3>Meghana Foods</h3>
         <h4>Biryani, North Indian, Asian</h4>
         <h4>4.4 stars</h4>
         <h4>40 minutes</h4>
     </div>
   )
};

const Body = () => {
     return (
          <div className="body">
               <div className="Search">
                    search
               </div>
               <div className="res-container">
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
                    <RestaurantCard />     
               </div>
          </div>
     )
};

const AppLayout =() =>{
     return <div className="app">
          <Header/>
          <Body/>
     </div>;
     
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);