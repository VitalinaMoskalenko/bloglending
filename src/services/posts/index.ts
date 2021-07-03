import axios, { AxiosResponse } from "axios";
import { Posts } from "../../types/models";
import {
  PostsResponseType,
  CommentsResponseType,
} from "../../types/models/responses";
import {
  getCommentEndpoint,
  getPostByIdEndpoint,
  getPostsEndpoint,
} from "./endpoint";

export const fetchPostsService = (): Promise<PostsResponseType> => {
  return axios
    .get(getPostsEndpoint)
    .then((response: AxiosResponse<PostsResponseType>) => response)
    .catch((error) => error);
};

export const fetchPostByIdService = (id: string): Promise<Posts> => {
  return axios
    .get(getPostByIdEndpoint(id))
    .then((response: AxiosResponse<Posts>) => response.data);
};

export const fetchCommentsService = (
  id: number
): Promise<CommentsResponseType> => {
  return axios
    .get(getCommentEndpoint(id))
    .then((response: AxiosResponse<CommentsResponseType>) => response)
    .catch((error) => error);
};
