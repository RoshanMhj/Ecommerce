import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          magnam delectus ad laudantium ipsa ipsum nihil maiores accusamus
          labore necessitatibus enim, esse quia quisquam a voluptates incidunt
          consectetur culpa laborum!
        </p>
      </div>
    </div>
  );
};
