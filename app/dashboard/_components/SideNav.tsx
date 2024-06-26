"use client";

import UsageTrack from "./UsageTrack";
import { navbarList } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function SideNav() {
  const pathname = usePathname();
  useEffect(() => {}, [pathname]);

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src="/logo.svg" width={70} height={70} alt="logo" />
      </div>
      <hr className="my-3 border" />
      <div className="mt-3">
        {navbarList.map((item) => (
          <Link href={item.path} key={item.name}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                ${pathname == item.path && "bg-primary text-white"} `}>
              <item.icon className="h-6 w-6" />
              <h2 className="text-lg">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}
