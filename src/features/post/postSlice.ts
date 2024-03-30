import {
  AddPostAction,
  SetSearchPostByTagAction,
  SetSelectedPostAction,
  AddCommentAction,
  AddCommentToSelectedPostAction,
} from "@/types/actions/postActionsTypes";
import { Comment } from "@/types/commentTypes";
import { Post, PostsState } from "@/types/postTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PostsState = {
  posts: [] as Post[],
  selectedPostId: "",
  selectedPost: {} as Post,
  searchPostByTag: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    addPost(state, action: AddPostAction) {
      state.posts.push(action.payload);
      state.posts.sort((a: Post, b: Post) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      });
    },
    setSearchPostByTag(state, action: SetSearchPostByTagAction) {
      state.searchPostByTag = action.payload;
    },
    setSelectedPost(state, action) {
      const index = state.posts.findIndex((post) => post.id === action.payload);

      if (index !== -1) {
        state.selectedPost = state.posts[index];
      } else {
        throw new Error(`Post with id:${index} not found`);
      }
    },
    setSelectedPostId(state, action: SetSelectedPostAction) {
      state.selectedPostId = action.payload;
    },
    addComment(state, action: AddCommentAction) {
      const { selectedPostId, comment } = action.payload;
      const postIndex = state.posts.findIndex(
        (post) => post.id === selectedPostId
      );

      if (postIndex !== -1) {
        state.posts[postIndex].comments.push(comment);
      } else {
        throw new Error(`Post with id:${selectedPostId} not found`);
      }

      state.posts[postIndex].comments.sort((a: Comment, b: Comment) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      });
    },

    addCommentToSelectedPost(state, action: AddCommentToSelectedPostAction) {
      const { selectedPostId, comment } = action.payload;

      const postIndex = state.posts.findIndex(
        (post) => post.id === selectedPostId
      );

      if (postIndex !== -1) {
        state.posts[postIndex].comments.push(comment);

        state.posts[postIndex].comments.sort((a, b) => {
          return Number(new Date(b.date)) - Number(new Date(a.date));
        });

        state.selectedPost = state.posts[postIndex];
      } else {
        throw new Error(`Post with id:${selectedPostId} not found`);
      }
    },
  },
});

export const {
  addPost,
  addComment,
  setSearchPostByTag,
  setSelectedPostId,
  setSelectedPost,
  addCommentToSelectedPost,
} = postSlice.actions;

export default postSlice.reducer;
