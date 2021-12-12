import Navbar from './Navbar';
import React, { useRef, useState, useCallback, useLayoutEffect } from 'react';

const Layout: React.FC<{ pathname: string }> = ({ pathname, children }) => {
  return (
    <>
      <Navbar pathname={pathname} />
      <div className="h-screen bg-white pt-12">{children}</div>
    </>
  );
};

export default Layout;
