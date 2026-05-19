import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);


    function incrementa() {

        setCount((prev) => prev + 1);

    }

    function decrementa() {

        setCount((prev) => prev - 1);

    }


    return (

        <div className="counter">

            <h2>Contatore</h2>

            <h1>{count}</h1>

            <div className="buttons">

                <button onClick={decrementa}>
                    -
                </button>

                <button onClick={incrementa}>
                    +
                </button>

            </div>

        </div>

    );

}

export default Counter;