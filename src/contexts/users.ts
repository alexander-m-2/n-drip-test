import { createContext } from "react";
import { User } from "../types/user";

type UserContextType = {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export const UsersContext = createContext<UserContextType>(
    {} as UserContextType
);
