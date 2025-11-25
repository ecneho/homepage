import "./styles.css"
import { Routes, Route } from "react-router";
import { InjectorsMenu } from "./components/pages/Injectors/InjectorsMenu.tsx";
import { ReadYourMangaMenu } from "./components/pages/ReadYourManga/ReadYourMangaMenu.tsx";
import { MoralePatchesMenu } from "./components/pages/MoralePatches/MoralePatchesMenu.tsx";
import { InjectorsContent } from "./components/pages/Injectors/Content/InjectorsContent.tsx";
import { Viewport } from "./components/features/Viewport/Viewport.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Viewport />}>
                <Route path="injectors" element={<InjectorsMenu/>}>
                    <Route path=":injector" element={<InjectorsContent />} />
                </Route>
                <Route path="readyourmanga" element={<ReadYourMangaMenu />} />
                <Route path="moralepatches" element={<MoralePatchesMenu />} />
            </Route>
        </Routes>
    );
}

export default App;