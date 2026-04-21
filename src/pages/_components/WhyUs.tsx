import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ShieldCheck, Truck, PackageCheck, Globe, Leaf, Award } from "lucide-react";
import { competitiveAdvantages } from "@/lib/zores-content";

const icons = [ShieldCheck, Truck, PackageCheck, Globe, Leaf, Award];
const styles = [
  { color: "text-green-600", bg: "bg-green-50" },
  { color: "text-blue-600", bg: "bg-blue-50" },
  { color: "text-orange-600", bg: "bg-orange-50" },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="advantages" ref={ref} className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Nos avantages compétitifs
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Un partenaire fiable pour vos marchés
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Basés à Alger, nous combinons maîtrise opérationnelle, conformité
              sanitaire et pilotage logistique pour servir les marchés
              internationaux avec régularité.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Notre approche met l&apos;accent sur la qualité certifiée, la
              réactivité des flux et un guichet unique capable de consolider
              plusieurs familles de produits dans une même expédition.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-foreground">SARL Zores Export</div>
                <div className="text-muted-foreground text-sm">Alger, Algérie — Export agroalimentaire</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {competitiveAdvantages.map((item, i) => {
              const Icon = icons[i % icons.length];
              const style = styles[i % styles.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`w-10 h-10 ${style.bg} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${style.color}`} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm capitalize">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
