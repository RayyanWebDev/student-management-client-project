import { Link } from "react-router-dom";
import UseDashboardPayment from "../../Hooks/UseDashboardPayment";

const MyEnrollClass = () => {
  const [enrolled] = UseDashboardPayment();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {enrolled.map((enroll) => (
        <div key={enroll._id} className="card w-96 bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <img src={enroll.image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{enroll.title}</h2>
            <p>{enroll.displayName}</p>
            <div className="card-actions">
              <Link to="/continue">
                <button className="btn btn-primary">Continue</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyEnrollClass;
