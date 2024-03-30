"use client";
import { logoutUser } from "@/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const AuthButton = (): React.JSX.Element => {
  const { selected } = useAppSelector((state) => state.user);

  const dispatch = useDispatch();

  const router: AppRouterInstance = useRouter();

  const logout = (): void => {
    dispatch(logoutUser(""));
    router.push("/");
  };

  const login = (): void => {
    router.push("login");
  };

  return (
    <>
      {selected ? (
        <button
          onClick={logout}
          className="px-4 py-2 bg-[#12020f] border border-white hover:bg-[#060b91] text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={login}
          className="px-4 py-2 border border-white bg-[#050738] hover:bg-[#060b91] text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Login
        </button>
      )}
    </>
  );
};

export default AuthButton;
