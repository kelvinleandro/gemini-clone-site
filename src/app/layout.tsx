import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { GPTContextProvider } from "@/context/GPTContext";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gemini Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <GPTContextProvider>{children}</GPTContextProvider>
      </body>
    </html>
  );
}
