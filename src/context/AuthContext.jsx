import {
    createContext,
    useContext,
    useState
} from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);


    function registerUser(userData) {

        setUser(userData);

    }


    function logout() {

        setUser(null);

    }


    return (

        <AuthContext.Provider
            value={{
                user,
                registerUser,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}


export {
    AuthProvider
};


export function useAuth() {

    return useContext(AuthContext);

}