import { PostItem } from "./PostItem/PostItem";
import { Post } from "../../types/post";
import classes from "./PostsList.module.css";

type PostsListProps = {
    userId: number;
    posts?: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Record<string, Post[]>>>;
    onPostSelect: (selectedPort: Post) => void;
};

export const PostsList = ({
    userId,
    posts,
    setPosts,
    onPostSelect,
}: PostsListProps) => {
    const onRemove = (removedPostId: number) => {
        const newPosts = posts?.filter((post) => post.id !== removedPostId);
        setPosts((prevPosts) => ({ ...prevPosts, [userId]: newPosts }));
    };

    return (
        <div className={classes.postsList}>
            {posts?.map((post) => (
                <PostItem
                    key={post.id}
                    onSelect={onPostSelect}
                    onRemove={onRemove}
                    {...post}
                />
            ))}
        </div>
    );
};
