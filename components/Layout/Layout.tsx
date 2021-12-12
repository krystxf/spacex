import { Navbar } from './Navbar';
import React from 'react';

const Layout: React.FC<{ pathname: string }> = ({ pathname, children }) => {
  return (
    <>
      <Navbar pathname={pathname} />
      <div className="h-screen pt-12 bg-black">{children}</div>
    </>
  );
};

export default Layout;
