import type { Metadata } from "next"
import './globalStyles/Header.css'
import './globalStyles/normalize.css'
import "./globalStyles/globals.css"
import './globalStyles/Footer.css'

export const metadata: Metadata = {
  title: "Polina",
  description: "Polina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children} {/* Только текущая активная страница */}
      </body>
    </html>
  );
}