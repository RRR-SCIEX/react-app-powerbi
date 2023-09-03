import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
   

    return (
        <html lang="en">
            <head>
                <link
                    rel="shortcut icon"
                    href="/images/mainLogo-2.png"
                    type="image/x-icon"
                />
            </head>
            <body className={inter.className}>
               
                
                <div>{children}</div>
               
            </body>
        </html>
    );
}
