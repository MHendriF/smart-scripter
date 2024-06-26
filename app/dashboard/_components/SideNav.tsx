"use client";

import UsageTrack from "./UsageTrack";
import { FileLock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function SideNav() {
  const MenuList = [
    { name: "Home", path: "/dashboard", icon: Home },
    { name: "History", path: "/dashboard/history", icon: FileLock },
    { name: "Billing", path: "/dashboard/billing", icon: WalletCards },
    { name: "Setting", path: "/dashboard/setting", icon: Settings },
  ];

  const pathname = usePathname();
  useEffect(() => {}, [pathname]);

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src="/logo.svg" width={70} height={70} alt="logo" />
      </div>
      <hr className="my-3 border" />
      <div className="mt-3">
        {MenuList.map((menu) => (
          <div
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                ${pathname == menu.path && "bg-primary text-white"} `}
            key={menu.name}>
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}
