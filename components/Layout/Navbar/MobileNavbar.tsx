import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { MenuIcon } from "@heroicons/react/outline"
import { Footer } from '../Footer';

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
            <Menu.Items className='w-full max-w-[450px] absolute top-0 right-0 h-screen p-10'>
                <div className="bg-black w-full max-w-xl absolute top-[-2.5vh] right-[-2vw] h-[105vh] -rotate-1 z-20" />
                <div className='absolute z-30 right-20 top-20 flex flex-col justify-between' style={{ height: "calc(100% - 120px)" }}>
                    <div className='flex flex-col font-semibold text-lg'>
                        <MobileNavItem title='launches' link="/" />
                        <MobileNavItem title='missions' link="/missions" />
                        <MobileNavItem title='roadster' link="/roadster" />
                    </div>
                    <Footer />
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