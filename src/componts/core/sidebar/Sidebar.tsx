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
        { icon: <LuLineChart />, label: 'Referrals Activity', path: '/referrals' },
        { icon: <TbPackages />, label: 'Packages', path: '/packages' },
        { icon: <RiWallet3Fill />, label: 'Credits', path: '/credits' },
    ];
    return (
        <div>
            {SideBarItems.map((item, index) =>
                <SidebarItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    active={pathname === item.path}
                />
            )}
        </div>
    );
};

export default Sidebar;