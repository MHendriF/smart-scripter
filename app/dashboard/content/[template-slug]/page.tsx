"use client";
import { TemplateProps, TemplateSlugProps } from "@/types";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Templates } from "@/constants";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateNewContent(props: TemplateSlugProps) {
  const selectedTemplate: TemplateProps | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
  );

  const generateAIContent = (formData: any) => {};
  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => {}} />

        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
}
