function Register() {

    return (

        <div className="page">

            <h1>Register</h1>

            <form className="auth-form">

                <input
                    type="text"
                    placeholder="Nome"
                />

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <button>
                    Registrati
                </button>

            </form>

        </div>

    );

}

export default Register;