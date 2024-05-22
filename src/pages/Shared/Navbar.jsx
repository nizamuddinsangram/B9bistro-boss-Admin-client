import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";

import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const [cart] = useCart();
  console.log(cart, "i use tanstack query wow ");
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/drinks">Order</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaCartArrowDown />

            <div className="badge badge-secondary">{cart?.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <button
            onClick={handleLogOut}
            className="btn btn-sm bg-teal-500 border-none"
          >
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
