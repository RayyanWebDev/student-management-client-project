import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/All Classes/AllClasses";
import TeachOn from "../Pages/Teach On/TeachOn";
import SignIn from "../Pages/Sign In/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

// import PrivateRoute from "./Routes/PrivateRoute";
// import Confidential from "../Pages/Confidential/Confidential";
import Dashboard from "../Main/Dashboard";
import MyEnrollClass from "../Pages/My Enroll Class/MyEnrollClass";
import StudentProfile from "../Pages/Profile/StudentProfile";
import TeacherRequest from "../Pages/Admin Dashboard Route/TeacherRequest";
import UserAdmin from "../Pages/Admin Dashboard Route/UserAdmin";
import AllClassess from "../Pages/Admin Dashboard Route/AllClassess";
import AdminProfile from "../Pages/Admin Dashboard Route/AdminProfile";
import PrivateRoute from "./Routes/PrivateRoute";
import AddClass from "../Pages/Teacher Dashbord Route/AddClass";
import MyClass from "../Pages/Teacher Dashbord Route/MyClass";
import TeacherProfile from "../Pages/Teacher Dashbord Route/TeacherProfile";
import ClassDetails from "../Pages/All Classes/ClassDetails";
import Payment from "../Pages/All Classes/Payment";
import Details from "../Pages/My Enroll Class/Details";
import UpdateMyClass from "../Pages/Teacher Dashbord Route/Update Class/UpdateMyClass";
import DetailsAssignment from "../Pages/Teacher Dashbord Route/Update Class/DetailsAssignment";

// import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allClasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "continue",
        element: <Details></Details>,
      },
      {
        path: "detailAssignment",
        element: <DetailsAssignment></DetailsAssignment>,
      },
      {
        path: "continueDetails",
        element: <ClassDetails></ClassDetails>,
      },
      {
        path: "classDetails",
        element: <ClassDetails></ClassDetails>,
      },
      {
        path: "updateClass",
        element: <UpdateMyClass></UpdateMyClass>,
        loader: ({ params }) =>
          fetch(
            `https://y-phi-blue.vercel.app/dashboard/myClassTeacher/${params.id}`
          ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "teachOn",
        element: (
          <PrivateRoute>
            <TeachOn></TeachOn>
          </PrivateRoute>
        ),
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "SignUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myEnrollClass",
        element: <MyEnrollClass></MyEnrollClass>,
      },

      {
        path: "studentProfile",
        element: <StudentProfile></StudentProfile>,
      },
      {
        path: "teacherRequest",
        element: <TeacherRequest></TeacherRequest>,
      },
      {
        path: "userss",
        element: <UserAdmin></UserAdmin>,
      },
      {
        path: "allClassess",
        element: <AllClassess></AllClassess>,
      },
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "addClassTeacher",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClassTeacher",
        element: <MyClass></MyClass>,
      },
      {
        path: "teacherProfile",
        element: <TeacherProfile></TeacherProfile>,
      },
    ],
  },
]);
