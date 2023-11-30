import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UsePayment from "../../Hooks/UsePayment";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const Payment = () => {
  //   const totalPrice = payments.reduce((total, item) => total + item.price, 0);
  const [payments] = UsePayment();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = UseAxiosPublic();
  const { user } = UseAuth();
  const handlePayment = (payment) => {
    if (user && user.email) {
      console.log(user.email, payment);
      const paid = {
        email: user.email,
        displayName: payment.displayName,

        photoURL: payment.photoURL,
        image: payment.image,
        title: payment.title,
        description: payment.description,
        price: payment.price,
      };
      axiosPublic.post("/paid", paid).then((res) => {
        console.log(res.data);
      });
    }

    axiosSecure.patch(`/classPayment/payment/${payment._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        // refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${payment.title} course is paid`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      {/* <p>{totalPrice}</p> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Course</th>

              <th>Price</th>
              <th>Payment</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={payment.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {payment.title} </div>
                    </div>
                  </div>
                </td>
                <td> {payment.price} </td>

                <th>
                  {payment.role === "paid" ? (
                    "Paid"
                  ) : (
                    <button
                      onClick={() => handlePayment(payment)}
                      className="btn btn-ghost btn-xs"
                    >
                      Pay
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;

//   const totalPrice = payments.reduce((total, item) => total + item.price, 0);
