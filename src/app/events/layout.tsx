import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "All events",
};

export default function EventsLayout({
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
