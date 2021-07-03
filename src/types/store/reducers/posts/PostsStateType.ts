import { Comments, Posts } from "../../../models";

export type PostsStateType = {
  postList: Posts[];
  selectedPostDetail: Posts | null;
  commentList: Comments[];
  likeList: Comments[];
  error: any;
  isLoading: boolean;
};
