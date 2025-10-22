import React, { Children, use } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/loading";
const PrivateRoute1 = ({ children }) => {
  const { user, loading, setLoading } = use(AuthContext);
 // console.log(user);
  const loaction = useLocation();
  //console.log(loaction);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={loaction.pathname} to={"/auth/login"}></Navigate>;
  }
};

export default PrivateRoute1;
