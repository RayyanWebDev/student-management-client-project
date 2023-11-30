import { useForm } from "react-hook-form";
import UseAssignmentStudent from "../../Hooks/UseAssignmentStudent";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const Details = () => {
  const [myAssignment] = UseAssignmentStudent();
  const { register, handleSubmit } = useForm();
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();

  const onSubmit = (data) => {
    console.log(data);
    const ratingInfo = {
      email: user.email,
      displayName: user.displayName,

      photoURL: user.photoURL,

      description: data.description,
      rating: data.rating,
    };

    axiosPublic.post("/feedPayment", ratingInfo).then((res) => {
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

  const handleAssignment = (assigned) => {
    if (user && user.email) {
      console.log(user.email, assigned);
      const assignmentPost = {
        email: user.email,
        displayName: assigned.displayName,

        title: assigned.title,
        description: assigned.description,
        deadline: assigned.deadline,
      };
      axiosPublic.post("/assignmentPost", assignmentPost).then((res) => {
        console.log(res.data);
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
        <div className="form-control w-full max-w-xs text-center justify-center items-center content-center mx-auto mb-5">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            {...register("rating", { required: true })}
            type="text"
            placeholder="rating"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* <input type="submit" /> */}{" "}
        <button type="submit" className="btn btn-neutral">
          Add Class
        </button>
      </form>
      {myAssignment.map((myAssignments) => (
        <div
          key={myAssignments._id}
          className="card w-96 bg-base-100 shadow-xl "
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">{myAssignments.title}</h2>
            <p>{myAssignments.description}</p>
            <p>{myAssignments.deadline}</p>
            <div className="card-actions">
              <button
                onClick={() => handleAssignment(myAssignment)}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
