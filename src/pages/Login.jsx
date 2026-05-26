import { useForm } from "react-hook-form";

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    function onSubmit(data) {

        console.log(data);

    }


    return (

        <div className="min-h-screen flex justify-center items-start bg-base-200 pt-20">

            <div className="card bg-base-100 shadow-2xl w-full max-w-md">

                <div className="card-body">

                    <h1 className="text-4xl font-bold text-center mb-6">
                        Login
                    </h1>


                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-5"
                    >

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
                            Login
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default Login;