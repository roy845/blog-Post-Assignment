"use client";
import Header from "@/components/header/Header";
import FilterPostsByTag from "@/components/posts/FilterPostsByTag";
import NoPosts from "@/components/posts/NoPosts";
import PostCard from "@/components/posts/PostCard";
import MainLayout from "@/layouts/MainLayout";
import { useAppSelector } from "@/redux/hooks";
import { Post } from "@/types/postTypes";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@/components/tooltip/Tooltip";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const Posts = (): React.JSX.Element => {
  const { posts, searchPostByTag } = useAppSelector((state) => state.post);
  const { selected } = useAppSelector((state) => state.user);
  const router: AppRouterInstance = useRouter();

  const filteredPosts: Post[] = posts.filter((post) =>
    post.tags.toLowerCase().includes(searchPostByTag.toLowerCase())
  );

  const navigateToNewPost = (): void => {
    router.push("/newPost");
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center">
        {posts.length > 0 && (
          <>
            <Header title="Posts" />
            <div className="p-2 mt-5">
              <Tooltip content="Add new post">
                {selected && (
                  <button onClick={navigateToNewPost} className="text-center">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                )}
              </Tooltip>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col items-center">
        {posts.length > 0 && <FilterPostsByTag />}

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
            {filteredPosts.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <>
            <NoPosts />
            <div className="p-2">
              <Tooltip content="Add new post">
                {selected && posts.length === 0 && (
                  <button onClick={navigateToNewPost} className="text-center">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                )}
              </Tooltip>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Posts;
