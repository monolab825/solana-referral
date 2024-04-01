'use client'
import React from 'react';
import SidebarItem from './SidebarItem';
import { IoHome } from 'react-icons/io5';
import { LuLineChart } from 'react-icons/lu';
import { TbPackages } from 'react-icons/tb';
import { RiWallet3Fill } from 'react-icons/ri';
import { usePathname } from "next/navigation"

const Sidebar = () => {
    const pathname = usePathname()
    const SideBarItems = [
        { icon: <IoHome />, label: 'HOME', path: '/' },
        { icon: <LuLineChart />, label: 'Referrals Activity', path: '/referral-activity' },
        { icon: <TbPackages />, label: 'Packages', path: (pathname === '/packages/details') ? '/packages/details' : '/packages' },
        { icon: <RiWallet3Fill />, label: 'Credits', path: '/credits' },
    ];
    return (
        <>
            {SideBarItems.map((item, index) =>
                <SidebarItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    active={pathname === item.path}
                />
            )}
        </>
    );
};

export default Sidebar;