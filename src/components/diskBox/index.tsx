import style from "./index.module.css";

interface BoxProps {
    boxImg: string;
    diskImg: string;
}

export const DiskBox = ({boxImg, diskImg}: BoxProps) => {
    return (
        <div className={style.Container}>
            <img className={style.Box} src={boxImg} alt="box"/>
            <img className={style.Disk} src={diskImg} alt="disk"/>
        </div>
    )
}