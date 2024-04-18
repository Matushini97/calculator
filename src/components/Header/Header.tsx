import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { RouteLinkNames, RoutePath } from "../../constants/routeConfig";

const Header = () => {
return (
    <div className={s.navbar}>
        <h1 className={s.text}>Calculator App</h1>
        <div className={s.links}>
            <NavLink 
                to={RoutePath.home}
                className={({ isActive }) =>
                    isActive
                      ? `${s.activeLink} ${s.link}`
                      : s.link
                  }
                  >
                    {RouteLinkNames.HOME}
            </NavLink>
            <NavLink 
                to={RoutePath.settings}
                className={({ isActive }) =>
                    isActive
                      ? `${s.activeLink} ${s.link}`
                      : s.link
                  }
                >
                    {RouteLinkNames.SETTINGS}
            </NavLink>
        </div>
    </div>
)
}

export default Header;