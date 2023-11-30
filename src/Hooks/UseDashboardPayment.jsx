import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseDashboardPayment = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { data: enrolled = [] } = useQuery({
    queryKey: ["paid", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/paid?email=${user.email}`);
      return res.data;
    },
  });
  return [enrolled];
};

export default UseDashboardPayment;
