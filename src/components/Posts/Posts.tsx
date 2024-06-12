import { useState } from "react";
import { PostsList } from "../PostsList";
import { EditPostModal } from "../EditPostModal";
import { Post } from "../../types/post";

import classes from "./Posts.module.css";
import { usePosts } from "../../hooks/posts";

type PostsProps = {
    userId: number;
};

export const Posts = ({ userId }: PostsProps) => {
    const { posts, isLoading, setPosts, updatePost } = usePosts(userId);

    const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

    const handlePostSelect = (selectedPost: Post) =>
        setSelectedPost(selectedPost);

    const handleCloseModal = () => {
        setSelectedPost(undefined);
    };

    const handleUpdatePost = (post: Post) => {
        updatePost(post)
        setSelectedPost(undefined);
    };

    return (
        <div className={classes.posts}>
            {isLoading ? (
                <div>"Loading..."</div>
            ) : (
                <PostsList
                    posts={posts[userId]}
                    setPosts={setPosts}
                    userId={userId}
                    onPostSelect={handlePostSelect}
                />
            )}

            {selectedPost && (
                <EditPostModal
                    post={selectedPost}
                    isOpen={!!selectedPost}
                    onClose={handleCloseModal}
                    onSubmit={handleUpdatePost}
                />
            )}
        </div>
    );
};
