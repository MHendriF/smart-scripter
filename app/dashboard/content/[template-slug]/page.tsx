"use client";

import { Templates, limitCredits } from "@/constants";
import { TotalUsageContext } from "@/providers/TotalUsageContext";
import { TemplateProps, TemplateSlugProps } from "@/types";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

import { chatSession } from "@/utils/GeminiAI";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";

import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Button } from "@/components/ui/button";

export default function CreateNewContent(props: TemplateSlugProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [contentResult, setContentResult] = useState<string>("");
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { user } = useUser();
  const router = useRouter();

  const selectedTemplate: TemplateProps | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"],
  );

  const generateAIContent = async (formData: any) => {
    if (totalUsage >= limitCredits) {
      router.push("/dashboard/billing");
      return;
    }
    setIsLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const prompt = JSON.stringify(formData) + ", " + selectedPrompt;
    const result = await chatSession.sendMessage(prompt);

    setContentResult(result?.response.text());
    await saveToDB(JSON.stringify(formData), selectedTemplate?.slug, result?.response.text());
    console.log("🚀 ~ generateAIContent ~ result:", result);
    setIsLoading(false);
  };

  const saveToDB = async (formData: any, slug: any, contentResult: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: contentResult,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/yyyy"),
    });
  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => generateAIContent(v)}
          isLoading={isLoading}
        />

        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection contentResult={contentResult} />
        </div>
      </div>
    </div>
  );
}
