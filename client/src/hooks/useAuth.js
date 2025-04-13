// // src/hooks/useAuth.js
// import { useState, useEffect } from 'react';

// const useAuth = () => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         // Simulate fetching user data from localStorage or an API
//         const fetchUser = async () => {
//             const userData = await Promise.resolve({ name: 'Jane Doe' });
//             setUser(userData);
//         };
//         fetchUser();
//     }, []);

//     return { user };
// };

// export default useAuth;
import { useAuthContext } from "../contexts/AuthContext";
import * as authService from "../services/auth";

const useAuth = () => {
    const { currentUser } = useAuthContext();

    const login = (email, password) => authService.login(email, password);
    const signup = (email, password) => authService.signup(email, password);
    const logout = () => authService.logout();

    return {
        currentUser,
        login,
        signup,
        logout
    };
};

export default useAuth;

