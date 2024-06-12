import { User as UserT } from "../../../types/user";
import { RemoveCross } from "../../RemoveCross";
import classes from "./UserItem.module.css";

type UserItemProps = {
    onSelect: (id: number) => void;
    onRemove: (id: number) => void;
    onGeolocationSelect: (latitude: string, longitude: string) => void;
} & UserT;


export const UserItem = ({
    onSelect,
    onRemove,
    onGeolocationSelect,
    ...userData
}: UserItemProps) => {
    const handleRemoveUser = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        onRemove(userData.id);
    };
    const handleSelectUser = () => onSelect(userData.id);
    const handleGeolocationSelect = () =>
        onGeolocationSelect(userData.address.geo.lat, userData.address.geo.lng);

    return (
        <div className={classes.user} onClick={handleSelectUser}>
            <RemoveCross onClick={handleRemoveUser} />
            <div>{`${userData.name} ${userData.username}`}</div>
            <div>{userData.email}</div>
            <div
                onClick={handleGeolocationSelect}
            >{`Latitude: ${userData.address.geo.lat} Longitude: ${userData.address.geo.lng}`}</div>
            <div>{userData.company.name}</div>
        </div>
    );
};
