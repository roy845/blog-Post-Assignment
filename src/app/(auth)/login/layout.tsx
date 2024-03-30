import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "All users",
};

export default function UsersLayout({
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
