"use client";

import { useState } from "react";
import { collectionCards, collectionProducts } from "@/lib/data";
import { SectionHeading } from "./section-heading";

type CollectionId = keyof typeof collectionProducts;

export function CollectionsStrip() {
  const [activeCollection, setActiveCollection] = useState<CollectionId>("men");

  const activeCard =
    collectionCards.find((card) => card.id === activeCollection) ?? collectionCards[0];
  const activeProducts = collectionProducts[activeCollection];

  return (
    <section id="showcase" className="section-shell py-8 sm:py-10">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {collectionCards.map((card, index) => {
          const isActive = card.id === activeCollection;

          return (
            <button
              key={card.label}
              type="button"
              onClick={() => setActiveCollection(card.id as CollectionId)}
              className={`cinematic-panel reveal-up group relative h-[220px] overflow-hidden rounded-[28px] border text-left shadow-[0_30px_80px_rgba(24,24,28,0.14)] transition duration-300 sm:h-[300px] lg:h-[340px] ${
                isActive
                  ? "border-[color:var(--brand)] ring-2 ring-[color:var(--brand)]/20"
                  : "border-white/50"
              } delay-${Math.min(index + 1, 3)}`}
            >
              <img
                src={card.image}
                alt={card.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${card.tint}`} />
              <div className="absolute bottom-5 left-4 right-4 sm:bottom-7 sm:left-6 sm:right-6">
                <span
                  className={`inline-flex rounded-full border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] shadow-sm transition sm:px-4 sm:text-[11px] sm:tracking-[0.18em] ${
                    isActive
                      ? "border-[color:var(--brand)] bg-[color:var(--brand)] text-white"
                      : "border-white/20 bg-white/90 text-[color:var(--brand)]"
                  }`}
                >
                  {card.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="pt-8 sm:pt-12 lg:pt-14">
        <SectionHeading
          eyebrow="Collection Edit"
          title={activeCard.label}
          subtitle={`Showing only ${activeCard.label.toLowerCase()} styles right now.`}
        />

        <div className="mt-8 grid gap-x-4 gap-y-5 sm:mt-10 sm:gap-x-5 sm:gap-y-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-8">
          {activeProducts.map((product, index) => (
            <article
              key={`${activeCollection}-${product.name}`}
              className={`premium-card reveal-up group rounded-[30px] border border-white/60 p-4 shadow-[0_30px_80px_rgba(24,24,28,0.08)] delay-${Math.min(index + 1, 4)}`}
            >
              <div className="relative overflow-hidden rounded-[24px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[240px] lg:h-[255px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-white/10" />
              </div>
              <div className="pt-5 text-center">
                <h3 className="text-[17px] font-semibold tracking-[-0.04em] text-[color:var(--brand)]">
                  {product.name}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-[color:var(--muted)]">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
