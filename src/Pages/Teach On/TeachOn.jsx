import React from "react";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import useTeacherInfo from "../../Hooks/useTeacherInfo";

const TeachOn = () => {
  const [teacherInfo, refetch] = useTeacherInfo();

  const axiosPublic = UseAxiosPublic();

  const { user } = UseAuth();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (user && user.email) {
      // console.log(data, user.email, user.photoURL);
      const teacherInfo = {
        email: user.email,
        photoURL: user.photoURL,
        name: data.name,
        title: data.title,
        experience: data.experience,
        category: data.category,
      };
      axiosPublic.post("/teacherInfo", teacherInfo).then((res) => {
        if (res.data.insertedId) {
          console.log("user added to the database");
          // reset();
          Swal.fire({
            title: "Custom animation with Animate.css",
            showClass: {
              popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
            },
            hideClass: {
              popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
            },
          });
          refetch();
        }
      });
    }
  };
  return (
    <div>
      <div>
        <h2 className="order-text font-medium text-center italic text-lg">
          ---Spread What U Know---
        </h2>{" "}
        <br />
        <hr className="border-2 border-solid w-96  mx-auto" />
        <br />
        <h3 className="text-center text-4xl">Become A Tutor</h3>
        <br />
        <hr className="border-2 border-solid w-96  mx-auto " />
        <br />
        <br />
      </div>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <select
          {...register("experience", { required: true })}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled>Select One</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
        <select
          {...register("category", { required: true })}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled>Select a category</option>
          <option value="webDevelopment">Web Development</option>
          <option value="ethicalHacking">Ethical Hacking</option>
          <option value="graphicsDesign">Graphics Design</option>
        </select>
        <input type="submit" />
      </form>
      <div>{teacherInfo.length} </div>
    </div>
  );
};

export default TeachOn;
