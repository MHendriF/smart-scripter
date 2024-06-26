"use client";

import { UserSubscriptionContext } from "@/providers/UserSubscriptionContext";
import { useUser } from "@clerk/nextjs";
import { Loader2Icon } from "lucide-react";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";

export default function PlanItemCard(props: any) {
  const { plan } = props;
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

  const handleSubscription = () => {
    setIsLoading(true);
    // axio.post("/api/create-subscription", {}).then(
    //   (resp) => {
    //     console.log(resp.data);
    //     OnPayment(resp.data.id);
    //   },
    //   (error) => {
    //     setIsLoading(false);
    //   },
    // );
  };

  return (
    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">
          {plan.name}
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> {plan.cost}$ </strong>

          <span className="text-sm font-medium text-gray-700">/month</span>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        {plan.offering.map((item: any, index: any) => (
          <li key={index} className="flex items-center gap-1 mb-2">
            <h2 className="text-gray-700">{item.value}</h2>
          </li>
        ))}
      </ul>

      <Button
        disabled={isLoading}
        onClick={() => handleSubscription()}
        className="w-full rounded-full mt-5 p-6"
        variant="outline">
        {isLoading && <Loader2Icon className="animate-spin" />}
        {userSubscription ? "Active Plan" : "Get Started"}
      </Button>

      {/* {plan.isActive ? (
        <a
          href="#"
          className="mt-8 block rounded-full border cursor-not-allowed border-gray-700 bg-gray-600 px-12 py-3 text-center text-sm font-medium text-white">
          Currently Active Plan
        </a>
      ) : (
        <a
          href={plan.paymentLink + "?prefilled_email=" + user?.primaryEmailAddress?.emailAddress}
          target="_blank"
          className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
          Get Started
        </a>
      )} */}
    </div>
  );
}
