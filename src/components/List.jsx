function List({ children }) {

    return (

        <div className="flex justify-center mb-20">

            <ul className="menu bg-base-100 rounded-box w-80 shadow-xl text-black text-2xl p-6">

                {children}

            </ul>

        </div>

    );

}


function Item({ name }) {

    return (

        <li>
            <a>{name}</a>
        </li>

    );

}


List.Item = Item;

export default List;