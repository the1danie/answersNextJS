import localFont from "next/font/local";
import "./globals.css";

// Настраиваем шрифты
const monRegular = localFont({
    src: "/fonts/Montserrat-Regular.ttf",  // Путь должен начинаться с "/fonts/"
    variable: "--font-mon-regular",
});

const monMedium = localFont({
    src: "/fonts/Montserrat-Medium.ttf",   // Путь должен начинаться с "/fonts/"
    variable: "--font-mon-medium",
});

const monSemiBold = localFont({
    src: "/fonts/Montserrat-SemiBold.ttf",  // Путь должен начинаться с "/fonts/"
    variable: "--font-mon-semi-bold",
});

const monBold = localFont({
    src: "/fonts/Montserrat-Bold.ttf",     // Путь должен начинаться с "/fonts/"
    variable: "--font-mon-bold",
});

// Компонент RootLayout
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <title>My Next.js App</title>
            <meta name="description" content="Generated by Next.js" />
        </head>
        <body className={`${monRegular.variable} ${monMedium.variable} ${monSemiBold.variable} ${monBold.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}