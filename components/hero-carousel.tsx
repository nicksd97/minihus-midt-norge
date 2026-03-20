"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: string;
  name: string;
  size: number;
  sizeUnit: string;
  image: string;
}

export function HeroCarousel({ items }: { items: CarouselItem[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const item = items[current];

  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl sm:h-[400px] lg:h-full lg:min-h-[500px]">
      {/* Slides */}
      {items.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Info overlay */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <h3 className="font-heading text-2xl tracking-wide text-white sm:text-3xl">
          {item.name}
        </h3>
        <Link
          href="/kontakt"
          className="shrink-0 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
        >
          Kontakt for pris
        </Link>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white/80 backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Forrige"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white/80 backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Neste"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-1.5 flex justify-center gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current
                ? "w-5 bg-gold"
                : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Gå til slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
