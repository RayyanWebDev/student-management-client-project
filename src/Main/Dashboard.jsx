import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseTeacher from "../Hooks/UseTeacher";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  const [isTeacher] = UseTeacher();
  return (
    <div className="">
      <div className="">
        <ul>
          {isAdmin ? (
            // Admin navigation links
            <>
              <li>
                <NavLink to="/dashboard/teacherRequest">
                  Teacher Request
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userss">Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allClassess">All Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adminProfile">Profile</NavLink>
              </li>
            </>
          ) : isTeacher ? (
            // Teacher navigation links
            <>
              <li>
                <NavLink to="/dashboard/addClassTeacher">Add Class</NavLink>
              </li>
              <li>
                <NavLink className="" to="/dashboard/myClassTeacher">
                  My Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/teacherProfile">Profile</NavLink>
              </li>
            </>
          ) : (
            // Default student navigation links
            <>
              <li>
                <NavLink to="/dashboard/myEnrollClass">
                  My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/studentProfile">Profile</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
