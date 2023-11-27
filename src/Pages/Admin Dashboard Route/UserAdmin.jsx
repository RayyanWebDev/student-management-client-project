import { useQuery } from "@tanstack/react-query";
import React from "react";

import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const UserAdmin = () => {
  const axiosSecure = UseAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div>
      {/* <div>UserAdmin: {users.length}</div> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>USer Name</th>
              <th>User Email</th>
              <th>Make Admin</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.PhotoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {user.name} </div>
                    </div>
                  </div>
                </td>
                <td> {user.email} </td>

                <th>
                  <button className="btn btn-ghost btn-xs">Make Admin</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAdmin;
