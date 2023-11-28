import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import UseAuth from "../../Hooks/UseAuth";

const AdminRoute = ({ children }) => {
  const [user, loading] = UseAuth();
  const [isAdmin, isAdminLoading] = UseAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div className="flex flex-col gap-4 w-full h-96">
        <div className="skeleton w-full h-full"></div>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
