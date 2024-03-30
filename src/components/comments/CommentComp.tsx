"use client";
import { Comment } from "@/types/commentTypes";
import React, { useState } from "react";
import { format } from "timeago.js";

type CommentCompProps = {
  comment: Comment;
};

const CommentComp: React.FC<CommentCompProps> = ({
  comment,
}): React.JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = (): void => setIsExpanded(!isExpanded);

  const MAX_LENGTH: number = 100;

  return (
    <div key={comment.id} className="flex bg-[#0d0c22] rounded-lg shadow mb-4">
      <div className="flex-grow border border-white rounded-lg">
        <p className="text-xs text-gray-500 pl-2">
          {format(new Date(comment.date))}
        </p>
        <p className="font-semibold pl-2">{comment.user}</p>
        <div
          style={{
            paddingLeft: 4,
            wordWrap: "break-word",
            overflowWrap: "break-word",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {isExpanded || comment.content.length <= MAX_LENGTH
            ? comment.content
            : `${comment.content.substring(0, MAX_LENGTH)}... `}
          {comment.content.length > MAX_LENGTH && (
            <button
              onClick={toggleExpand}
              className="text-blue-500 hover:text-blue-700 text-xs"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentComp;
