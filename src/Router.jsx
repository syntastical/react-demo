import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

export default () => {
    return (
        <Router>
            <Routes>
                <Route path={"/class-component"} element={<ClassComponent/>} />
                <Route path={"/function-component"} element={<FunctionComponent/>} />
            </Routes>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/class-component">Class Component</Link>
                        </li>
                        <li>
                            <Link to="/function-component">Function Component</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h1>Bookkeeper!</h1>
        </div>
    );
}