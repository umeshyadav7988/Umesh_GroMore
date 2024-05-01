import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc }) {
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card"> 
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            Looking to kickstart your {title} journey affordably? Explore our budget-friendly {title} courses at GrowMore! 
            </p>
            <NavLink to="/contact" className="btn btn-primary">
            Enroll
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
