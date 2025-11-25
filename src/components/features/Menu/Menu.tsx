import styles from "./styles.module.css";
import type { ReactNode } from "react";

interface MenuProps {
    children: ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
    return (
        <div className={`${styles.Menu}`}>
            { children }
        </div>
    );
};
