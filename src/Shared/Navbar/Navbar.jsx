import { Link } from "react-router-dom";

const Navbar = () => {
  const NavLink = (
    <ol className="flex">
      <li>
        <Link to="/">HOME</Link>
      </li>

      <li>
        <Link to="/allClasses">All Classes</Link>
      </li>
      <li>
        <Link to="/teachOn">Teach On</Link>
      </li>

      <li>
        {" "}
        <Link to="/signIn">SIGN IN</Link>{" "}
      </li>
    </ol>
  );
  return (
    <div>
      <div className="navbar backdrop-filter bg-neutral-800/50  shadow-xl fixed z-10 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>HOME</li>

              <li>All Classes</li>
              <li>Teach On</li>

              <li>SIGN IN</li>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/NVRb87c/download-image-1700889633138.png"
              className="w-24"
              alt=""
            />
            <p className="logo">Adroit</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu menu-horizontal px-1">
            <li className="font-extrabold text-white">{NavLink}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
