import {diskPZ} from "@assets";
import {useSetDisk} from "@hooks";

export const BlankA = () => {
    useSetDisk(diskPZ);

    return (
        <div>
            A
        </div>
    )
}