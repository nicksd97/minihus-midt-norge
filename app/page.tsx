import Image from "next/image";
import Link from "next/link";
import { models, formatPrice } from "@/lib/data";
import { ModelCard } from "@/components/model-card";
import {
  ArrowRight,
  Home,
  Shield,
  Wrench,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
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
    a: "Et minihus er en kompakt bolig, vanligvis mellom 12 og 50 kvadratmeter. Våre FunnBo-minihus leveres som ferdig produserte moduler som monteres på din tomt.",
  },
  {
    q: "Trenger jeg byggetillatelse?",
    a: "For hytter og anneks under 15m² trenger du som regel ikke byggetillatelse, men du må sende byggesøknad. For TEK17-boliger kreves full byggesøknad. Vi hjelper deg med hele prosessen.",
  },
  {
    q: "Hva inkluderer prisen?",
    a: "Prisene inkluderer selve bygget som byggesett. Transport, grunnarbeid, montering og tilkobling til vann/avløp/strøm kommer i tillegg. Vi gir deg et komplett tilbud på forespørsel.",
  },
  {
    q: "Hvor lang er leveringstiden?",
    a: "Leveringstiden varierer fra 8 til 16 uker avhengig av modell og tilpasninger. Kontakt oss for oppdatert leveringstid.",
  },
  {
    q: "Kan minihuset tilpasses?",
    a: "Ja, FunnBo-modellene kan tilpasses med ulike farger, materialer og innvendige løsninger. Vi hjelper deg med å finne den perfekte konfigurasjonen.",
  },
];

const featured = models.filter((m) => m.price !== null).slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_60%)] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
              Autorisert FunnBo-forhandler
            </span>
            <h1 className="mt-6 font-heading text-5xl leading-tight tracking-wide sm:text-7xl">
              DITT NYE{" "}
              <span className="text-gold">MINIHUS</span>
              <br />I MIDT-NORGE
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Vi leverer kvalitets minihus fra FunnBo — fra kompakte hytter og
              anneks til fullverdige TEK17-godkjente boliger. Bygget for norske
              forhold, levert til din tomt.
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

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center font-heading text-4xl tracking-wide sm:text-5xl">
          HVORFOR VELGE <span className="text-gold">OSS</span>
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Home,
              title: "FunnBo Kvalitet",
              desc: "Vi er autorisert forhandler av FunnBo — Norges ledende produsent av minihus. Alle modeller er designet for norske forhold.",
            },
            {
              icon: Shield,
              title: "TEK17 Godkjent",
              desc: "Våre boligmodeller oppfyller alle krav i TEK17, som betyr at de kan brukes som permanent bolig med full byggetillatelse.",
            },
            {
              icon: Wrench,
              title: "Komplett Service",
              desc: "Fra første samtale til nøkkelferdigt hus. Vi bistår med rådgivning, byggesøknad, grunnarbeid og montering.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-card-border bg-card p-8 transition-colors hover:border-gold/30"
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
      </section>

      {/* Featured models */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-4xl tracking-wide sm:text-5xl">
                POPULÆRE <span className="text-gold">MODELLER</span>
              </h2>
              <p className="mt-3 text-muted">
                Utforsk vårt utvalg av minihus fra FunnBo
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
            {featured.map((model) => (
              <ModelCard key={model.id} model={model} />
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
              href="tel:+4791330854"
              className="inline-flex items-center gap-2 text-lg font-medium text-gold"
            >
              <Phone size={20} /> +47 913 30 854
            </a>
            <a
              href="mailto:nick@rsamdalsnekkeri.no"
              className="inline-flex items-center gap-2 text-lg font-medium text-gold"
            >
              <Mail size={20} /> nick@rsamdalsnekkeri.no
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
