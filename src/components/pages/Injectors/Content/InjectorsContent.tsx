import styles from "./styles.module.css";
import { useParams } from "react-router";

export const InjectorsContent = () => {
    const { injector } = useParams();

    return (
        <div className={styles.Menu}>
            <div>
                {injector}
            </div>
        </div>
    );
};
