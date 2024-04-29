import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { RoutePaths } from "../../constants/routeConfig";

const Header = () => {
return (
    <header className={s.navbar}>
        <h1 className={s.text}>Calculator App</h1>
        <nav className={s.links}>
            {Object.values(RoutePaths).map(
                ({ label, path }) => {
                    return (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? `${s.activeLink} ${s.link}`
                                        : s.link
                            }
                            >
                            {label}
                        </NavLink>                    )
                }
            )}
        </nav>
    </header>
)
}

export default Header;