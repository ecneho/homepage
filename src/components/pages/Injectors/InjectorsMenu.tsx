import styles from "./styles.module.css";
import { Outlet } from "react-router";
import { Submenu } from "../../features/Submenu/Submenu";
import { SubmenuLink } from "../../features/Submenu/Link/SubmenuLink.tsx";

export const InjectorsMenu = () => {
    return (
        <div className={styles.Grid}>
            <div className={`${styles.Menu}`}>
                <Submenu>
                    <SubmenuLink to={"testA"} img={"https://github.com/ecneho/pz-Injectors/blob/main/42/media/textures/item_norepinephrine.png?raw=true"} title={"item_norepinephrine"} />
                    <SubmenuLink to={"testB"} img={"https://github.com/ecneho/pz-Injectors/blob/main/42/media/textures/item_norepinephrine.png?raw=true"} title={"item_norepinephrine"} />
                    <SubmenuLink to={"testC"} img={"https://github.com/ecneho/pz-Injectors/blob/main/42/media/textures/item_norepinephrine.png?raw=true"} title={"item_norepinephrine"} />
                </Submenu>
            </div>
            <Outlet />
        </div>
    );
};