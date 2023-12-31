import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AddClass = () => {
  const { register, handleSubmit } = useForm();

  const axiosPublic = UseAxiosPublic();

  const { user } = UseAuth();

  const onSubmit = (data) => {
    console.log(data);
    const classInfo = {
      email: user.email,
      displayName: user.displayName,
      image: data.image,
      photoURL: user.photoURL,
      title: data.title,
      description: data.description,
      price: data.price,
    };

    axiosPublic.post("/classInfo", classInfo).then((res) => {
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
        // refetch();
      }
    });
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
        <h3 className="text-center text-4xl">Add Classes</h3>
        <br />
        <hr className="border-2 border-solid w-96  mx-auto " />
        <br />
        <br />
      </div>{" "}
      <form
        className="text-center justify-center items-center content-center mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-xs text-center justify-center items-center content-center mx-auto">
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
        <div className="form-control w-full max-w-xs text-center justify-center items-center content-center mx-auto">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="text"
            placeholder="Image"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs text-center justify-center items-center content-center mx-auto">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            {...register("price", { required: true })}
            type="price"
            placeholder="$Price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs text-center justify-center items-center content-center mx-auto mb-5">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            {...register("description", { required: true })}
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* <input type="submit" /> */}{" "}
        <button type="submit" className="btn btn-neutral">
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
