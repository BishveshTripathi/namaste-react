import React from "react";
import ReactDOM from "react-dom/client";

/**
 * ----Do some Planning B4 making a webPage ready----
 *
 * Header (1st)
 * - Logo
 * - Nav Items
 *
 * Body (2nd)
 * - Search
 * - RestaurantContainer
 *   - RestaurantCard
 *      - Image
 *      - Start Ratings
 *      - Name of restaurant,cuisines,descriptions etc
 *      - Delevery Time
 *
 * Footer (3rd)
 * - Links
 * - Address
 * - Contact
 */

// this is inline css which is not preferred
// const styleCard = {
//   backgroundColor: "crimson",
// };

// Heder component for RestaurentCard component
const Header = () => {
  return (
    <div className="header">
      <div className="Logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFXIvlL2Ns/2/0/1600w/canva-brown-and-black-vintage-food-restaurant-logo-YASJJho2Kzw.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};

// RestaurentCard component for Body Component
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(props);
  return (
    // <div className="res-card" style={styleCard}>
    <div className="res-card" style={{ backgroundColor: "lightgrey" }}>
      <img
        className="res_logo"
        alt="res-image"
        src="https://static.toiimg.com/photo/76179976.cms"
      ></img>
      <h3>{resData.card.card.text}</h3>
      <h4>{resData.card.card.type.join(",")}</h4>
      <h4>{resData.card.card.link}</h4>
      <h4>{resData.card.card.id}</h4>
    </div>
  );
};

// object using as a dynamic data
const resList = [
  // API of cards objects are here
];

// Body component for AppLayout component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* //make RestaurantCards Component & inject here */}
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        {/* <RestaurantCard
          resName="Mc Dolands"
          cuissine="Fries,Burger,ClodDrinks"
        /> */}
      </div>
    </div>
  );
};

// AppLayout component ([{`main component`}])
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
