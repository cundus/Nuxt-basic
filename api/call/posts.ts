import type { IUser } from "~/types/user";

export const getPosts = async (): Promise<IUser> => {
   const res = await fetch("https://jsonplaceholder.org/users");
   const data = await res.json();
   return data;
};
