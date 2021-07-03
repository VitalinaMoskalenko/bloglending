import { AppStateType } from "../../../common";

const getPostListSelector = (state: AppStateType) => {
  return state.posts.postList;
};

const getPostListLoading = (state: AppStateType) => {
  return state.posts.isLoading;
};

const getPostDetailSelector = (state: AppStateType) => {
  return state.posts.selectedPostDetail;
};

const getPostDetailLoading = (state: AppStateType) => {
  return state.posts.isLoading;
};

const getCommentListSelector = (state: AppStateType) => {
  return state.posts.commentList;
};

const getCommentListLoading = (state: AppStateType) => {
  return state.posts.isLoading;
};

const getLikeListSelector = (state: AppStateType) => {
  return state.posts.likeList;
};

export {
  getPostListSelector,
  getPostListLoading,
  getPostDetailSelector,
  getPostDetailLoading,
  getCommentListSelector,
  getCommentListLoading,
  getLikeListSelector,
};
