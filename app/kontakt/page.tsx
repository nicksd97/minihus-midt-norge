import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt Minihus Midt-Norge for et uforpliktende tilbud på minihus. Byggefirmaet R. Samdal Snekkeri, Lundamo.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-heading text-5xl tracking-wide sm:text-6xl">
        KONTAKT <span className="text-gold">OSS</span>
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Ta kontakt for en uforpliktende prat om minihus. Vi svarer gjerne på
        spørsmål og gir deg et tilpasset tilbud.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Contact form */}
        <div className="rounded-xl border border-card-border bg-card p-8">
          <h2 className="font-heading text-2xl tracking-wide">
            SEND EN <span className="text-gold">FORESPØRSEL</span>
          </h2>
          <form className="mt-6 flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none"
                  placeholder="Ditt navn"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none"
                  placeholder="+47 XXX XX XXX"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium"
              >
                E-post
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none"
                placeholder="din@epost.no"
              />
            </div>
            <div>
              <label
                htmlFor="model"
                className="mb-1.5 block text-sm font-medium"
              >
                Interessert i modell
              </label>
              <select
                id="model"
                name="model"
                className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
              >
                <option value="">Velg modell (valgfritt)</option>
                <option value="hagestue-12">Hagestue 12</option>
                <option value="panorama-12">Panorama 12</option>
                <option value="hybel-12">Hybel 12</option>
                <option value="camping-12">Camping 12</option>
                <option value="anneks-12">Anneks 12</option>
                <option value="glamping-14">Glamping 14</option>
                <option value="hybel-15">Hybel 15</option>
                <option value="minibolig-21">Minibolig 21</option>
                <option value="minibolig-30">Minibolig 30</option>
                <option value="minibolig-50-flatt">Minibolig 50 Flatt Tak</option>
                <option value="minibolig-50-saltak">Minibolig 50 Saltak</option>
                <option value="tomanns-50-flatt">Tomanns Minibolig 50 Flatt</option>
                <option value="tomanns-50-saltak">Tomanns Minibolig 50 Saltak</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium"
              >
                Melding
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none"
                placeholder="Fortell oss om dine ønsker og behov..."
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-gold px-6 py-3 font-semibold text-background transition-colors hover:bg-gold-light"
            >
              Send forespørsel
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-8">
          <div className="rounded-xl border border-card-border bg-card p-8">
            <h2 className="font-heading text-2xl tracking-wide">
              KONTAKT<span className="text-gold">INFORMASJON</span>
            </h2>
            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <div className="font-medium">Adresse</div>
                  <div className="text-sm text-muted">
                    Byggefirmaet R. Samdal Snekkeri
                    <br />
                    Lundamovegen 445
                    <br />
                    7232 Lundamo
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <div className="font-medium">E-post</div>
                  <a
                    href="mailto:post@rsamdalsnekkeri.no"
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    post@rsamdalsnekkeri.no
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <div className="font-medium">Telefon</div>
                  <a
                    href="tel:+4791330854"
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    +47 913 30 854
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <div className="font-medium">Åpningstider</div>
                  <div className="text-sm text-muted">
                    Mandag – Fredag: 08:00 – 16:00
                    <br />
                    Etter avtale utenom åpningstid
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Map placeholder */}
          <div className="flex-1 overflow-hidden rounded-xl border border-card-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.0!2d10.3!3d63.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjPCsDA5JzAwLjAiTiAxMMKwMTgnMDAuMCJF!5e0!3m2!1sno!2sno!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kart til Lundamo"
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
