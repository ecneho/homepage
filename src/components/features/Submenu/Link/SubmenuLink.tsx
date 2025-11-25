import styles from './styles.module.css';
import common from '../../../common.module.css';
import { NavLink } from "react-router";

interface SubmenuLinkProps {
    to: string;
    title: string;
    img: string;
}

export const SubmenuLink = ({ to, title, img }: SubmenuLinkProps) => {
    return (
        <NavLink to={to} className={({ isActive }) =>
                `${styles.SubmenuLinkContainer} ${common.Good} ${isActive ? styles.Active : ""}`}>
            <img className={styles.Image} src={img} alt="" />
            {title}
        </NavLink>
    );
};
