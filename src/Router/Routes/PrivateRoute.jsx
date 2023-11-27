import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex flex-col gap-4 w-full h-96">
        <div className="skeleton w-full h-full"></div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/signIn"></Navigate>
    </div>
  );
};

export default PrivateRoute;
