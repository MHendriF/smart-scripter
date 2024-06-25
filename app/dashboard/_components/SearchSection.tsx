import { Search } from "lucide-react";
import React from "react";

export default function SearchSection({ onSearchInput }: any) {
  return (
    <div className="flex flex-col p-10 bg-gradient-to-br from-purple-700 via-purple-700 to-blue-600 justify-center items-center text-white">
      <h2 className="text-3xl font-bold">Browse All Search</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 p-2 border items-center rounded-md bg-white my-5 w-[40%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full outline-none text-primary"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
