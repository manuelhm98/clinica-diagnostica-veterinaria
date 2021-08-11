import React from "react";
import Routes from "../routes/routes";
import AuthRoutes from "../routes/auth.routes";
import { useSelector } from "react-redux";

export default function IsAuth() {
  const auth = useSelector((state) => state.auth);
  return <>{auth.isLoggedIn ? <Routes /> : <AuthRoutes />}</>;
}
