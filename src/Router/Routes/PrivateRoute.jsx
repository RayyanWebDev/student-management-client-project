import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
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
      <Navigate to="/signIn" state={{ from: location }} replace></Navigate>
    </div>
  );
};

export default PrivateRoute;
