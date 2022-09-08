import React from "react";

const Review = ({review}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
       
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eligendi amet tempore distinctio aliquid pariatur ratione ab blanditiis.</p>
        <div className="flex items-center">
          <img src={review.img} alt="" />
          <div className="ml-4">
            <h4 className="font-bold">{review.name}</h4>
            <h4>{review.location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
