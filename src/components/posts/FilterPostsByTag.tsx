"use client";
import { setSearchPostByTag } from "@/features/post/postSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

const FilterPostsByTag = (): React.JSX.Element => {
  const { searchPostByTag } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchPostByTag(e.target.value));
  };
  return (
    <div className="w-full max-w-xs mx-auto">
      <input
        type="text"
        value={searchPostByTag}
        onChange={handleChange}
        placeholder="Search tags..."
        className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default FilterPostsByTag;
