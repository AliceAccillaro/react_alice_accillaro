function Login() {
    return (
        <div className="min-h-screen flex justify-center items-start bg-base-200 pt-20">
            <div className="card bg-base-100 shadow-2xl w-full max-w-md">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center mb-6">
                        Login
                    </h1>

                    <form className="flex flex-col gap-5">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                        />

                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;