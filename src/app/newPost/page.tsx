"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MainLayout from "@/layouts/MainLayout";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addPost } from "@/features/post/postSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import {
  MAX_CONTENT_LENGTH,
  MAX_TAGS_LENGTH,
  MAX_TITLE_LENGTH,
} from "@/constants/postsConstants";
import Header from "@/components/header/Header";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Comment } from "@/types/commentTypes";
import { Post } from "@/types/postTypes";

const postSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(
      MAX_TITLE_LENGTH,
      `Title can be up to ${MAX_TITLE_LENGTH} characters long`
    ),
  content: z
    .string()
    .min(1, "Content is required")
    .max(
      MAX_CONTENT_LENGTH,
      `Content can be up to ${MAX_CONTENT_LENGTH} characters long`
    ),
  tags: z
    .string()
    .min(1, "Tags is required")
    .max(
      MAX_CONTENT_LENGTH,
      `Tags can be up to ${MAX_TAGS_LENGTH} characters long`
    )
    .regex(
      /(^#[A-Za-z0-9-_]+(\s?#[A-Za-z0-9-_]+)*)$/,
      "Tags must start with '#' and can be concatenated like #tag1#tag2 and cannot contain spaces"
    ),
});

type PostData = z.infer<typeof postSchema>;

const NewPost = (): React.JSX.Element => {
  const { selected } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router: AppRouterInstance = useRouter();

  const [titleLength, setTitleLength] = useState<number>(0);
  const [contentLength, setContentLength] = useState<number>(0);
  const [tagsLength, setTagsLength] = useState<number>(0);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: "",
      date: new Date().toLocaleDateString(),
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setTitleLength(value.title?.length || 0);
      } else if (name === "content") {
        setContentLength(value.content?.length || 0);
      } else if (name === "tags") {
        setTagsLength(value.tags?.length || 0);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const onSubmit = (data: PostData): void => {
    let comments: Comment[] = [] as Comment[];

    const postData: Post = {
      ...data,
      id: uuidv4(),
      user: selected,
      comments: comments,
      date: new Date().toISOString(),
    };
    dispatch(addPost(postData));
    reset();
    router.push("/posts");
    toast.success("Post created successfully", { position: "bottom-left" });
  };

  if (!selected) {
    throw new Error("You must login in order to create new post");
  }

  return (
    <MainLayout>
      <Header title="Create new post" />
      <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-white text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            {...register("title")}
            maxLength={MAX_TITLE_LENGTH}
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">
              {errors.title.message}
            </p>
          )}
          <p className="text-xs text-end text-white">
            {titleLength}/{MAX_TITLE_LENGTH}
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-white text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            {...register("content")}
            maxLength={MAX_CONTENT_LENGTH}
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
          ></textarea>
          {errors.content && (
            <p className="text-red-500 text-xs italic">
              {errors.content.message}
            </p>
          )}
          <p className="text-xs text-end text-white">
            {contentLength}/{MAX_CONTENT_LENGTH}
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-white text-sm font-bold mb-2"
          >
            Tags
          </label>
          <input
            {...register("tags")}
            maxLength={MAX_TAGS_LENGTH}
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.tags && (
            <p className="text-red-500 text-xs italic">{errors.tags.message}</p>
          )}
          <p className="text-xs text-end text-white">
            {tagsLength}/{MAX_TAGS_LENGTH}
          </p>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${
              isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
            } ${
              isSubmitting ? "hover:bg-gray-700" : "hover:bg-[#060b91]"
            } text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline text-center rounded-lg ${
              isSubmitting ? "bg-gray-500" : "bg-[#050738] border border-white"
            }`}
          >
            Create Post
          </button>
        </div>
      </form>
    </MainLayout>
  );
};

export default NewPost;
