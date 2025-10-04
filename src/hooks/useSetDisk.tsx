import {useDiskStore} from "@store";
import {useLayoutEffect} from "react";

export const useSetDisk = (src: string) => {
    const { setImgSrc } = useDiskStore();

    useLayoutEffect(() => {
        setImgSrc(src);
    }, [setImgSrc, src]);
}