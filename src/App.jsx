import React from "react";
import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.jsx";
import Slider from "./components/Slider.jsx";
import data from "./data/data.json";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import StarProducts from "./components/StarProducts.jsx";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.jsx";
import HotAccessories from "./components/HotAccessories.jsx";
import ProductReviews from "./components/ProductReviews.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          path="/smartDevice"
          element={
            <HotAccessories
              music={data.hotAccessories.smartDevice}
              musicCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          path="/lifestyles"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
        {/* Add other routes here */}
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews ProductReviews={data.productReviews} />
    </Router>
  );
};

export default App;
