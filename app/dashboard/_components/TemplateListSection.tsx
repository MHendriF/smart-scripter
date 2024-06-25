import React from "react";
import TemplateCard from "./TemplateCard";
import { TemplateProps } from "@/types";
import { Templates } from "@/constants";

export default function TemplateListSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {Templates.map((template: TemplateProps) => (
        <TemplateCard key={template.name} {...template} />
      ))}
    </div>
  );
}
