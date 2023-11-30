import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UsePayment = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { data: payments = [] } = useQuery({
    queryKey: ["classPayment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classPayment?email=${user.email}`);
      return res.data;
    },
  });
  return [payments];
};

export default UsePayment;
