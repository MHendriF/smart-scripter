"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SelectedTemplateProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

export default function FormSection({ selectedTemplate, userFormInput }: SelectedTemplateProps) {
  const [formData, setFormData] = useState<any>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      <Image src={selectedTemplate?.icon} alt={selectedTemplate?.name} width={70} height={70} />
      <h2 className="font-bold text-2xl text-primary">{selectedTemplate?.name}</h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={handleSubmit}>
        {selectedTemplate?.form?.map((item) => (
          <div className="flex flex-col my-3 gap-2 mb-7" key={item.name}>
            <label htmlFor={item.name} className="text-gray-600 font-medium">
              {item.label}
            </label>
            {item.field === "input" ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : item.field === "textarea" ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : null}
          </div>
        ))}
        <Button className="w-full py-6">Generate Content</Button>
      </form>
    </div>
  );
}
