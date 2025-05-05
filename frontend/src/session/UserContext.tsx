import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {getUserInfo, UserInfo} from "../services/UserService.ts";

interface UserContextType {
    user: UserInfo | null;
    isLoading: boolean;
    error: string | null;
    roles: string[];
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider:React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                setIsLoading(true);
                const userInfo = await getUserInfo();
                setUser(userInfo); // Set user info from the API
            } catch (err) {
                setError("Failed to fetch user data");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <UserContext.Provider value={{ user, isLoading, error,
            roles: user?.realm_access?.roles ?? []}}>
            {children}
        </UserContext.Provider>
    );
};

