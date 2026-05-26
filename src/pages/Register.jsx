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

        <div className="flex justify-center mt-20">

            <div className="card bg-base-100 w-[500px] shadow-2xl">

                <div className="card-body">

                    <h1 className="text-4xl font-bold text-center">
                        Register
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5 mt-5"
                    >

                        <input
                            type="text"
                            placeholder="Nome"
                            className="input input-bordered w-full"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />

                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Registrati
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default Register;