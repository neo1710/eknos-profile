import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";

export const metadata: Metadata = {
  title: "Eknos India | Corporate Events, MICE & Global Travel",
  description: "End-to-end corporate events, MICE, travel and destination management by Eknos India.",
  icons: {
    icon: "/companyprofile/eknos_logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
