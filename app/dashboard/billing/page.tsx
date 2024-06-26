import { planData } from "@/constants";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import React from "react";

import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";

import PlanItemCard from "./_components/PlanItemCard";

export default function BillingPage() {
  const { user } = useUser();

  const handleSubscription = async () => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      username: user?.fullName,
      active: true,
      paymentId: "1",
      joinDate: moment().format("DD/MM/yyyy"),
    });
    console.log("🚀 ~ file: page.tsx:handleSubscription ~ result:", result);
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl text-center">Upgrade</h2>
      <h2 className="text-center  text-gray-500">Upgrade to monthly plan to access premium features</h2>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          {planData.map((plan, index) => (
            <PlanItemCard plan={plan} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
