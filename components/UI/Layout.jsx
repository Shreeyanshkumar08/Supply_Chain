import React from "react";
import { Poppins } from "next/font/google";
import Footer from "../Credits/Footer";
import TestNav from "./TestNavbar";
import Navbar from "./Navbar";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Layout = ({ children }) => {
  return (
    <div className={`bg-white text-black ${poppins.className}`}>
      {/* <TestNav /> */}
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
