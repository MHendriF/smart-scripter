"use client";
import { TemplateProps, TemplateSlugProps } from "@/types";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Templates } from "@/constants";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/GeminiAI";

export default function CreateNewContent(props: TemplateSlugProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [contentResult, setContentResult] = useState<string>("");
  const selectedTemplate: TemplateProps | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
  );

  const generateAIContent = async (formData: any) => {
    setIsLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    console.log("🚀 ~ generateAIContent ~ selectedPrompt:", selectedPrompt);

    const prompt = JSON.stringify(formData) + ", " + selectedPrompt;
    const result = await chatSession.sendMessage(prompt);
    setContentResult(result?.response.text());
    console.log("🚀 ~ generateAIContent ~ result:", result);
    setIsLoading(false);
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
