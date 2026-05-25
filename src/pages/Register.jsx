import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Register() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const { registerUser } = useAuth();


    function handleSubmit(e) {

        e.preventDefault();

        registerUser({
            name,
            email
        });

        navigate("/");

    }


    return (

        <div className="page">

            <h1>Register</h1>

            <form
                className="auth-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Registrati
                </button>

            </form>

        </div>

    );

}

export default Register;