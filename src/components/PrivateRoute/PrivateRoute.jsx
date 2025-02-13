import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
