import { UserProfile } from "@clerk/nextjs";
import React from "react";

export default function SettingsPage() {
  return (
    <div className="flex items-center justify-center h-full mt-4">
      <UserProfile />
    </div>
  );
}
