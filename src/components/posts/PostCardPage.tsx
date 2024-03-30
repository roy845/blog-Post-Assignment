import { Post } from "@/types/postTypes";
import React, { useState } from "react";
import { format } from "timeago.js";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import PostComments from "../comments/PostComments";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type PostCardPageProps = {
  selectedPost: Post;
};

const PostCardPage: React.FC<PostCardPageProps> = ({
  selectedPost,
}): React.JSX.Element => {
  const router: AppRouterInstance = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBackClick = (): void => {
    router.back();
  };

  const openComments = (): void => {
    setIsOpen(true);
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg flex flex-col">
      <div className="flex justify-between">
        <p className="text-gray-600">{format(new Date(selectedPost?.date))}</p>
        <Header sm title={selectedPost?.title} />

        <FontAwesomeIcon
          icon={faArrowRight}
          className="cursor-pointer"
          onClick={handleBackClick}
        />
      </div>
      <div>
        <strong>By</strong> <p>{selectedPost?.user}</p>
        <strong>Content</strong>
        <p style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}>
          {selectedPost?.content}
        </p>
        <strong>Tags</strong>
        <div className="flex flex-wrap gap-2 mt-4">
          {selectedPost?.tags?.split(/\s+/).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3
          onClick={() => openComments()}
          className="underline font-semibold text-end cursor-pointer"
        >
          {selectedPost?.comments?.length} Comments
        </h3>
      </div>
      <PostComments
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        comments={selectedPost?.comments}
      />
    </div>
  );
};

export default PostCardPage;
