import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { excellencePoles } from "@/lib/zores-content";

const poleStyles = [
  { color: "from-green-500/20 to-green-600/5", border: "border-green-200" },
  { color: "from-emerald-500/20 to-emerald-600/5", border: "border-emerald-200" },
  { color: "from-sky-400/20 to-sky-500/5", border: "border-sky-200" },
  { color: "from-orange-400/20 to-orange-500/5", border: "border-orange-200" },
  { color: "from-amber-400/20 to-amber-500/5", border: "border-amber-200" },
];

export default function Categories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Nos 5 Pôles d&apos;Excellence
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Une offre export complète
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De l&apos;avicole aux boissons, nous consolidons plusieurs familles
            de produits dans une même stratégie d&apos;exportation.
          </p>
          <div className="mt-6 w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {excellencePoles.map((pole, i) => {
            const style = poleStyles[i % poleStyles.length];

            return (
              <motion.div
                key={pole.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group rounded-2xl border ${style.border} overflow-hidden bg-gradient-to-br ${style.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={pole.image}
                    alt={pole.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full shadow">
                      {pole.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors capitalize">
                    {pole.title}
                  </h3>
                  <ul className="space-y-2">
                    {pole.points.map((point) => (
                      <li
                        key={point}
                        className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
