import {diskBlank, diskPZ, boxBlank, boxPZ, logo} from "@assets";
import {Link, Route, Routes} from "react-router-dom";
import {BlankA, BlankB} from "@pages";
import {DiskBox} from "@components";

function App() {
    return (
        <div>
            <nav style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Link to="/a">
                    <DiskBox boxImg={boxPZ} diskImg={diskPZ}/>
                </Link>
                <Link to="/b">
                    <DiskBox boxImg={boxBlank} diskImg={diskBlank}/>
                </Link>
                <p>
                    The wiki homepage is currently under development.<br/>
                    For any additional info, reach out on Discord.<br/>
                    <i>- Ecneho</i>
                </p>
            </nav>

            <img alt="logo" src={logo} height="100px"/>

            <div className="image-container">
                <div className="image image-1"></div>
                <div className="image image-2"></div>
            </div>

            <div>COMPUTER DAMNATION</div>

            <Routes>
                <Route path="/a" element={<BlankA />}/>
                <Route path="/b" element={<BlankB />}/>
            </Routes>
        </div>
    );
}

export default App
