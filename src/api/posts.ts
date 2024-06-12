import { POSTS_API_ENDPOINT } from "../constants/api";
import { Post } from "../types/post";

const postsCache = new Map();

export const fetchPosts = async (userId: number) => {
  const cachedPosts = postsCache.get(userId);
  if (cachedPosts) {
    return cachedPosts;
  }

  const postsResponse = await fetch(`${POSTS_API_ENDPOINT}?userId=${userId}`);
  const posts = (await postsResponse.json()) as Post[];

  postsCache.set(userId, posts);

  return posts;
};
