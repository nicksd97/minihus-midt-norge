import Link from "next/link";
import Image from "next/image";
import { models } from "@/lib/data";
import { HeroCarousel } from "@/components/hero-carousel";
import {
  ArrowRight,
  Home,
  Shield,
  Wrench,
  ChevronDown,
  Phone,
  Mail,
  Ruler,
} from "lucide-react";

const stats = [
  { value: "13+", label: "Modeller" },
  { value: "12–101", label: "Kvadratmeter" },
  { value: "TEK17", label: "Godkjent" },
  { value: "100%", label: "Norsk kvalitet" },
];

const faqs = [
  {
    q: "Hva er et minihus?",
    a: "Et minihus er en kompakt bolig, vanligvis mellom 12 og 50 kvadratmeter. Våre minihus leveres som ferdig produserte moduler som monteres på din tomt.",
  },
  {
    q: "Trenger jeg byggetillatelse?",
    a: "For minihus under 15m² trenger du som regel ikke byggetillatelse, men du må sende byggesøknad. For TEK17-boliger kreves full byggesøknad. Vi hjelper deg med hele prosessen.",
  },
  {
    q: "Hva inkluderer prisen?",
    a: "Kontakt oss for et komplett tilbud tilpasset dine behov. Vi gir deg en detaljert oversikt over hva som er inkludert for den modellen du er interessert i.",
  },
  {
    q: "Hvor lang er leveringstiden?",
    a: "Leveringstiden varierer fra 8 til 16 uker avhengig av modell og tilpasninger. Kontakt oss for oppdatert leveringstid.",
  },
  {
    q: "Kan minihuset tilpasses?",
    a: "Ja, modellene kan tilpasses med ulike farger, materialer og innvendige løsninger. Vi hjelper deg med å finne den perfekte konfigurasjonen.",
  },
];

const carouselItems = models
  .filter((m) => m.images.length > 0)
  .slice(0, 5)
  .map((m) => ({
    id: m.id,
    name: m.name,
    size: m.size,
    sizeUnit: m.sizeUnit,
    image: m.images[0],
  }));

const popularModels = models.filter((m) => m.images.length > 0).slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_60%)] opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
          {/* Left: text */}
          <div className="flex flex-col justify-center">
            <span className="inline-block w-fit rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
              Autorisert Byggmann-forhandler
            </span>
            <h1 className="mt-6 font-heading text-5xl leading-tight tracking-wide sm:text-7xl">
              DITT NYE{" "}
              <span className="text-gold">MINIHUS</span>
              <br />I MIDT-NORGE
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Vi leverer kvalitets minihus — fra kompakte småhus til fullverdige
              TEK17-godkjente boliger. Bygget for norske forhold, levert til din
              tomt.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/modeller"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-background transition-colors hover:bg-gold-light"
              >
                Se alle modeller <ArrowRight size={18} />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-6 py-3 font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                Kontakt oss
              </Link>
            </div>
          </div>

          {/* Right: carousel */}
          <div className="flex items-center">
            <HeroCarousel items={carouselItems} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-card-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-4xl text-gold">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular models grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-heading text-4xl tracking-wide sm:text-5xl">
              POPULÆRE <span className="text-gold">MODELLER</span>
            </h2>
            <p className="mt-3 text-muted">
              Utforsk vårt utvalg av minihus og modulboliger
            </p>
          </div>
          <Link
            href="/modeller"
            className="hidden items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light md:flex"
          >
            Se alle <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularModels.map((model) => (
            <div
              key={model.id}
              className="group overflow-hidden rounded-xl border border-card-border bg-card transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
            >
              <Link href={`/modeller/${model.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={model.images[0]}
                    alt={model.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {model.specs.tek17 && (
                    <div className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-foreground">
                      TEK17
                    </div>
                  )}
                </div>
              </Link>
              <div className="p-5">
                <Link href={`/modeller/${model.id}`}>
                  <h3 className="font-heading text-xl tracking-wide group-hover:text-gold transition-colors">
                    {model.name}
                  </h3>
                </Link>
                <div className="mt-2 flex items-center gap-3 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <Ruler size={14} />
                    BRA {model.size} {model.sizeUnit}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={`/modeller/${model.id}`}
                    className="text-sm font-medium text-gold transition-colors hover:text-gold-light"
                  >
                    Se modell
                  </Link>
                  <Link
                    href="/kontakt"
                    className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
                  >
                    Kontakt oss
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/modeller"
            className="inline-flex items-center gap-1 text-sm font-medium text-gold"
          >
            Se alle modeller <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-heading text-4xl tracking-wide sm:text-5xl">
            HVORFOR VELGE <span className="text-gold">OSS</span>
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Byggmann Kvalitet",
                desc: "Vi er autorisert Byggmann-forhandler. Alle modeller er designet og bygget for norske forhold.",
              },
              {
                icon: Shield,
                title: "TEK17 Godkjent",
                desc: "Våre boligmodeller oppfyller alle krav i TEK17, som betyr at de kan brukes som permanent bolig med full byggetillatelse.",
              },
              {
                icon: Wrench,
                title: "Komplett Service",
                desc: "Fra første samtale til nøkkelferdig hus. Vi bistår med rådgivning, byggesøknad, grunnarbeid og montering.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-card-border bg-background p-8 transition-colors hover:border-gold/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h3 className="mt-4 font-heading text-xl tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center font-heading text-4xl tracking-wide sm:text-5xl">
          OFTE STILTE <span className="text-gold">SPØRSMÅL</span>
        </h2>
        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-card-border bg-card"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-medium">
                {faq.q}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-muted transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed text-muted">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA / Contact preview */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="font-heading text-4xl tracking-wide text-foreground sm:text-5xl">
            KLAR FOR DITT EGET <span className="text-gold">MINIHUS</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Ta kontakt med oss for en uforpliktende prat om dine behov og
            ønsker. Vi hjelper deg å finne den perfekte løsningen.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+4791330864"
              className="inline-flex items-center gap-2 text-lg font-medium text-gold"
            >
              <Phone size={20} /> +47 913 30 864
            </a>
            <a
              href="mailto:post@rsamdalsnekkeri.no"
              className="inline-flex items-center gap-2 text-lg font-medium text-gold"
            >
              <Mail size={20} /> post@rsamdalsnekkeri.no
            </a>
          </div>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 font-semibold text-background transition-colors hover:bg-gold-light"
            >
              Send forespørsel <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
