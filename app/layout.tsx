import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeToggle } from "./theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivansh Pandey",
  description:
    "Designer who codes. Brand, UI/UX, Graphics, Motion — and the dev to ship it. Based in Bengaluru, India.",
};

const consoleScript = `
  console.log(
    "%c Hey, you're poking around. I like that.",
    "color: white; font-size: 16px; font-weight: bold;"
  );
  console.log(
    "%c Designer who codes. Let's build something — sxivansx@duck.com",
    "color: gray; font-size: 12px;"
  );
  console.log(
    "%c 🏴‍☠️ The One Piece is real.",
    "font-size: 12px;"
  );
`;

const themeScript = `
  (function() {
    var t = localStorage.getItem('theme');
    var d = t !== 'light';
    document.documentElement.classList.add(d ? 'dark' : 'light');
    document.documentElement.classList.remove(d ? 'light' : 'dark');
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: consoleScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
