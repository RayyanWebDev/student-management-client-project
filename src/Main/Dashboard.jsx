import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-orange-400">
        <ul>
          <li>
            <NavLink to="/dashboard/myEnrollClass">My enroll class</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/studentProfile">Profile</NavLink>{" "}
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
