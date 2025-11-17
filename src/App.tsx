import "./styles.css"
import {Container} from "./components/container/Container.tsx";
import {Loading} from "./components/loading/Loading.tsx";
import {Chapter} from "./components/chapter/Chapter.tsx";

function App() {
    return (
        <div style={{display: "flex", gap: "5px"}}>
            <Container>
                <Container.TopLeft>
                    <Container.TopLeft.Upper>
                        <Loading progress={0.8} />
                    </Container.TopLeft.Upper>
                    <Container.TopLeft.Bottom>
                        Sub text under it
                    </Container.TopLeft.Bottom>
                </Container.TopLeft>
                <Container.TopRight>
                    Top-right text
                </Container.TopRight>
                <Container.BottomLeft>
                    構成員
                </Container.BottomLeft>
                <Container.BottomRight>
                    Bottom-right text
                </Container.BottomRight>
            </Container>
            <Chapter>
                Component
            </Chapter>
        </div>
    )
}

export default App
