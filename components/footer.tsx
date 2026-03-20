import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-card">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-16">
        {/* Prominent logo */}
        <div className="flex justify-center pb-10">
          <Image
            src="/samdal-logo.jpg"
            alt="R. Samdal Snekkeri"
            width={400}
            height={100}
            className="h-auto w-[400px] max-w-[80vw]"
          />
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl tracking-wide text-gold">
              MINIHUS MIDT-NORGE
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Autorisert Byggmann-forhandler i Midt-Norge. Vi hjelper deg med
              drømmen om eget minihus, fra planlegging til ferdig montert bolig.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg tracking-wide text-foreground">
              SIDER
            </h4>
            <ul className="mt-3 flex flex-col gap-2">
              {[
                { href: "/", label: "Hjem" },
                { href: "/modeller", label: "Modeller" },
                { href: "/om-oss", label: "Om oss" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg tracking-wide text-foreground">
              KONTAKT
            </h4>
            <ul className="mt-3 flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  Byggefirmaet R. Samdal Snekkeri
                  <br />
                  Lundamovegen 445, 7232 Lundamo
                </span>
              </li>
              <li>
                <a
                  href="mailto:post@rsamdalsnekkeri.no"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Mail size={16} className="shrink-0 text-gold" />
                  post@rsamdalsnekkeri.no
                </a>
              </li>
              <li>
                <a
                  href="tel:+4791330854"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Phone size={16} className="shrink-0 text-gold" />
                  +47 913 30 854
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-card-border pt-8 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Minihus Midt-Norge / Byggefirmaet
          R. Samdal Snekkeri. Alle rettigheter reservert.
        </div>
      </div>
    </footer>
  );
}
