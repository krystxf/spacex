import { useRouter } from "next/router";
import React from "react";
import Navbar from "./Navbar";

const Layout: React.FC<{ pathname: string }> = ({ pathname, children }) => {
  return (
    <>
      <Navbar pathname={pathname} />
      <div className="h-screen bg-white pt-12">{children}</div>
    </>
  );
};

export default Layout;
