import logo from "./logo.svg";
import "./App.css";
import MainRouter from "./routes/MainRouter";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
