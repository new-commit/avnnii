import { cn } from "@/lib/cn";
import { createMetadata } from "@/lib/metadata";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = createMetadata({
  title: {
    absolute: "Avni Sharma",
    template: "Avni Sharma | %s",
  },
  description: "My personal website.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-neutral-950 text-neutral-50 max-w-2xl mx-auto dark"
        )}
      >
        {children}
      </body>
    </html>
  );
}
