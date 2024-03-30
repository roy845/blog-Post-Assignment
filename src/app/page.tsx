"use client";
import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

export default function Home(): JSX.Element {
  const router: AppRouterInstance = useRouter();
  return (
    <MainLayout>
      <div className="h-screen flex overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-center gap-12 p-5">
          <h1 className="text-8xl text-center">Latest Posts & Events.</h1>
          <p className="text-lg text-center">
            Discover the most recent happenings and posts from Creative Thoughts
            Agency. Stay updated with our events, insights, and expert opinions.
          </p>
          <div className="flex gap-5">
            <button
              onClick={() => router.push("/posts")}
              className="px-5 py-5 min-w-[120px] cursor-pointer rounded-md border border-white bg-[#12020f] text-white hover:bg-[#060b91]"
            >
              Explore Posts
            </button>
            <button
              onClick={() => router.push("/events")}
              className="px-5 py-5 min-w-[120px] cursor-pointer rounded-md border border-black hover:bg-[#989aa6] bg-gray-300 text-black"
            >
              Upcoming Events
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/hero.gif"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </MainLayout>
  );
}
