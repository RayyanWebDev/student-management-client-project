import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AllClassess = () => {
  const axiosSecure = UseAxiosSecure();

  const handleRejectClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classesInfo/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleApproveClass = (classesInfo) => {
    axiosSecure.patch(`/classesInfo/class/${classesInfo._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class is Approved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const { data: classesInfos = [], refetch } = useQuery({
    queryKey: ["classesInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classesInfo");
      return res.data;
    },
  });

  return (
    <div>
      <div>
        {/*  */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Course Image</th>
                <th>User Email</th>
                <th>Title</th>
                <th>Short Description</th>
                <th>Approval</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {classesInfos.map((classInfo) => (
                <tr key={classInfo._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        {/* <div className="font-bold"> {classInfo.name} </div> */}
                      </div>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={classInfo.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td> {classInfo.email} </td>

                  <th>{classInfo.title}</th>
                  <th>{classInfo.description}</th>

                  <th>
                    <button
                      onClick={() => handleRejectClass(classInfo._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Reject
                    </button>
                    {classInfo.status === "approved" ? (
                      "Approved"
                    ) : (
                      <button
                        onClick={() => handleApproveClass(classInfo)}
                        className="btn btn-ghost btn-xs"
                      >
                        Approve
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllClassess;
{
  /* <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        {myClass.map((classes) => (
          <div key={classes._id} className="card-body items-center text-center">
            <h2 className="card-title">{classes.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        ))}
      </div> */
}
