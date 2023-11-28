import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
// import UseAxiosSecure from "./UseAxiosSecure";

const useTeacherInfo = () => {
  //   const axiosSecure = UseAxiosSecure();
  const axiosPublic = UseAxiosPublic();
  const { refetch, data: teacherInfo = [] } = useQuery({
    queryKey: ["teacherInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get("/teacherInfo");
      return res.data;
    },
  });
  return [teacherInfo, refetch];
};

export default useTeacherInfo;
