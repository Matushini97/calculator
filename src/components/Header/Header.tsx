import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { RoutePaths } from "../../constants/routeConfig";

const Header = () => {
return (
    <div className={s.navbar}>
        <h1 className={s.text}>Calculator App</h1>
        <div className={s.links}>
            {Object.values(RoutePaths).map(
                (routePath) => {
                    return (
                        <NavLink
                            key={routePath.path}
                            to={routePath.path}
                            className={({ isActive }) =>
                                isActive
                                    ? `${s.activeLink} ${s.link}`
                                        : s.link
                            }
                            >
                            {routePath.label}
                        </NavLink>                    )
                }
            )}
        </div>
    </div>
)
}

export default Header;