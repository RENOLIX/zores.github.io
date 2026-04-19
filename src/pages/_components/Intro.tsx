import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Produits frais livres chaque semaine",
  "Partenaires producteurs certifies",
  "Export vers l'Afrique et le Moyen-Orient",
  "Conditionnement sur mesure disponible",
];

export default function Intro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Qui sommes-nous
            </span>
            <h2 className="mb-6 font-serif text-4xl leading-tight font-bold text-foreground md:text-5xl">
              Votre Source de <br />
              <span className="text-primary">Produits de Qualite</span>
              <br />
              depuis Alger
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              Fondee a Alger, <strong className="text-foreground">SARL Zores Export</strong> est une societe specialisee dans la distribution et l'export de produits alimentaires et menagers. Nous selectionnons rigoureusement chaque reference pour garantir fraicheur, gout et conformite aux normes.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Que vous soyez grossiste, distributeur ou importateur, nous vous
              accompagnons avec des solutions flexibles, des volumes adaptes et
              un service de bout en bout, de la commande a la livraison.
            </p>

            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div
              className="w-full overflow-hidden rounded-3xl shadow-2xl"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src="https://hercules-cdn.com/file_PGp86oNxPKGY1THycXpDdBkc"
                alt="Equipe Zores Export"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 -left-3 flex items-center gap-3 rounded-xl border border-border bg-white p-3 shadow-xl md:-bottom-6 md:-left-6 md:gap-4 md:rounded-2xl md:p-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary md:h-12 md:w-12 md:rounded-xl">
                <span className="font-serif text-base font-bold text-white md:text-xl">
                  15
                </span>
              </div>
              <div>
                <div className="text-xs font-bold text-foreground md:text-sm">
                  Annees d&apos;experience
                </div>
                <div className="text-[10px] text-muted-foreground md:text-xs">
                  dans l&apos;export alimentaire
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
