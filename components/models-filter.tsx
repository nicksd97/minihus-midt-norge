"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const filters = [
  { value: "alle", label: "Alle" },
  { value: "smahus", label: "Småhus" },
  { value: "boliger", label: "Boliger TEK17" },
];

export function ModelsFilter({ active }: { active: string }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Link
          key={filter.value}
          href={
            filter.value === "alle"
              ? "/modeller"
              : `/modeller?kategori=${filter.value}`
          }
          className={cn(
            "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
            active === filter.value
              ? "border-gold bg-gold/10 text-gold"
              : "border-card-border text-muted hover:border-gold/40 hover:text-foreground"
          )}
        >
          {filter.label}
        </Link>
      ))}
    </div>
  );
}
