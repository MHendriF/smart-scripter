"use client";
import { TemplateProps, TemplateSlugProps } from "@/types";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Templates } from "@/constants";

export default function CreateNewContent(props: TemplateSlugProps) {
  const selectedTemplate: TemplateProps | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
  );

  const generateAIContent = (formData: any) => {};
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {/* Form Section */}
      <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => {}} />

      {/* Output Section */}
      <div className="col-span-2">
        <OutputSection />
      </div>
    </div>
  );
}
