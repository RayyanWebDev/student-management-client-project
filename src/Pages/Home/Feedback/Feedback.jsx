import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import UseRating from "../../../Hooks/UseRating";

const Feedback = () => {
  const [rating] = UseRating();

  return (
    <div className="mt-10 ">
      <Carousel autoPlay infiniteLoop className="text-center mb-16 ">
        {rating.map((ratings) => (
          <div
            key={ratings._id}
            className="flex justify-center text-center items-center content-center"
          >
            <div className="avatar mr-7">
              <div className="w-24 rounded-full">
                <img src={ratings.photoURL} />
              </div>
            </div>
            <div>
              <h3>{ratings.description}</h3>
              <p className="font-semibold mt-9">{ratings.displayName}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Feedback;
