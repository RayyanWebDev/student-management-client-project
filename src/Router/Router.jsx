import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/All Classes/AllClasses";
import TeachOn from "../Pages/Teach On/TeachOn";
import SignIn from "../Pages/Sign In/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

import PrivateRoute from "./Routes/PrivateRoute";
import Confidential from "../Pages/Confidential/Confidential";
import Dashboard from "../Pages/Dashboard/Dashboard";

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
        path: "teachOn",
        element: <TeachOn></TeachOn>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "dashBoard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "confidential",
        element: (
          <PrivateRoute>
            {" "}
            <Confidential></Confidential>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
// sffsdfsdfsfds
