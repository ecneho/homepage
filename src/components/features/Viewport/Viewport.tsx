import styles from './styles.module.css'
import { Outlet } from "react-router";
import { Menu } from "../Menu/Menu.tsx";
import { MenuLink } from '../Menu/Link/MenuLink.tsx';
const { VITE_INJECTORS_IMAGE_URL,
    VITE_READYOURMANGA_IMAGE_URL,
    VITE_MORALEPATCHES_IMAGE_URL
} = import.meta.env;

export const Viewport = () => {
    return (
        <div className={styles.Viewport}>
            <Menu>
                <MenuLink to="/injectors"     title="Injectors"       img={VITE_INJECTORS_IMAGE_URL}     />
                <MenuLink to="/readyourmanga" title="Read Your Manga" img={VITE_READYOURMANGA_IMAGE_URL} />
                <MenuLink to="/moralepatches" title="Morale Patches"  img={VITE_MORALEPATCHES_IMAGE_URL} />
            </Menu>
            <Outlet />
        </div>
    );
};