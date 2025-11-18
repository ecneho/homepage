import styles from "./styles.module.css"
import common from "../common.module.css"

export const ModCard = () => {
    return (
        <>
            <div className={styles.Root}>
                <div className={`${styles.Container} ${styles.Active}`}>
                    <div className={styles.Image}>
                        <img src="https://picsum.photos/200" alt="img" />
                    </div>
                    <div className={styles.Title}>
                        Placeholder
                    </div>
                </div>
                <div className={`${styles.Container} ${styles.Inactive}`}>
                    <div className={styles.Image}>
                        <img src="https://picsum.photos/200" alt="img" />
                    </div>
                    <div className={styles.Title}>
                        Placeholder
                    </div>
                </div>
                <div className={`${styles.Container} ${styles.Inactive}`}>
                    <div className={styles.Image}>
                        <img src="https://picsum.photos/200" alt="img" />
                    </div>
                    <div className={styles.Title}>
                        Placeholder
                    </div>
                </div>
                <div className={`${styles.Test} ${styles.Inactive} ${common.TextGreen}`}>
                    <div className={styles.TitleB}>
                        <img src="https://picsum.photos/20" alt="img" />
                        Placeholder
                    </div>
                    <div>-2</div>
                </div>
                <div className={`${styles.Test} ${styles.Active} ${common.TextGreen}`}>
                    <div className={styles.TitleB}>
                        <img src="https://picsum.photos/20" alt="img" />
                        Placeholder
                    </div>
                    <div>-2</div>
                </div>
                <div className={`${styles.Test} ${styles.Inactive} ${common.TextRed}`}>
                    <div className={styles.TitleB}>
                        <img src="https://picsum.photos/20" alt="img" />
                        Placeholder
                    </div>
                    <div>+2</div>
                </div>
            </div>
            <button className={styles.Button}>
                BACK
            </button>
        </>
    );
};