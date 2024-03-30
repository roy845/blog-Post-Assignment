"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { loginUser } from "@/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const loginSchema = z.object({
  username: z.string().min(1, "*Username is required"),
});

type LoginData = z.infer<typeof loginSchema>;

const LoginComp = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { selected } = useAppSelector((state) => state.user);
  const router: AppRouterInstance = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (selected) {
      router.replace("/");
    }
  }, [selected, router]);

  const onSubmit = (data: LoginData) => {
    dispatch(loginUser(data.username));
    reset();
    router.replace("/");
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username")}
          type="text"
          placeholder="Enter username to login"
          className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
        <div className="text-center mt-5">
          <button
            type="submit"
            className="px-4 py-2 text-center bg-[#050738] hover:bg-[#060b91] border border-white text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComp;
