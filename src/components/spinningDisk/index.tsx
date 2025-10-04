import style from "./index.module.css";
import { createPortal } from "react-dom";
import { useDiskStore } from "../../store";
import {useState, useLayoutEffect} from "react";

type animState = "SlideIn" | "SlideOut";
const root = document.getElementById("disk-root");

export const SpinningDisk = () => {
    const { imgSrc } = useDiskStore();
    const [currSrc, setCurrSrc] = useState(imgSrc);
    const [animState, setAnimState] = useState<animState>("SlideIn");

    useLayoutEffect(() => {
        if (!imgSrc) return;
        setAnimState("SlideOut");
        const timeout = setTimeout(() => {
            setCurrSrc(imgSrc);
            setAnimState("SlideIn");
        }, 500);
        return () => clearTimeout(timeout);
    }, [imgSrc]);

    if (!root || !currSrc) return null;
    return createPortal(
        <div className={`${style.Container} ${style[animState]}`}>
            <img className={style.Disk} src={currSrc} alt="disk" />
        </div>,
        root
    );
};
