import styles from "./styles.module.css";
import { NavLink } from "react-router";

interface MenuLinkProps {
    to: string;
    title: string;
    img: string;
}

export const MenuLink = ({ to, title, img }: MenuLinkProps) => {
    return (
        <NavLink to={to} className={({ isActive }) =>
            `${styles.MenuLinkContainer} ${isActive ? styles.Active : ""}`}>
            <div className={styles.Image}>
                <img src={img} alt={title} />
            </div>
            <div className={styles.Title}>{title}</div>
        </NavLink>
    );
};
