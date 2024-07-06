import Cookies from "./components/Cookies";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Tusonrisai Deal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Cookies/> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}