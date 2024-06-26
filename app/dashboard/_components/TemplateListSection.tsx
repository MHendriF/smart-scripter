import TemplateCard from "./TemplateCard";
import { Templates } from "@/constants";
import { TemplateProps } from "@/types";
import React, { useEffect, useState } from "react";

export default function TemplateListSection({ userSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);
  useEffect(() => {
    if (userSearchInput) {
      const filteredTemplates = Templates.filter((item: TemplateProps) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase()),
      );
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
