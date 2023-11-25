import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop className="text-center mb-16">
      <div>
        <img src="https://i.ibb.co/b7wvYN7/Fotolia-232907658-Subscription-Monthly-M.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/47Yz0Gf/web-development-coding-programming-internet-technology-business-concept-web-development-coding-progr.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/f1jXRYG/ethical-hacking-web.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/2jQT0vg/online-IT-courses-torque-it-1500-800.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
