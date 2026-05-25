import useScroll from "../hooks/useScroll";

import Header from "../components/Header";
import List from "../components/List";
import Counter from "../components/Counter";
import Form from "../components/Form";
import LoadingData from "../components/LoadingData";

function Home() {

    const scrollY = useScroll();


    return (

        <div className="page">

            <h2>Scroll: {scrollY}px</h2>

            <Header />

            <List>
                <List.Item name="Alice" />
                <List.Item name="Marco" />
                <List.Item name="Giulia" />
                <List.Item name="Luca" />
            </List>

            <Counter />

            <Form>
                <Form.Input
                    type="text"
                    placeholder="Inserisci nome"
                />

                <Form.Input
                    type="email"
                    placeholder="Inserisci email"
                />

                <Form.Button />
            </Form>

            <LoadingData />

        </div>

    );

}

export default Home;