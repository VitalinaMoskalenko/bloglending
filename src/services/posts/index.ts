import axios, { AxiosResponse } from "axios";
import { Posts } from "../../types/models";
import { PostsResponseType } from "../../types/models/responses/PostsResponceType";
import { getPostByIdEndpoint, getPostsEndpoint } from "./endpoint";

export const fetchPostsService = (): Promise<PostsResponseType> => {
  return axios
    .get(getPostsEndpoint)
    .then((response: AxiosResponse<PostsResponseType>) => response)
    .catch((error) => error);
};

export const fetchPostByIdService = (id: number): Promise<Posts> => {
  return axios
    .get(getPostByIdEndpoint(id))
    .then((response: AxiosResponse<Posts>) => response.data);
};
