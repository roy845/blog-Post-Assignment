import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/redux-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Post blog",
  description: "Post blog assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-left" />

        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
