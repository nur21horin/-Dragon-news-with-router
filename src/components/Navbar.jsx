import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logout successfully");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-base-100">
      {/* Left section: User email */}
      <div className="font-semibold text-sm text-gray-600">
        {user && user.email}
      </div>

      {/* Middle section: Navigation links */}
      <div className="nav flex gap-6 text-accent">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:text-secondary"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:text-secondary"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:text-secondary"
          }
        >
          Career
        </NavLink>
      </div>

      {/* Right section: User and Login/Logout */}
      <div className="login-btn flex gap-4 items-center">
        <img
          src={user ? user.photoURL || userIcon : userIcon}
          alt="User"
          className="w-10 h-10 rounded-full object-cover border"
        />
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-sm text-red-500"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary btn-sm px-6">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
