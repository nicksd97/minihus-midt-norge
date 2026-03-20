import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hammer, Users, MapPin, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Byggefirmaet R. Samdal Snekkeri er autorisert Byggmann-forhandler i Midt-Norge. Vi har lang erfaring med bygging og levering av minihus.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-heading text-5xl tracking-wide sm:text-6xl">
        OM <span className="text-gold">OSS</span>
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Vi er Midt-Norges autoriserte Byggmann-forhandler, drevet av
        Byggefirmaet R. Samdal Snekkeri fra Lundamo.
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl tracking-wide">
            HÅNDVERK OG <span className="text-gold">KVALITET</span>
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-muted leading-relaxed">
            <p>
              Byggefirmaet R. Samdal Snekkeri har lang erfaring innen
              byggfaget. Vi er stolte av å være autorisert Byggmann-forhandler
              av minihus i Midt-Norge.
            </p>
            <p>
              Byggmann designer og bygger minihus tilpasset norske forhold.
              Husene leveres som byggesett eller ferdig montert, og kan
              tilpasses dine behov og ønsker.
            </p>
            <p>
              Vi tilbyr komplett service fra første samtale til ferdig montert
              hus. Enten du ønsker et kompakt småhus eller en fullverdig
              TEK17-godkjent bolig — vi hjelper deg hele veien.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Hammer,
              title: "Erfarne håndverkere",
              desc: "Solid kompetanse innen tømrerfaget og moderne byggemetoder.",
            },
            {
              icon: Award,
              title: "Autorisert forhandler",
              desc: "Offisiell Byggmann-forhandler med full produktkunnskap og support.",
            },
            {
              icon: MapPin,
              title: "Lokalt forankret",
              desc: "Basert på Lundamo i Trøndelag, med levering i hele Midt-Norge.",
            },
            {
              icon: Users,
              title: "Personlig service",
              desc: "Vi tar oss tid til å forstå dine behov og finner den beste løsningen.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-card-border bg-card p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <item.icon size={20} className="text-gold" />
              </div>
              <h3 className="mt-3 font-heading text-lg tracking-wide">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Byggmann section */}
      <section className="mt-24 rounded-2xl border border-card-border bg-card p-8 sm:p-12">
        <h2 className="font-heading text-3xl tracking-wide sm:text-4xl">
          OM <span className="text-gold">BYGGMANN</span>
        </h2>
        <div className="mt-6 flex flex-col gap-4 text-muted leading-relaxed">
          <p>
            Byggmann er en norsk produsent av minihus som designer og bygger
            kompakte boliger og modulhus med fokus på kvalitet, funksjonalitet
            og bærekraft. Alle modeller er utviklet for å tåle norske
            værforhold.
          </p>
          <p>
            Produktutvalget spenner fra kompakte småhus på 12m² til fullverdige
            TEK17-godkjente boliger på opptil 50m², samt tomannsboliger på
            101m². Husene kan leveres som byggesett eller ferdig montert.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/modeller"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-background transition-colors hover:bg-gold-light"
          >
            Utforsk modellene <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
