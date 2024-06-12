import { USERS_API_ENDPOINT } from "../constants/api";
import { User } from "../types/user";

export const fetchUsers = async () => {
  const usersResponse = await fetch(USERS_API_ENDPOINT);
  const users = (await usersResponse.json()) as User[];

  return users;
};
