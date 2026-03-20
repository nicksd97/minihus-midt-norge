import Image from "next/image";
import Link from "next/link";
import { type Model, formatPrice } from "@/lib/data";
import { ArrowRight, Ruler, BadgeCheck } from "lucide-react";

export function ModelCard({ model }: { model: Model }) {
  return (
    <Link
      href={`/modeller/${model.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-card-border bg-card transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={model.imageUrl}
          alt={model.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {model.specs.tek17 && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-foreground">
            <BadgeCheck size={14} />
            TEK17
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-xl tracking-wide">{model.name}</h3>
          <div className="flex items-center gap-1 text-sm text-muted">
            <Ruler size={14} />
            {model.size} {model.sizeUnit}
          </div>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
          {model.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-heading text-lg text-gold">
            {formatPrice(model.price)}
          </span>
          <span className="flex items-center gap-1 text-sm text-foreground/60 transition-colors group-hover:text-gold">
            Se mer <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
