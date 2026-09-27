import "./globals.css";

export const metadata = {
  title: "FitLog",
  description: "Workout Library and Training Log",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}