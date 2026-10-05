"use client";
import Link from "next/link";
import data from "@/lib/data.json";
import { ProductCard } from "@/components/ProductCard";
import { NicheTool } from "@/components/NicheTool";
import { HeroFilm } from "@/components/HeroFilm";
import type { Product } from "@/lib/types";
import { Marquee } from "@/components/Marquee";
import { StatRow } from "@/components/StatRow";
import { FilmStrip } from "@/components/FilmStrip";
import { Newsletter } from "@/components/Newsletter";
import { MotionReveal } from "@/components/MotionReveal";
import { OfferSpot } from "@/components/OfferSpot";
import { ReviewRail } from "@/components/ReviewRail";
import { FaqBlock } from "@/components/FaqBlock";

const brand = data.brand;
const products = data.products as Product[];

export default function HomePage() {
  return (
    <>
      <Marquee />
      <section className="editorial-spread">
        <div className="relative min-h-[70vh] md:min-h-[100svh]">
          <HeroFilm video={brand.heroVideo} image={brand.heroImage} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#221914] via-[#221914]/55 to-transparent" />
          <div className="relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:min-h-[100svh] md:p-12">
            <h1 className="max-w-xl font-display text-5xl md:text-7xl">{brand.name}</h1>
            <p className="mt-4 max-w-md text-white/80">{brand.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="rounded-full px-5 py-3 text-sm font-semibold text-black" style={{ background: "var(--accent)" }}>Find your sound</Link>
              <Link href="/studio" className="rounded-full border border-white/40 px-5 py-3 text-sm text-white">Studio sessions</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-8 p-6 md:p-10" style={{ background: "var(--surface)" }}>
          <p className="pull-quote">Instruments with liner notes — stories before SKUs.</p>
          <div className="vinyl-ring mx-auto" aria-hidden />
          <NicheTool />
        </div>
      </section>

      <section id="rack" className="overflow-x-auto py-12">
        <p className="editorial-kicker px-4 md:px-6">Horizontal rack · {products.length} instruments</p>
        <div className="mt-4 flex gap-4 px-4 md:px-6">
          {products.slice(0, 10).map((p) => (
            <div key={p.id} className="min-w-[260px] max-w-[280px] shrink-0 border p-2" style={{ borderColor: "var(--border)" }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
      <OfferSpot />
      <StatRow />
      <FilmStrip />
      <ReviewRail />
      <FaqBlock />
      <MotionReveal className="mx-auto max-w-6xl px-4 pb-16 md:px-6"><Newsletter /></MotionReveal>
    </>
  );
}
