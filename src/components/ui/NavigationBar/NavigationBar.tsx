import { NavLink } from "react-router-dom";

import routes from "../../../services/routes";

import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={classes.NavigationBar}>
      <ul className={classes.NavigationBar__List}>
        {routes.map((route) => {
          return (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive, isPending }) =>
                isActive || isPending
                  ? `${classes.NavigationBar__List__Item} ${classes.NavigationBar__List__Item_Active}`
                  : `${classes.NavigationBar__List__Item}`
              }
            >
              {route.name}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;
