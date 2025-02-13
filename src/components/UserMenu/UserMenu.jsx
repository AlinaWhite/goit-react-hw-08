import { useDispatch, useSelector } from "react-redux";
import css from "../Layout/Layout.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const userData = useSelector(selectUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span className={css.span}>Hello, {userData.name}</span>
      <button type="button" onClick={onLogout} className={css.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
