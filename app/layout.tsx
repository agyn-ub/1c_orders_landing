import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Мобильное приложение для заказов в 1С",
  description: "Удобное мобильное приложение для отправки заказов напрямую в базу данных 1С",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${raleway.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
