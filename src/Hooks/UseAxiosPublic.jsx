import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://y-phi-blue.vercel.app",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
