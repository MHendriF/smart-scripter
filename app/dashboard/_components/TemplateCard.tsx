import { TemplateProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TemplateCard(item: TemplateProps) {
  return (
    <Link href={`/dashboard/content/${item?.slug}`}>
      <div className="p-5 h-[32vh] shadow-md border rounded-md bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
}
