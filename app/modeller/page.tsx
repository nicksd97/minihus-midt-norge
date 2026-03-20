import { models } from "@/lib/data";
import { ModelCard } from "@/components/model-card";
import { ModelsFilter } from "@/components/models-filter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modeller",
  description:
    "Utforsk vårt komplette utvalg av minihus — fra kompakte småhus til TEK17-godkjente miniboliger.",
};

export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const category = typeof params.kategori === "string" ? params.kategori : "alle";

  const filtered =
    category === "alle"
      ? models
      : models.filter((m) => m.category === category);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-heading text-5xl tracking-wide sm:text-6xl">
        VÅRE <span className="text-gold">MODELLER</span>
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Utforsk vårt komplette utvalg av minihus. Fra kompakte småhus til
        fullverdige TEK17-godkjente boliger.
      </p>

      <ModelsFilter active={category} />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted">
          Ingen modeller funnet i denne kategorien.
        </p>
      )}
    </div>
  );
}
