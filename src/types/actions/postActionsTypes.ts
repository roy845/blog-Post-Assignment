import { Comment } from "../commentTypes";
import { Post } from "../postTypes";

type CommentAndId = {
  comment: Comment;
  selectedPostId: string;
};

export type AddPostAction = {
  type: string;
  payload: Post;
};

export type SetSearchPostByTagAction = {
  type: string;
  payload: string;
};

export type SetSelectedPostAction = {
  type: string;
  payload: string;
};

export type AddCommentAction = {
  type: string;
  payload: CommentAndId;
};

export type AddCommentToSelectedPostAction = {
  type: string;
  payload: CommentAndId;
};
