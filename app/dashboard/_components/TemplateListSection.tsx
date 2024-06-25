import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { TemplateProps } from "@/types";
import { Templates } from "@/constants";

export default function TemplateListSection({ userSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);
  useEffect(() => {
    if (userSearchInput) {
      const filteredTemplates = Templates.filter((item: TemplateProps) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      console.log("🚀 ~ useEffect ~ filteredTemplates:", filteredTemplates);
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((template: TemplateProps) => (
        <TemplateCard key={template.name} {...template} />
      ))}
    </div>
  );
}
