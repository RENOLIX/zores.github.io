import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  aboutGallery,
  aboutPreview,
  companyHighlights,
  president,
} from "@/lib/zores-content";

export default function Intro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="overflow-hidden bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              A propos de nous
            </span>
            <h2 className="mb-6 font-serif text-4xl leading-tight font-bold text-foreground md:text-5xl">
              Votre partenaire <br />
              <span className="text-primary">export agroalimentaire</span>
              <br />
              depuis Alger
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              {aboutPreview}
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Sous l&apos;impulsion de {president.name}, nous structurons une
              offre export lisible, serieuse et competitive pour les
              distributeurs, importateurs et partenaires internationaux.
            </p>

            <ul className="mb-8 space-y-3">
              {companyHighlights.map((highlight, index) => (
                <motion.li
                  key={highlight}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  {highlight}
                </motion.li>
              ))}
            </ul>

            <Link to="/about">
              <Button className="h-auto cursor-pointer rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary/90">
                Lire plus
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-3xl shadow-2xl" style={{ aspectRatio: "16/9" }}>
                <img
                  src={aboutGallery[0].src}
                  alt={aboutGallery[0].alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: "4/3" }}>
                <img
                  src={aboutGallery[2].src}
                  alt={aboutGallery[2].alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: "4/3" }}>
                <img
                  src={aboutGallery[4].src}
                  alt={aboutGallery[4].alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="ml-auto mt-4 w-full max-w-[220px] rounded-2xl border border-border bg-white p-3 shadow-xl md:absolute md:-bottom-7 md:-left-6 md:mt-0 md:max-w-sm md:p-5"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary md:h-11 md:w-11">
                  <BadgeCheck className="h-5 w-5 text-white md:h-6 md:w-6" />
                </div>
                <div>
                  <div className="font-serif text-sm font-bold leading-tight text-foreground md:text-lg">
                    {president.name}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-primary md:text-xs md:tracking-[0.22em]">
                    {president.title}
                  </div>
                  <p className="mt-2 text-[11px] leading-5 text-muted-foreground md:text-xs md:leading-6">
                    Direction strategique de la societe et pilotage du
                    developpement export.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-6 -right-6 -z-10 h-28 w-28 rounded-full bg-primary/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
