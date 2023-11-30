import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAssignmentStudent = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { refetch, data: myAssignment = [] } = useQuery({
    queryKey: ["assignment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assignment?email=${user.email}`);
      return res.data;
    },
  });

  return [myAssignment, refetch];
};

export default UseAssignmentStudent;
