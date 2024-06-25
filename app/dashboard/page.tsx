import React from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

export default function Dashboard() {
  return (
    <div>
      {/* Search Section */}
      <SearchSection />

      {/* Template List Section */}
      <TemplateListSection />
    </div>
  );
}
