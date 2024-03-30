import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login user",
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
