function List({ children }) {

    return (

        <ul className="list">
            {children}
        </ul>

    );

}


function Item({ name }) {

    return (
        <li>{name}</li>
    );

}


List.Item = Item;

export default List;