import { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

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
        <div className="bg-header-pattern bg-cover bg-no-repeat w-full ">
          <div className="w-full h-[162px] md:px-24 px-6 py-8">
            <div className="flex h-full justify-between items-start">
              <h1 className="text-4xl font-bold text-white p-0 m-0">devjobs</h1>
              <ThemeToggle />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
