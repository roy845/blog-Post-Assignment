import { Comment } from "./commentTypes";

export type Post = {
  id: string;
  title: string;
  content: string;
  user: string;
  tags: string;
  comments: Comment[];
  date: string;
};

export type PostsState = {
  posts: Post[];
  selectedPost: Post;
  selectedPostId: string;
  searchPostByTag: string;
};
