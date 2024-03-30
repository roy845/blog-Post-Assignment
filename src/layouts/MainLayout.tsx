"use client";
import Topbar from "@/components/layout/Topbar";

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Topbar />
      <div className="flex-wrap">
        <main className="flex-1 p-4">{children}</main>
      </div>
    </>
  );
}
