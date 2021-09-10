import { useEffect } from "react";
import Routes from "../routes/routes";
import AuthRoutes from "../routes/auth.routes";
import { useSelector, useDispatch } from "react-redux";
import { readEmployeById } from "../redux/actions/employee";

export default function IsAuth() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  return (
    <>{auth.isLoggedIn ? <Routes user={user?.users} /> : <AuthRoutes />}</>
  );
}
