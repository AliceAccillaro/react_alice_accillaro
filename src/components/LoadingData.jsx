import { useState, useEffect } from "react";

function LoadingData() {

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(false);


    async function fetchUsers() {

        setLoading(true);

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const data = await response.json();

            setUsers(data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    }


    return (

        <div className="loading-data">

            <h2>Utenti API</h2>

            <button onClick={fetchUsers}>
                Carica utenti
            </button>


            {
                loading && <p>Caricamento...</p>
            }


            <ul>

                {
                    users.map((user) => (

                        <li key={user.id}>

                            <strong>{user.name}</strong>

                            <p>{user.email}</p>

                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default LoadingData;