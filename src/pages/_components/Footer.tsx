import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Phone, Mail, UserRound, ChevronRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  contactItems,
  excellencePoles,
  locationUrl,
} from "@/lib/zores-content";

const companyLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Nos Poles", href: "#products" },
  { label: "Avantages", href: "#advantages" },
  { label: "Contact", href: "#contact" },
];

const icons = [MapPin, UserRound, Phone, Mail];

export default function Footer() {
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, margin: "-60px" });
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: href });
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="bg-[oklch(0.14_0.02_50)] text-white">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="space-y-5 lg:col-span-1">
              <div className="flex items-center gap-2">
                <div>
                  <div className="font-serif text-lg font-bold leading-none text-white">
                    SARL ZORES
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">
                    Export - Alger
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/55">
                L&apos;excellence de l&apos;agroalimentaire algerien au service
                du monde, avec une offre structuree et une logistique maitrisee.
              </p>
              <a
                href={locationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <MapPin className="h-4 w-4" />
                Voir SARL Zores Export Algerie sur Google Maps
              </a>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
                Nos Poles
              </h4>
              <ul className="space-y-2.5">
                {excellencePoles.map((pole) => (
                  <li key={pole.title}>
                    <button
                      onClick={() => scrollTo("#products")}
                      className="group flex cursor-pointer items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-primary"
                    >
                      <ChevronRight className="h-3 w-3 text-primary/0 transition-colors group-hover:text-primary" />
                      {pole.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
                Entreprise
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="group flex cursor-pointer items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-primary"
                    >
                      <ChevronRight className="h-3 w-3 text-primary/0 transition-colors group-hover:text-primary" />
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/about"
                    className="group flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-3 w-3 text-primary/0 transition-colors group-hover:text-primary" />
                    Lire plus
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
                Contact Commercial
              </h4>
              <div className="space-y-3">
                {contactItems.map((item, index) => {
                  const Icon = icons[index];

                  const card = (
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium uppercase tracking-wide text-white/45">
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-white/90">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href === locationUrl ? "_blank" : undefined}
                      rel={item.href === locationUrl ? "noreferrer" : undefined}
                      className="block"
                    >
                      {card}
                    </a>
                  ) : (
                    <div key={item.label}>{card}</div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/35 sm:flex-row">
          <span>
            (c) {new Date().getFullYear()} SARL Zores Export. Tous droits reserves.
          </span>
          <div className="flex items-center gap-5">
            <span className="cursor-pointer transition-colors hover:text-white/60">
              Politique de confidentialite
            </span>
            <span className="cursor-pointer transition-colors hover:text-white/60">
              Mentions legales
            </span>
            <span className="cursor-pointer transition-colors hover:text-white/60">
              CGV
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
