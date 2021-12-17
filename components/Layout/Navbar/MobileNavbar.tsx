import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { MenuIcon } from "@heroicons/react/outline"
import FooterItem from '../Footer/FooterItem';

const MobileNavbar = () => {
    return <Menu as="div" className="block md:hidden">
        <Menu.Button className="absolute block md:hidden right-5 top-2 z-40">
            <MenuIcon className="w-8 h-8 text-white" />
        </Menu.Button>
        <Transition
            as={Fragment}
            enter="transition ease-in-out duration-300"
            enterFrom="transform translate-x-[500px]"
            enterTo="transform scale-100 translate-x-[0]"
            leave="transition ease-in-out duration-300"
            leaveFrom="transform scale-100 translate-x-[0]"
            leaveTo="transform translate-x-[500px]"
        >
            <Menu.Items className='w-full max-w-[250px] absolute top-0 right-0 h-screen p-10 bg-black'>
                <div className='absolute z-30 right-20 top-20 flex flex-col justify-between' style={{ height: "calc(100% - 120px)" }}>
                    <div className='flex flex-col font-semibold text-lg'>
                        <MobileNavItem title='launches' link="/" />
                        <MobileNavItem title='missions' link="/missions" />
                        <MobileNavItem title='roadster' link="/roadster" />
                    </div>
                    <div className="flex gap-8 flex-col text-[12px] font-bold">
                        <FooterItem link="https://www.instagram.com/spacex/" text="instagram" />

                        <FooterItem link="https://twitter.com/spacex" text="twitter" />

                        <FooterItem link="https://www.youtube.com/spacex" text="youtube" />

                        <FooterItem
                            link="https://www.linkedin.com/company/spacex/"
                            text="linkedin"
                        />
                    </div>
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
}

const MobileNavItem: React.FC<{ link: string, title: string }> = ({ link, title }) => {
    return <Link href={link}>
        <a className='text-gray-200 hover:text-white py-5 transition-all duration-500 ease-in-out'>{title.toUpperCase()}</a>
    </Link>
}

export default MobileNavbar