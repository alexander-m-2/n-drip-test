import { UserItem } from "./UserItem/UserItem";
import classes from "./UsersList.module.css";
import { useUsers } from "../../hooks/users";
import { useNavigate } from "react-router";

type UsersProps = {
    setSelectedUserId: React.Dispatch<React.SetStateAction<number | null>>;
    selectedUserId: number | null;
};

export const UsersList = ({
    setSelectedUserId,
    selectedUserId,
}: UsersProps) => {
    const { users, isLoading, onRemove } = useUsers();
    const navigate = useNavigate();


    const handleRemove = (removedUserId: number) => {
        onRemove(removedUserId)
        if (selectedUserId === removedUserId) {
            setSelectedUserId(null);
        }
    }

    const handleGeolocationSelect = (latitude: string, longitude: string) => {
        navigate(`/map?lat=${latitude}&lng=${longitude}`);
    };

    return (
        <div className={classes.usersList}>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                users?.map((user) => (
                    <UserItem
                        key={user.id}
                        onSelect={(id) => setSelectedUserId(id)}
                        onRemove={handleRemove}
                        onGeolocationSelect={handleGeolocationSelect}
                        {...user}
                    />
                ))
            )}
        </div>
    );
};
