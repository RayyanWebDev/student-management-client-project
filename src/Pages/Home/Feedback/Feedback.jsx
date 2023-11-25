import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Feedback = () => {
  return (
    <div className="mt-10 ">
      <Carousel autoPlay infiniteLoop className="text-center mb-16 ">
        <div className="flex justify-center text-center items-center content-center">
          <div className="avatar mr-7">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/HC8GqVD/images.jpg" />
            </div>
          </div>
          <div>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quae at similique quaerat excepturi neque magnam nobis sed alias
              itaque?
            </h3>
            <p className="font-semibold mt-9">dfskjdf kjfsdlfks</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Feedback;
