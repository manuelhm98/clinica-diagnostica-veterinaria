import { useEffect } from "react";
import NavbarOptions from "../components/Layout/NavbarOptions";
import { useDispatch, useSelector } from "react-redux";
import { readEmployeById } from "../redux/actions/employee";
import { checkRole } from "../utils/checkRole";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return dispatch(readEmployeById(auth?.user?.userid));
  }, [dispatch, auth]);
  return (
    <div className="flex flex-no-wrap overflow-hidden">
      <NavbarOptions user={user?.users} />
      <div className="container ml-72 mx-auto py-10 md:w-4/5 w-11/12 px-6 overflow-auto">
        <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
