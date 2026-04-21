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
    <section id="about" ref={ref} className="bg-background py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              A propos de nous
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Votre partenaire <br />
              <span className="text-primary">export agroalimentaire</span>
              <br />
              depuis Alger
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              {aboutPreview}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sous l&apos;impulsion de {president.name}, nous structurons une
              offre export lisible, serieuse et competitive pour les
              distributeurs, importateurs et partenaires internationaux.
            </p>

            <ul className="space-y-3 mb-8">
              {companyHighlights.map((highlight, index) => (
                <motion.li
                  key={highlight}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3 text-foreground font-medium text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {highlight}
                </motion.li>
              ))}
            </ul>

            <Link to="/about">
              <Button className="cursor-pointer bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3 h-auto rounded-full shadow-lg shadow-primary/30">
                Lire plus
                <ArrowRight className="w-4 h-4" />
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
              <div className="col-span-2 rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
                <img
                  src={aboutGallery[0].src}
                  alt={aboutGallery[0].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
                <img
                  src={aboutGallery[2].src}
                  alt={aboutGallery[2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
                <img
                  src={aboutGallery[4].src}
                  alt={aboutGallery[4].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-5 -left-3 md:-bottom-7 md:-left-6 bg-white rounded-2xl shadow-xl border border-border p-4 md:p-5 flex items-start gap-4 max-w-sm"
            >
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <BadgeCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-serif font-bold text-foreground text-lg leading-tight">
                  {president.name}
                </div>
                <div className="text-primary text-xs uppercase tracking-[0.22em] mt-1">
                  {president.title}
                </div>
                <p className="text-muted-foreground text-xs leading-6 mt-2">
                  Direction strategique de la societe et pilotage du
                  developpement export.
                </p>
              </div>
            </motion.div>

            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-primary/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
