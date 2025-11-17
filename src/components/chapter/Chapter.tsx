import styles from "./styles.module.css";
import type { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

export const Chapter = ({ children }: Props) => (
    <div className={styles.Root}>
        <div className={styles.Inner}>
            <div className={styles.Container}>
                {children}
            </div>
        </div>
    </div>
);
