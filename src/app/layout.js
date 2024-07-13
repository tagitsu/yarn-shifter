import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import './globals.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Yarn-shifter App',
  description: 'A tool that helps knitters changing yarn in projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
