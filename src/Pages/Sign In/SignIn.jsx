import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const SignIn = () => {
  // const handleSignIn = (e) => {
  //     e.preventDefault();
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     console.log(email, password);
  //     signInUser(email, password)
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  // const { signInUser, signInWithGoogle } = useContext(AuthContext);
  // const hangleGoogle = () => {
  //     signInWithGoogle()
  //       .then((result) => {
  //         console.log(result.user);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  const { signIn } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Custom animation with Animate.css",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
      });
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/b7wvYN7/Fotolia-232907658-Subscription-Monthly-M.jpg)",
        }}
      >
        <div className="card flex-shrink-0 w-full max-w-sm bg-neutral-800/50 backdrop-filter    shadow-xl ">
          <form onSubmit={handleSignIn} className="card-body">
            <h3 className="text-3xl font-bold text-white mb-6 mt-6">Sign In</h3>
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control ">
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn but btn-primary">Sign In</button>
            </div>
            {/* <button onClick={hangleGoogle} className="btn but btn-primary">
              Sign In with Google
            </button> */}
            <p className="mt-14 mb-14">
              <span className="text-white">
                {" "}
                New to <span className="logo1">Adroit</span> ?
              </span>{" "}
              <Link to="/SignUp">
                {" "}
                <button className="sign">Sign Up </button>{" "}
                <span className="text-white">Now</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
