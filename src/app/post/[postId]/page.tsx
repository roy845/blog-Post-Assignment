"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSelectedPost } from "@/features/post/postSlice";
import MainLayout from "@/layouts/MainLayout";
import PostCardPage from "@/components/posts/PostCardPage";

const PostPage = ({
  params,
}: {
  params: { postId: string };
}): React.JSX.Element => {
  const dispatch = useAppDispatch();

  let decodedPostId: string = decodeURIComponent(params.postId);
  if (decodedPostId.endsWith("}")) {
    decodedPostId = decodedPostId.slice(0, -1);
  }

  useEffect(() => {
    dispatch(setSelectedPost(decodedPostId));
  }, [decodedPostId, dispatch]);

  const { selectedPost } = useAppSelector((state) => state.post);

  return (
    <MainLayout>
      <PostCardPage selectedPost={selectedPost} />
    </MainLayout>
  );
};

export default PostPage;
