import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { models, getModelById } from "@/lib/data";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Ruler,
  BadgeCheck,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export async function generateStaticParams() {
  return models.map((m) => ({ id: m.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const model = getModelById(id);
  if (!model) return { title: "Modell ikke funnet" };
  return {
    title: model.name,
    description: model.description,
  };
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const model = getModelById(id);
  if (!model) notFound();

  const hasImage = model.images.length > 0;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Link
        href="/modeller"
        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-gold"
      >
        <ArrowLeft size={16} /> Tilbake til modeller
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-card-border bg-card-border">
          {hasImage ? (
            <Image
              src={model.images[0]}
              alt={model.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted">
              <span>Bilde kommer</span>
            </div>
          )}
          {model.specs.tek17 && (
            <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-foreground">
              <BadgeCheck size={16} />
              TEK17 Godkjent
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <span className="text-sm font-medium text-gold">
            {model.categoryLabel}
          </span>
          <h1 className="mt-2 font-heading text-5xl tracking-wide sm:text-6xl">
            {model.name}
          </h1>

          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-muted">
              <Ruler size={18} />
              <span>
                {model.size} {model.sizeUnit}
              </span>
            </div>
            {model.specs.tek17 && (
              <div className="flex items-center gap-1.5 text-primary-light">
                <BadgeCheck size={18} />
                <span>TEK17</span>
              </div>
            )}
          </div>

          <div className="mt-6 font-heading text-3xl text-gold">
            Pris på forespørsel
          </div>

          <p className="mt-6 leading-relaxed text-muted">{model.description}</p>

          {/* Additional images */}
          {model.images.length > 1 && (
            <div className="mt-6 grid grid-cols-3 gap-3">
              {model.images.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-card-border"
                >
                  <Image
                    src={img}
                    alt={`${model.name} bilde ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 16vw"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Features */}
          <div className="mt-8">
            <h2 className="font-heading text-xl tracking-wide">EGENSKAPER</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {model.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-xl border border-card-border bg-card p-6">
            <h3 className="font-heading text-lg tracking-wide">
              INTERESSERT I {model.name.toUpperCase()}?
            </h3>
            <p className="mt-2 text-sm text-muted">
              Ta kontakt med oss for et uforpliktende tilbud tilpasset dine
              behov.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
              >
                Send forespørsel <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+4791330854"
                className="inline-flex items-center gap-2 rounded-lg border border-card-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-gold hover:text-gold"
              >
                <Phone size={16} /> Ring oss
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
