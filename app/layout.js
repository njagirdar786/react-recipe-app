import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar bg-gradient-to-br from-gray-700 to-gray-900">
          <h1 className="text-xl ml-4">React Weather App</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
