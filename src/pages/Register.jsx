import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/Authprovider";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.name.value.trim();
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Name validation
    if (fullName.length < 5) {
      setError("Name should be at least 5 characters long");
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear previous error if valid
    setError("");

    createUser(email, password)
      .then((r) => {
        const user = r.user;
        updateUser({ displayName: fullName, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: fullName, photoURL: photo });
            navigate("/");
          })
          .catch((e) => {
            console.log(e);
            setUser(user);
          });
        console.log("Registered user:", user);
        setUser(user);
        form.reset();
      })
      .catch((e) => {
        console.error(e.code, e.message);
        setError(e.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="font-semibold text-2xl text-center mt-3">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Full Name"
              required
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            {/* Confirm Password */}
            <label className="label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="input"
              placeholder="Confirm Password"
              required
            />

            {/* Error message */}
            {error && <p className="text-xs text-error mt-1">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>

          <p className="text-center text-semibold">
            Already have an account?{" "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
