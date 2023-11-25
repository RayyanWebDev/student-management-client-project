import Banner from "../Banner/Banner";
import BecomeTutor from "../Become Tutor/BecomeTutor";
import Feedback from "../Feedback/Feedback";
import Partner from "../Partner/Partner";
import RecomCourse from "../RecomCourse/RecomCourse";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Partner></Partner>
      <RecomCourse></RecomCourse>
      <Feedback></Feedback>
      <BecomeTutor></BecomeTutor>
    </div>
  );
};

export default Home;
