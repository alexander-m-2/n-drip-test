import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api/users";

import { UsersContext } from "../contexts/users";

export const useUsers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { users, setUsers } = useContext(UsersContext);

    const isUserFetched = users?.length > 0;

    useEffect(() => {
        if (!isUserFetched) {
            setIsLoading(true);
            fetchUsers()
                .then((users) => setUsers?.(users))
                .finally(() => setIsLoading(false));
        }
    }, [isUserFetched]);

    useEffect(() => {
        return () => localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const onRemove = (removedUserId: number) => {
        const newUsers = users?.filter((user) => user.id !== removedUserId);
        setUsers(newUsers);
    }


    return { users, setUsers, isLoading, onRemove };
};
