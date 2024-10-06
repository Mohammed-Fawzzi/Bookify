import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "./(Components)/Navbar/Navbar";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: "Bookify",
  description:
    "Book Finder App using NextJs 14, The NYTimes API and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#F2F5FB]">
      <body className={fredoka.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
