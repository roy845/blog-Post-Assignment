"use client";
import Header from "@/components/header/Header";
import MainLayout from "@/layouts/MainLayout";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): React.JSX.Element {
  const router: AppRouterInstance = useRouter();
  return (
    <MainLayout>
      <main className="flex h-full flex-col items-center justify-center">
        <Header sm title={error.message} />
        <button
          className="mt-4 rounded-md bg-[#050738] hover:bg-[#060b91] border border-white px-4 py-2 text-sm text-white transition-colors"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </main>
    </MainLayout>
  );
}
