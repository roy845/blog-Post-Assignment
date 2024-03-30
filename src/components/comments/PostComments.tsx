import React from "react";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Comment } from "@/types/commentTypes";
import NoComments from "./NoComments";
import CommentComp from "./CommentComp";
import CommentInput from "./CommentInput";
import Header from "../header/Header";

type PostCommentsProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  comments: Comment[];
};

const PostComments: React.FC<PostCommentsProps> = ({
  isOpen,
  setIsOpen,
  comments,
}): React.JSX.Element => {
  const closeModal = (): void => {
    setIsOpen(false);
  };

  const handleButtonClick = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative bg-[#0d0c22] rounded max-w-sm mx-auto p-6">
          <button
            onClick={(event) => handleButtonClick(event)}
            className="absolute top-2 left-2 text-red-600 hover:text-red-800"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {comments?.length > 0 && <Header sm title="Post Comments" />}
          {comments?.length === 0 && <NoComments />}

          <div className="mt-4 space-y-4 max-h-60 overflow-auto">
            {comments?.map((comment: Comment) => (
              <CommentComp key={comment?.id} comment={comment} />
            ))}
          </div>

          <CommentInput />
        </div>
      </div>
    </Dialog>
  );
};

export default PostComments;
