"use client";

import { TotalUsageContext } from "@/providers/TotalUsageContext";
import { HistoryProps } from "@/types";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useContext, useEffect, useState } from "react";

import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";

import { Button } from "@/components/ui/button";

export default function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  const getUserUseCredit = async () => {
    // @ts-ignore
    const useCredit: HistoryProps[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    getTotalUsage(useCredit);
  };
  const getTotalUsage = (useCredit: HistoryProps[]) => {
    let total: number = 0;
    useCredit.forEach((item) => {
      total = total + Number(item.aiResponse?.length);
    });
    setTotalUsage(total);
    console.log("🚀 ~ file:  ~ getTotalUsage ~ total:", total);
  };

  useEffect(() => {
    user && getUserUseCredit();
  }, [user]);

  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h2 bg-[#9981f9] w-full rounded-full mt-3">
          <div className="h-2 bg-white rounded-full" style={{ width: `${(totalUsage / 10000) * 100}%` }}></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 credit used</h2>
      </div>
      <Button variant={"secondary"} className="w-full mt-5 text-primary">
        Upgrade
      </Button>
    </div>
  );
}
