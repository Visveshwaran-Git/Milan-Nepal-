"use client";

import React from "react";
import { menuData } from "@/lib/menuData";

export default function MenuTabs() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Tab buttons — horizontal scroll on mobile */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {menuData.map((category, idx) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(idx)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all min-h-[44px] ${
              activeTab === idx
                ? "bg-gold text-charcoal"
                : "bg-ivory/10 text-ivory/70 hover:bg-ivory/20 hover:text-ivory"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Active category items */}
      <div className="rounded-lg bg-ivory/5 p-6 sm:p-8 backdrop-blur-sm border border-ivory/10">
        <h3 className="font-heading text-2xl font-bold text-gold sm:text-3xl">
          {menuData[activeTab].title}
        </h3>
        {menuData[activeTab].subtitle && (
          <p className="mt-1 text-sm text-ivory/50 italic">
            {menuData[activeTab].subtitle}
          </p>
        )}

        <div className="mt-6 divide-y divide-ivory/10">
          {menuData[activeTab].items.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between gap-4 py-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-heading text-lg font-semibold text-ivory">
                    {item.name}
                  </h4>
                  {item.isVegetarian && (
                    <span className="rounded-full bg-green-800/30 px-2 py-0.5 text-[10px] font-medium text-green-400">
                      V
                    </span>
                  )}
                  {item.isSpicy && (
                    <span className="text-sm" title="Spicy">🌶️</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-ivory/60">{item.description}</p>
              </div>
              <span className="font-heading text-lg font-bold text-gold whitespace-nowrap">
                €{item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
