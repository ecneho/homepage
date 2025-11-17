import styles from './styles.module.css';
import type {ReactNode} from "react";

type Props = {
    children?: ReactNode;
};

export const Container = ({ children }: Props) => {
    return <div className={styles.Root}>{children}</div>;
};

const TopLeftRoot = ({ children }: Props) => {
    return <div className={styles.TopLeft}>{children}</div>;
};

const TopLeftUpper = ({ children }: Props) => {
    return (
        <div className={styles.TopLeftUpper}>
            {children}
        </div>
    );
};

const TopLeftBottom = ({ children }: Props) => {
    return (
        <div className={styles.TopLeftBottom}>
            {children}
        </div>
    );
};

TopLeftRoot.Upper = TopLeftUpper;
TopLeftRoot.Bottom = TopLeftBottom;
Container.TopLeft = TopLeftRoot;

Container.TopRight = ({ children }: Props) => {
    return (
        <div className={styles.TopRight}>
            {children}
        </div>
    );
};

Container.BottomLeft = ({ children }: Props) => {
    return (
        <div className={styles.BottomLeft}>
            {children}
        </div>
    );
};

Container.BottomRight = ({ children }: Props) => {
    return (
        <div className={styles.BottomRight}>
            {children}
        </div>
    );
};
