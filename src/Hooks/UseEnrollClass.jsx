import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const UseEnrollClass = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes?email=${user.email}`);
      return res.data;
    },
  });
  return [classes];
};

export default UseEnrollClass;
