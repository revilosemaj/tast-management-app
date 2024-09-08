import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const robotoMono = localFont({
  src: "./fonts/RobotoMono-Regular.ttf",
  variable: "--font-roboto-mono",
  weight: "100 900",
});

const robotoBold = localFont({
  src: "./fonts/Roboto-Bold.ttf",
  variable: "--font-roboto-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Task Management App",
  description: "This is a task management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${robotoBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
