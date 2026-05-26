import { useState } from "react";

function LoadingData() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchUsers() {
        setLoading(true);

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        setUsers(data);
        setLoading(false);
    }

    return (
        <div className="card bg-base-100 shadow-xl w-full max-w-xl mx-auto mb-20">
            <div className="card-body">
                <h2 className="card-title text-2xl">Utenti API</h2>

                <button onClick={fetchUsers} className="btn btn-secondary">
                    Carica utenti
                </button>

                {loading && <p>Caricamento...</p>}

                <ul className="space-y-3">
                    {users.map((user) => (
                        <li key={user.id} className="bg-base-200 p-4 rounded-xl">
                            <strong>{user.name}</strong>
                            <p>{user.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LoadingData;