import Navbar from "./components/Navbar";
import Header from "./components/Header";
import List from "./components/List";
import Counter from "./components/Counter";
import Form from "./components/Form";

import "./index.css";

function App() {
    const names = [
        "Alice",
        "Marco",
        "Giulia",
        "Luca"
    ];

    return (
        <>
            <Navbar />
            <Header />
            <List names={names} />

            <Counter />
            <Form />
        </>
    );
}

export default App;