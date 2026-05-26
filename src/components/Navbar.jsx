import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { user } = useAuth();

    return (

        <div className="navbar bg-neutral text-neutral-content px-8 py-4 shadow-lg">

            <div className="flex-1 flex items-center gap-4">

                <Link
                    to="/"
                    className="btn btn-ghost text-lg"
                >
                    Home
                </Link>


                {
                    user && (

                        <Link
                            to="/posts"
                            className="btn btn-ghost text-lg"
                        >
                            Posts
                        </Link>

                    )
                }

            </div>


            <div className="flex items-center gap-4">

                {
                    !user && (

                        <>
                            <Link
                                to="/login"
                                className="btn btn-outline btn-md"
                            >
                                Login
                            </Link>


                            <Link
                                to="/register"
                                className="btn btn-primary btn-md"
                            >
                                Register
                            </Link>
                        </>

                    )
                }


                {
                    user && (

                        <p className="text-lg font-bold text-white">

                            Ciao {user.name}

                        </p>

                    )
                }

            </div>

        </div>

    );

}

export default Navbar;