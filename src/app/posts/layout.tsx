import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "All posts",
};

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
