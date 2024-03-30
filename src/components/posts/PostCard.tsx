"use client";
import { Post } from "@/types/postTypes";
import React, { useState } from "react";
import { format } from "timeago.js";
import PostComments from "../comments/PostComments";
import { useDispatch } from "react-redux";
import { setSelectedPostId } from "@/features/post/postSlice";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { formatDate } from "@/utils/formatDate";

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router: AppRouterInstance = useRouter();

  const openCommentsAndSetPostId = (
    event: React.MouseEvent,
    postId: string
  ): void => {
    event.stopPropagation();
    setIsOpen(true);
    dispatch(setSelectedPostId(postId));
  };

  const navigateToPostPage = (): void => {
    router.push(`/post/${post.id}`);
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg flex flex-col justify-between hover:bg-gray-500 hover:text-white cursor-pointer">
      <div>
        <p className="text-gray-600 hover:text-white">
          {format(new Date(post.date))}
        </p>
        <p className="font-bold">{post.user}</p>

        <h2 className="text-xl font-bold">{post.title}</h2>
        <br />
        <p>{formatDate(post.date)}</p>
        <br />
        <p>{post.content.substring(0, 340)}...</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.split(/\s+/).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span onClick={navigateToPostPage} className="cursor-pointer text-lg">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="ml-2">Read more</span>
        </span>
        <h3
          onClick={(event) => openCommentsAndSetPostId(event, post.id)}
          className="underline font-semibold cursor-pointer"
        >
          {post.comments.length} Comments
        </h3>
      </div>

      <PostComments
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        comments={post.comments}
      />
    </div>
  );
};

export default PostCard;
