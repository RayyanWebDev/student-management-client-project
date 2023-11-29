import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseTeacher = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { data: isTeacher } = useQuery({
    queryKey: [user?.email, "isTeacher"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/teacherInfo/teacher/${user.email}`);
      console.log(res.data);
      return res.data?.teacher;
    },
  });
  return [isTeacher];
};

export default UseTeacher;
