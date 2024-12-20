import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fontRoboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  // variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Crie suas tarefas e organize seu dia a dia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontRoboto}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
