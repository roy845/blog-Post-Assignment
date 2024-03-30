import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Post",
  description: "Create new post",
};

export default function NewPostLayout({
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
