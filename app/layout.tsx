import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Freshness Decay Tracker – Track When Your Content Becomes Outdated",
  description: "Monitor content for outdated information, broken links, and declining search performance with AI-powered refresh suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="33685b1f-39a1-411b-bcef-2cbe71acdf3e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
