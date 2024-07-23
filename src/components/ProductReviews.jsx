import React from "react";
import ProductReviewCard from "./ProductReviewCard.jsx";
import "../styles/ProductReviews.css"
const ProductReviews = ({ ProductReviews }) => {
  return (
    <div className="ProductReviews">
      {ProductReviews.map((item, index) => (
        <ProductReviewCard
          key={item.image}
          price={item.price}
          index={index}
          name={item.name}
          image={item.image}
          review={item.review}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
