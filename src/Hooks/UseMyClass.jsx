import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const UseMyClass = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { refetch, data: myClass = [] } = useQuery({
    queryKey: ["classInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classInfo?email=${user.email}`);
      return res.data;
    },
  });

  return [myClass, refetch];
};

export default UseMyClass;
