import { Post as PostT } from "../../../types/post";
import { RemoveCross } from "../../RemoveCross";
import classes from "./PostItem.module.css";

type PostProps = {
    onRemove: (id: number) => void;
    onSelect: (post: PostT) => void;
} & PostT;



export const PostItem = ({ onRemove, onSelect, ...postData }: PostProps) => {
    const handleRemove = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        onRemove(postData.id);
    };

    const handleSelect = () => onSelect(postData);

    return (
        <div className={classes.post} onClick={handleSelect}>
            <RemoveCross onClick={handleRemove} />
            <div>{postData.title}</div>
            <div className={classes.body}>{postData.body}</div>
        </div>
    );
};
