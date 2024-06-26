"use client";

import { TotalUsageContext } from "@/providers/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/providers/UpdateCreditUsageContext";
import { UserSubscriptionContext } from "@/providers/UserSubscriptionContext";
import { useState } from "react";

import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>(false);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
        <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
          <div className="bg-slate-100 h-screen">
            <div className="md:w-64 hidden md:block fixed">
              <SideNav />
            </div>
            <div className="md:ml-64">
              <Header />
              {children}
            </div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
}
