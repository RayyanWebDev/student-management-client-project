import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useLoaderData } from "react-router-dom";

const UpdateMyClass = () => {
  const { title, description, image, price, _id } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const onSubmit = (data) => {
    if (user && user.email) {
      // console.log(data, user.email, user.photoURL);
      const classInfo = {
        image: data.image,
        description: data.description,
        price: data.price,

        title: data.title,
      };
      axiosSecure.patch(`/classesInfo/${_id}`, classInfo).then((res) => {
        if (res.data.modifiedCount > 0) {
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
          //   refetch();
        }
      });
    }
  };
  return (
    <div>
      <div>
        <h2 className="order-text font-medium text-center italic text-lg">
          ---Upgrade---
        </h2>{" "}
        <br />
        <hr className="border-2 border-solid w-96  mx-auto" />
        <br />
        <h3 className="text-center text-4xl">Update Data</h3>
        <br />
        <hr className="border-2 border-solid w-96  mx-auto " />
        <br />
        <br />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            {...register("image", { required: true })}
            defaultValue={image}
            type="text"
            placeholder="Image"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            {...register("price", { required: true })}
            type="text"
            defaultValue={price}
            placeholder="Price"
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
            defaultValue={title}
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            {...register("description", { required: true })}
            type="text"
            defaultValue={description}
            placeholder="description"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default UpdateMyClass;
