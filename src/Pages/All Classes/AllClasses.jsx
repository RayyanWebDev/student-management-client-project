import React from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const AllClasses = () => {
  const { user } = UseAuth();
  const handleEnroll = (classes) => {
    if (user && user.email) {
      console.log(user.email, classes);
      const classEnroll = {
        email: user.email,
        displayName: classes.displayName,

        photoURL: classes.photoURL,
        image: classes.image,
        title: classes.title,
        description: classes.description,
        price: classes.price,
      };
      axiosPublic.post("/classes", classEnroll).then((res) => {
        console.log(res.data);
      });
    }
  };

  //

  const axiosPublic = UseAxiosPublic();
  const { data: homeClassInfos = [] } = useQuery({
    queryKey: ["hClassInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get("/hClassInfo");
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <h2 className="order-text font-medium text-center italic text-lg">
          ---Build Your Skills---
        </h2>{" "}
        <br />
        <hr className="border-2 border-solid w-96  mx-auto" />
        <br />
        <h3 className="text-center text-4xl">Enroll Right Away</h3>
        <br />
        <hr className="border-2 border-solid w-96  mx-auto " />
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {homeClassInfos.map((homeClassInfo) => (
          <div
            key={homeClassInfo._id}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img
                src={homeClassInfo.image}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center flex">
              <h2 className="card-title">{homeClassInfo.title}</h2>
              <h2>{homeClassInfo.displayName} </h2>

              <p>{homeClassInfo.price} </p>
              <p>{homeClassInfo.description}</p>
              <div className="card-actions">
                <Link to="/classDetails">
                  <button
                    onClick={() => handleEnroll(homeClassInfo)}
                    className="btn btn-primary"
                  >
                    Enroll
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
