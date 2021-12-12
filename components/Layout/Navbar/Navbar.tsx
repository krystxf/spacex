import Link from 'next/link';
import React from 'react';
import NavbarItem from './NavbarItem';

export const PathnameContext = React.createContext('/');

export type NavbarProps = { pathname: string };

const Navbar: React.FC<NavbarProps> = ({ pathname }) => {
  return (
    <PathnameContext.Provider value={pathname}>
      <nav className="fixed z-30 flex items-center justify-between w-full px-6 bg-black h-12 bottom-auto top-0">
        <span className="flex justify-start gap-2">
          <NavbarItem link="/" text="Launches" />

          <NavbarItem link="/missions" text="Missions" />

          <NavbarItem link="/roadster" text="Roadster" />
        </span>
      </nav>
    </PathnameContext.Provider>
  );
};

export default Navbar;
