// import Swal from "sweetalert2";
import Swal from "sweetalert2";
// import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseMyClass from "../../Hooks/UseMyClass";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [myClass] = UseMyClass();
  // const axiosSecure = UseAxiosSecure();

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosSecure.delete(`/classesInfo/${id}`).then((res) => {
  //         if (res.data.deletedCount > 0) {
  //           // refetch();
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "Your file has been deleted.",
  //             icon: "success",
  //           });
  //         }
  //       });
  //     }
  //   });
  // };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl bg-transparent border-3 border-violet-500 mx-auto">
        {myClass.map((item) => (
          <div key={item._id} className="card  w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
              <img src={item.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>Instructor: {item.displayName}</p>
              <p>Email: {item.email}</p>
              <p>Price: ${item.price}</p>
              <p>Description:{item.description}</p>
              <p>Description:{item.description}</p>
              <p>Status: {item.status}</p>
              <div className="card-actions">
                <Link to="/updateClass">
                  <button className="btn btn-primary">Update</button>
                </Link>
              </div>

              <div className="card-actions">
                {/* <button onClick={handleDelete} className="btn btn-primary">
                  Delete
                </button> */}
              </div>
              <div className="card-actions">
                <Link to="/detailAssignment">
                  <button
                    className="btn btn-primary"
                    disabled={item.status !== "approved"}
                  >
                    See Details
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
