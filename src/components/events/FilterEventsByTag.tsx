"use client";
import { setSearchEventByTag } from "@/features/event/eventSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

const FilterEventsByTag = (): React.JSX.Element => {
  const { searchEventByTag } = useAppSelector((state) => state.event);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchEventByTag(e.target.value));
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <input
        type="text"
        value={searchEventByTag}
        onChange={handleChange}
        placeholder="Search tags..."
        className="mt-1 block border w-full px-3 py-2 border-white bg-[#0d0c26] rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default FilterEventsByTag;
