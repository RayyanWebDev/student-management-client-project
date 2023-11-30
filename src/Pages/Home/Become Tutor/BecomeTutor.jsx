import React from "react";
import { Link } from "react-router-dom";

const BecomeTutor = () => {
  return (
    <div className="flex items-center mb-10">
      <div className="mr-8">
        <img
          className=""
          src="https://i.ibb.co/yqGrhrJ/Freelance-Tutor1.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="font-bold text-2xl">Become An Instructor</h2>
        <p className="mb-5">
          Join the rewarding journey of online tutoring, inspire students,
          impart knowledge, and facilitate learning in a flexible, virtual
          educational environment.
        </p>
        <Link to="teachOn">
          <button className="btn btn-neutral">Start Teaching Today</button>
        </Link>
      </div>
    </div>
  );
};

export default BecomeTutor;
