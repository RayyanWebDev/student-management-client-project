import { Link } from "react-router-dom";
import UseEnrollClass from "../../Hooks/UseEnrollClass";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const ClassDetails = () => {
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const [classes] = UseEnrollClass();
  const handlePayment = (payments) => {
    if (user && user.email) {
      console.log(user.email, classes);
      const classPayment = {
        email: user.email,
        displayName: payments.displayName,

        photoURL: payments.photoURL,
        image: payments.image,
        title: payments.title,
        description: payments.description,
        price: payments.price,
      };
      axiosPublic.post("/classPayment", classPayment).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <div>
      <div>
        <h2 className="order-text font-medium text-center italic text-lg">
          ---Build Your Skills---
        </h2>{" "}
        <br />
        <hr className="border-2 border-solid w-96  mx-auto" />
        <br />
        <h3 className="text-center text-4xl">Course Plans</h3>
        <br />
        <hr className="border-2 border-solid w-96  mx-auto " />
        <br />
        <br />
      </div>

      <div>
        {classes.map((items) => (
          <div
            key={items._id}
            className="card-body items-center text-center m-9 "
          >
            <figure className="px-10 pt-10">
              <img src={items.photoURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center flex">
              <h2 className="card-title">Title:{items.title}</h2>

              <p>Price: ${items.price} </p>
              <p> Instructor Name: {items.displayName}</p>
              <p> Description:</p>
              <p className="font-semibold">{items.description} </p>
              <div className="card-actions">
                <Link to="/payment">
                  <button
                    onClick={() => handlePayment(items)}
                    className="btn btn-primary"
                  >
                    Payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassDetails;
