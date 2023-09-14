import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
                <Header></Header>
            <div className="grid grid-cols-3 gap-4 container mx-auto mt-5">
                <Blogs></Blogs>
                <BookMarks></BookMarks>
            </div>
        </div>
    );
}

export default App;
