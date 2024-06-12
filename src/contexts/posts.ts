import { createContext } from "react";
import { Post } from "../types/post";

type PostsContextType = {
    posts: Record<string, Post[]>;
    setPosts: React.Dispatch<React.SetStateAction<Record<string, Post[]>>>;
};

export const PostsContext = createContext<PostsContextType>(
    {} as PostsContextType
);
