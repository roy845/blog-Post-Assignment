"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addComment,
  addCommentToSelectedPost,
} from "@/features/post/postSlice";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";
import { MAX_COMMENT_CONTENT_LENGTH } from "@/constants/commentConstants";

const commentSchema = z.object({
  content: z
    .string()
    .min(1, "*Comment is required")
    .max(
      MAX_COMMENT_CONTENT_LENGTH,
      `*Comment must be less than ${MAX_COMMENT_CONTENT_LENGTH} characters`
    ),
});

type CommentFormData = z.infer<typeof commentSchema>;

const CommentInput = (): React.JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  });

  const { selected } = useAppSelector((state) => state.user);
  const { selectedPostId } = useAppSelector((state) => state.post);
  const [contentLength, setContentLength] = useState<number>(0);

  const dispatch = useAppDispatch();

  const pathname: string = usePathname();

  const onSubmit: SubmitHandler<CommentFormData> = (data) => {
    const comment = {
      ...data,
      id: uuidv4(),
      user: selected,
      date: new Date().toISOString(),
    };
    if (pathname.includes("/post/")) {
      dispatch(addCommentToSelectedPost({ selectedPostId, comment }));
    }

    if (pathname === "/posts") {
      dispatch(addComment({ selectedPostId, comment }));
    }

    setContentLength(0);

    reset();
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "content") {
        setContentLength(value.content?.length || 0);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <textarea
        {...register("content")}
        className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder={
          selected
            ? "Write your comment..."
            : "You have to login in order to post a comment"
        }
        maxLength={MAX_COMMENT_CONTENT_LENGTH}
        rows={2}
        disabled={!selected}
        onKeyDown={handleKeyPress}
      />
      {errors.content && (
        <p className="text-red-500 text-center">{errors.content.message}</p>
      )}
      {selected && (
        <p className="text-xs text-end text-white">
          {contentLength}/{MAX_COMMENT_CONTENT_LENGTH}
        </p>
      )}

      {selected && (
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 text-center bg-[#050738] hover:bg-[#060b91] border border-white text-white rounded-lg"
          >
            Submit Comment
          </button>
        </div>
      )}
    </form>
  );
};

export default CommentInput;
