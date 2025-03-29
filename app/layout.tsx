import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

// The app directory must include a root app/layout.js.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The root layout must define <html> and <body> tags.
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
