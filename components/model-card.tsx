import Image from "next/image";
import Link from "next/link";
import { type Model } from "@/lib/data";
import { ArrowRight, Ruler } from "lucide-react";

export function ModelCard({ model }: { model: Model }) {
  const hasImage = model.images.length > 0;

  return (
    <Link
      href={`/modeller/${model.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-card-border bg-card transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-card-border">
        {hasImage ? (
          <Image
            src={model.images[0]}
            alt={model.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted">
            <span className="text-sm">Bilde kommer</span>
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
          <span className="text-sm text-gold">Pris på forespørsel</span>
          <span className="flex items-center gap-1 text-sm text-foreground/60 transition-colors group-hover:text-gold">
            Se mer <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
