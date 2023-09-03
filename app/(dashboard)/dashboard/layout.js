import { Inter } from "next/font/google";
import "../../(store)/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div>{children}</div>
            </body>
        </html>
    );
}
