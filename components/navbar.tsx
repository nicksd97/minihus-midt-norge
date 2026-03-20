"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/modeller", label: "Modeller" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex flex-col">
          <span className="font-heading text-2xl leading-none tracking-wide text-gold">
            MINIHUS MIDT-NORGE
          </span>
          <span className="text-[11px] text-muted">
            av R. Samdal Snekkeri
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/kontakt"
              className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
            >
              Få tilbud
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-card-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/kontakt"
                className="inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
                onClick={() => setOpen(false)}
              >
                Få tilbud
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
