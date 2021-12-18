import Link from 'next/link'
import { useContext } from 'react'
import { PathnameContext } from './Navbar'

export type NavbarItemProps = {
  link: string
  text: string
  hideOnMd?: boolean
  hideOnSm?: boolean
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  link,
  text,
  hideOnMd,
  hideOnSm
}) => {
  const pathnameContext = useContext(PathnameContext)

  return (
    <Link href={link} passHref>
      <a
        className={`space-y-[0.3rem] md:block hidden text-[0.9rem] py-1.5 border-b border-opacity-0 h-full transition-all duration-500 ease-in-out ${hideOnMd ? 'md:hidden' : ''
          }
          ${hideOnSm ? 'hidden md:block' : ''}
          ${pathnameContext === link
            ? 'text-white border-white border-opacity-100'
            : 'text-gray-400 hover:text-white hover:border-white hover:border-opacity-100'
          }`}
      >
        <div className="px-3 h-full font-bold py-1.5">{text.toUpperCase()}</div>
      </a>
    </Link>
  )
}

export default NavbarItem
