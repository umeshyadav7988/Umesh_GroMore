import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc }) {
  // props as arguments: title and imgsrc. The title prop represents the title of the card, and imgsrc is the URL of the image to be displayed on the card.
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
      {/* This div element defines the card's container and sets its width and alignment. It's using Bootstrap classes to style the card's layout. The card will take up 4 columns on medium-sized screens and be centered horizontally on all screen sizes. */}
        <div className="card"> {/* It's using Bootstrap's "card" class to style the card. */}
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            Looking to kickstart your {title} journey affordably? Explore our budget-friendly {title} courses at Growmore! 
            </p>
            <NavLink to="/contact" className="btn btn-primary">
            Get Quote
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
