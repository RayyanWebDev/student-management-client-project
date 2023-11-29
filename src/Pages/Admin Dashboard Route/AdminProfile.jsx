import React from "react";
import UseTeacher from "../../Hooks/UseTeacher";

const AdminProfile = () => {
  const [isTeacher] = UseTeacher();
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mb-14 bg-transparent">
        {isTeacher.map((profile) => (
          <div
            key={profile._id}
            className="card-body items-center text-center m-9 flex"
          >
            <figure className="px-10 pt-10">
              <img src={profile.photoURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <h2 className="card-title"> {profile.title} </h2>

            <p className="text-lg font-semibold">Role: Admin </p>
            <p className="text-lg font-semibold">Email: {profile.email} </p>

            <div></div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default AdminProfile;
