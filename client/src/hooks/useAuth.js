// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulate fetching user data from localStorage or an API
        const fetchUser = async () => {
            const userData = await Promise.resolve({ name: 'Jane Doe' });
            setUser(userData);
        };
        fetchUser();
    }, []);

    return { user };
};

export default useAuth;
