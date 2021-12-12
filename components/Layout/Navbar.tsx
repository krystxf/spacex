import Link from "next/link";
import React from "react";

export const PathnameContext = React.createContext("/");

export type NavbarProps = { pathname: string };

const Navbar: React.FC<NavbarProps> = ({ pathname }) => {
  return (
    <PathnameContext.Provider value={pathname}>
      <nav className="fixed z-30 flex items-center justify-between w-full px-6 text-black bg-white border-gray-200 shadow-sm border-b h-12 bottom-auto top-0">
        <span className="flex justify-start gap-2">
          <NavbarItem link="/" text="Launches" />

          <NavbarItem link="/missions" text="Missions" />

          <NavbarItem link="/roadster" text="Roadster" />
        </span>
      </nav>
    </PathnameContext.Provider>
  );
};

type NavbarItemProps = {
  link: string;
  text: string;
  hideOnMd?: boolean;
  hideOnSm?: boolean;
};

const NavbarItem: React.FC<NavbarItemProps> = ({
  link,
  text,
  hideOnMd,
  hideOnSm,
}) => {
  const pathnameContext = React.useContext(PathnameContext);

  return (
    <Link href={link} passHref>
      <a
        className={`space-y-[0.3rem] text-[0.9rem] py-1.5 border-b border-opacity-0 h-full ${
          hideOnMd ? "md:hidden" : ""
        }
        ${hideOnSm ? "hidden md:block" : ""}
        ${
          pathnameContext === link
            ? "text-primary border-primary border-opacity-100"
            : "text-gray-500 hover:text-primary hover:border-primary hover:border-opacity-100"
        }`}
      >
        <div className="px-3 h-full font-semibold py-1.5">{text}</div>
      </a>
    </Link>
  );
};

export default Navbar;
