import "./globals.css";

export const metadata = {
  title: "Game Portfolio",
  description: "Filip Jerga portfolio of published games.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
