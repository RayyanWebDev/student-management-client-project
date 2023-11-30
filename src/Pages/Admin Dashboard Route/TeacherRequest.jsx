import React from "react";
// import useTeacherInfo from "../../Hooks/useTeacherInfo";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const TeacherRequest = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: teacherInfos = [], refetch } = useQuery({
    queryKey: ["teacherInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get("/teacherInfo");
      return res.data;
    },
  });

  const handleRejectTeacher = (id) => {
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
        axiosSecure.delete(`/teacherInfo/${id}`).then((res) => {
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

  const handleApproveTeacher = (teacherInfo) => {
    axiosSecure.patch(`/teacherInfo/teacher/${teacherInfo._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${teacherInfo.name} is a Teacher`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      {teacherInfos.length}

      {/*  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>USer Name</th>
              <th>User Email</th>
              <th>Approval</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {teacherInfos.map((teacherInfo) => (
              <tr key={teacherInfo._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={teacherInfo.PhotoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {teacherInfo.name} </div>
                    </div>
                  </div>
                </td>
                <td> {teacherInfo.email} </td>

                <th>
                  <button
                    onClick={() => handleRejectTeacher(teacherInfo._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Reject
                  </button>
                  {teacherInfo.role === "teacher" ? (
                    "Teacher"
                  ) : (
                    <button
                      onClick={() => handleApproveTeacher(teacherInfo)}
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
  );
};

export default TeacherRequest;
