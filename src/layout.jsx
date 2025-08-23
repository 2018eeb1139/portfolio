import { Montserrat, Open_Sans } from "next/font/google";
import "./App.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Software Engineer Portfolio",
  description:
    "Professional Software Engineer Portfolio - Showcasing innovative projects and technical expertise",
  generator: "v0.app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
