import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Providers - Top Providers",
  description: "Find Internet & TV Service Providers In Your Area",
};

export default function InternetTVLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
