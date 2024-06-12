import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";
import { PostsContext } from "../contexts/posts";
import { Post } from "../types/post";

export const usePosts = (userId: number) => {
    const [isLoading, setIsLoading] = useState(false);
    const { posts, setPosts } = useContext(PostsContext);

    const isPostsFetched = posts[userId] && posts[userId].length > 0;

    useEffect(() => {
        if (userId && !isPostsFetched) {
            setIsLoading(true);
            fetchPosts(userId)
                .then((posts) =>
                    setPosts((prevPosts) => ({ ...prevPosts, [userId]: posts }))
                )
                .finally(() => setIsLoading(false));
        }
    }, [userId, isPostsFetched]);

    const updatePost = (post: Post) => {
        setPosts((prevPosts) => ({
            ...prevPosts,
            [userId]: posts[userId]?.map((oldPost) =>
                oldPost.id === post.id ? post : oldPost
            ),
        }));
    }

    useEffect(() => {
        if (!userId) {
            setPosts((prevPosts) => ({ ...prevPosts, [userId]: undefined }));
        }
    }, [userId]);

    return { isLoading, posts, setPosts, updatePost };
};
