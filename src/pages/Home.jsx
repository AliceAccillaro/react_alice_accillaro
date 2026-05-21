import Header from "../components/Header";
import List from "../components/List";
import Counter from "../components/Counter";
import Form from "../components/Form";
import LoadingData from "../components/LoadingData";

function Home() {
    return (
        <div className="page">
            <Header />

            <List>
                <List.Item name="Alice" />
                <List.Item name="Marco" />
                <List.Item name="Giulia" />
                <List.Item name="Luca" />
            </List>

            <Counter />

            <Form>
                <Form.Input type="text" placeholder="Inserisci nome" />
                <Form.Input type="email" placeholder="Inserisci email" />
                <Form.Button />
            </Form>

            <LoadingData />
        </div>
    );
}

export default Home;