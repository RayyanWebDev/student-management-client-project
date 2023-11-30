import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseRating = () => {
  const axiosPublic = UseAxiosPublic();
  const { refetch, data: rating = [] } = useQuery({
    queryKey: ["feedPayment"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedPayment");
      return res.data;
    },
  });
  return [rating, refetch];
};

export default UseRating;
