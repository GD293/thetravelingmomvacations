
import "./globals.css";   // ← this line is required

export const metadata = {
  title: "The Traveling Mom Vacations",
  description: "Family-first, concierge-level trip planning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

