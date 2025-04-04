import { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/Shared/ThemeToggle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DevJobs",
  icons: {
    icon: "/assets/favicon-32x32.png",
  },
  description: "Find your dream job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-light-gray text-foreground dark:bg-midnight dark:text-white ease-in duration-200`}>
        <div className="w-full bg-no-repeat bg-cover bg-header-pattern ">
          <div className="w-full h-[162px] md:px-24 px-6 py-8">
            <div className="flex items-start justify-between h-full">
              <Link href="/">
                <h1 className="p-0 m-0 text-4xl font-bold text-white">devjobs</h1>
              </Link>
              <ThemeToggle />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
