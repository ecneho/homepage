import {diskBlank} from "@assets";
import {useSetDisk} from "@hooks";

export const BlankB = () => {
    useSetDisk(diskBlank);

    return (
        <div>
            B
        </div>
    )
}