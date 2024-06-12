import { useState } from "react";
import { UsersList } from "../../components/UsersList";
import { Posts } from "../../components/Posts";
import classes from './Home.module.css'

export const HomePage = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(
        null
    );

    return (
        <div className={classes.container}>
            <UsersList
                setSelectedUserId={setSelectedUserId}
                selectedUserId={selectedUserId}
            />
            {selectedUserId && <Posts userId={selectedUserId} />}
        </div>
    );
};
