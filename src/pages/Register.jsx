import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Register() {

    const navigate = useNavigate();

    const { registerUser } = useAuth();


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    function onSubmit(data) {

        registerUser({
            name: data.name,
            email: data.email
        });

        navigate("/");

    }


    return (

        <div className="min-h-screen flex justify-center items-start bg-base-200 pt-20">

            <div className="card bg-base-100 shadow-2xl w-full max-w-md">

                <div className="card-body">

                    <h1 className="text-4xl font-bold text-center mb-6">
                        Register
                    </h1>


                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-5"
                    >

                        <div>

                            <input
                                type="text"
                                placeholder="Nome"
                                className="input input-bordered w-full"

                                {...register("name", {
                                    required: "Nome obbligatorio",
                                    maxLength: {
                                        value: 50,
                                        message: "Massimo 50 caratteri"
                                    }
                                })}
                            />

                            {
                                errors.name && (

                                    <p className="text-error mt-1">

                                        {errors.name.message}

                                    </p>

                                )
                            }

                        </div>


                        <div>

                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"

                                {...register("email", {
                                    required: "Email obbligatoria",
                                    maxLength: {
                                        value: 50,
                                        message: "Massimo 50 caratteri"
                                    }
                                })}
                            />

                            {
                                errors.email && (

                                    <p className="text-error mt-1">

                                        {errors.email.message}

                                    </p>

                                )
                            }

                        </div>


                        <div>

                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full"

                                {...register("password", {
                                    required: "Password obbligatoria",
                                    maxLength: {
                                        value: 50,
                                        message: "Massimo 50 caratteri"
                                    }
                                })}
                            />

                            {
                                errors.password && (

                                    <p className="text-error mt-1">

                                        {errors.password.message}

                                    </p>

                                )
                            }

                        </div>


                        <button
                            type="submit"
                            className="btn btn-primary"
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