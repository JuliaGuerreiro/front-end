import api from "..";

export interface GetAllPostsResBody {
    posts: IPost[]
}

export interface IPost{
    mediaUrl?: string,
    textContent?: string,
    mediaFileId?: string;
}

export const getAllPosts = async () : Promise<{ data: GetAllPostsResBody }> => await api.get("/post/get", {})