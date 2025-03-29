import "@/app/ui/global.css";

// The app directory must include a root app/layout.js.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The root layout must define <html> and <body> tags.
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
