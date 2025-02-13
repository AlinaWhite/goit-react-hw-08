import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const linkStyle = ({ isActive }) =>
    clsx({
      [css.link]: true,
      [css.linkActive]: isActive,
    });

  return (
    <nav>
      <NavLink className={linkStyle} to="/">
        Home page
      </NavLink>
      {isLoggedIn && (
        <NavLink className={linkStyle} to="/contacts">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
