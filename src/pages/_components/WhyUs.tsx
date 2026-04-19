import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  ShieldCheck,
  Truck,
  Headphones,
  Award,
  Globe,
  Leaf,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Qualite Certifiee",
    desc: "Tous nos produits sont rigoureusement controles et repondent aux normes alimentaires les plus strictes.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Truck,
    title: "Livraison Fiable",
    desc: "Nous assurons la livraison de vos commandes dans les delais convenus, en toute securite.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Headphones,
    title: "Support Dedie",
    desc: "Notre equipe est disponible pour repondre a vos questions et vous accompagner dans vos commandes.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Award,
    title: "15 Ans d'Expertise",
    desc: "Fort d'une experience solide dans l'export alimentaire depuis Alger, nous connaissons votre marche.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Globe,
    title: "Presence Internationale",
    desc: "Nous exportons vers plusieurs pays avec une logistique maitrisee et des partenaires de confiance.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Leaf,
    title: "Produits Frais",
    desc: "Nos fruits, legumes et produits alimentaires sont sources localement pour garantir la fraicheur.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Pourquoi nous choisir
            </span>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
              L&apos;Excellence au Service de Votre Reussite
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              SARL Zores Export est votre partenaire de confiance base a Alger.
              Nous combinons expertise locale et standards internationaux pour
              vous offrir les meilleurs produits alimentaires et menagers.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Notre engagement: des produits de qualite, des prix competitifs,
              une livraison ponctuelle et un service client irreprochable. Nous
              travaillons avec les meilleurs producteurs pour vous garantir
              fraicheur et excellence a chaque commande.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                <Leaf className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-foreground">
                  SARL Zores Export
                </div>
                <div className="text-sm text-muted-foreground">
                  Alger, Algerie - Fondee en 2009
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${feature.bg}`}
                >
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <h4 className="mb-1 text-sm font-semibold text-foreground">
                  {feature.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
