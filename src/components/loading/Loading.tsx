import styles from "./styles.module.css";

export const Loading = ({
    segments = 20,
    progress = 0
}) => {
    const filledCount = Math.round(segments * progress);

    return (
        <div className={styles.Root}>
            {[...Array(segments)].map((_, i) => (
                <div
                    key={i}
                    className={
                        i < filledCount
                            ? styles.Filled
                            : styles.Empty
                    }
                />
            ))}
        </div>
    );
};
