import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      <div className="flex flex-row gap-2">
        <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">🔥Join Membership just for $5/Month</h2>
        <UserButton />
      </div>
    </div>
  );
}
