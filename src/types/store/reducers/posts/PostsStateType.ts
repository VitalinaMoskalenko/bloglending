export type PostsStateType = {
  postList: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
  error: any;
  isLoadingPosts: boolean;
};
