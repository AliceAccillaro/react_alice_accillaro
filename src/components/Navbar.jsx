import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { user } = useAuth();


    return (

        <nav className="navbar">

            <Link to="/">
                Home
            </Link>


            {
                user && (

                    <Link to="/posts">
                        Posts
                    </Link>

                )
            }


            {
                !user && (

                    <>
                        <Link to="/login">
                            Login
                        </Link>

                        <Link to="/register">
                            Register
                        </Link>
                    </>

                )
            }


            {
                user && (

                    <p className="welcome">

                        Ciao {user.name}

                    </p>

                )
            }

        </nav>

    );

}

export default Navbar;