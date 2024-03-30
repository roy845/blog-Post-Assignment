import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Event",
  description: "Create new event",
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
