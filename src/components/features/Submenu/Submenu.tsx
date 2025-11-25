import styles from "./styles.module.css";
import type { ReactNode } from "react";

interface SubmenuProps {
    children: ReactNode;
}

export const Submenu = ({ children }: SubmenuProps) => {
    return (
        <div className={`${styles.Submenu}`}>
            { children }
        </div>
    );
};
