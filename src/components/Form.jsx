import { useState } from "react";

function Form() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const [userData, setUserData] = useState(null);


    function handleSubmit(e) {

        e.preventDefault();

        setUserData({
            nome,
            email
        });

    }


    return (

        <div className="form-container">

            <h2>Form Utente</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Inserisci nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Inserisci email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">
                    Invia
                </button>

            </form>


            {
                userData && (

                    <div className="card">

                        <h3>Dati Inseriti</h3>

                        <p>
                            <strong>Nome:</strong> {userData.nome}
                        </p>

                        <p>
                            <strong>Email:</strong> {userData.email}
                        </p>

                    </div>

                )
            }

        </div>

    );

}

export default Form;