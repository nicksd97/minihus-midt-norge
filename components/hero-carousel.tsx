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
    <div className="relative flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-card-border">
        {items.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
          aria-label="Forrige"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
          aria-label="Neste"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Info bar */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="font-heading text-xl tracking-wide">{item.name}</h3>
          <p className="text-sm text-muted">
            {item.size} {item.sizeUnit}
          </p>
        </div>
        <Link
          href={`/kontakt`}
          className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
        >
          Kontakt for pris
        </Link>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-gold" : "w-2 bg-foreground/20"
            }`}
            aria-label={`Gå til slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
