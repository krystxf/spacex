import { Navbar } from './Navbar';
import React from 'react';
import { Footer } from './Footer';

const Layout: React.FC<{ pathname: string }> = ({ pathname, children }) => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar pathname={pathname} />
      <div
        className="pt-12 bg-black"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
