import './App.css'
import {Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <nav>
                <Link to="/a">Go to A</Link> | <Link to="/b">Go to B</Link>
                <p>
                    The wiki homepage is currently under development.<br/>
                    For any additional info, reach out on Discord.<br/>
                    <i>- Ecneho</i>
                </p>
            </nav>

            <Routes>
                <Route path="/a" element={<div>A</div>} />
                <Route path="/b" element={<div>B</div>} />
            </Routes>
        </div>
    );
}

export default App
