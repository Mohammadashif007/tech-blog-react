import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs"; 

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
                <Header></Header>
            <div>
                <Blogs></Blogs>
            </div>
        </div>
    );
}

export default App;
