"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function HeroCard() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="md:col-span-2 lg:col-span-2 md:row-span-2 p-10 lg:p-12 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
      <div className="space-y-6 text-center md:text-left">
        <span className="inline-block px-3 py-1.5 text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
          {personal.status}
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-neutral-50">
          Saya membuat website yang{" "}
          <span className="italic text-neutral-400">cepat dan mudah digunakan</span>
        </h1>

        <p className="text-neutral-400 text-base leading-relaxed max-w-lg mx-auto md:mx-0">
          {personal.bio}
        </p>
      </div>

      <div className="pt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-neutral-100 text-neutral-900 font-medium hover:bg-white transition-colors"
        >
          Lihat Karya
        </a>
        <button
          onClick={handleCopyEmail}
          className="px-6 py-3 bg-neutral-800 border border-neutral-700 hover:bg-neutral-750 transition-colors font-medium text-neutral-200"
        >
          {copied ? "Email Tersalin" : "Salin Email"}
        </button>
      </div>
    </div>
  );
}