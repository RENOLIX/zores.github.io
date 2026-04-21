import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { excellencePoles } from "@/lib/zores-content";

const poleStyles = [
  { color: "from-green-500/20 to-green-600/5", border: "border-green-200" },
  { color: "from-emerald-500/20 to-emerald-600/5", border: "border-emerald-200" },
  { color: "from-sky-400/20 to-sky-500/5", border: "border-sky-200" },
  { color: "from-orange-400/20 to-orange-500/5", border: "border-orange-200" },
  { color: "from-amber-400/20 to-amber-500/5", border: "border-amber-200" },
  { color: "from-blue-400/20 to-blue-500/5", border: "border-blue-200" },
];

export default function Categories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: "#contact" });
      return;
    }

    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" ref={ref} className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Nos {excellencePoles.length} poles d&apos;excellence
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Une offre export complete
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            De l&apos;avicole aux detergents, nous consolidons plusieurs
            familles de produits dans une meme strategie d&apos;exportation.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {excellencePoles.map((pole, index) => {
            const style = poleStyles[index % poleStyles.length];

            return (
              <motion.div
                key={pole.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group overflow-hidden rounded-2xl border ${style.border} bg-gradient-to-br ${style.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pole.image}
                    alt={pole.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow backdrop-blur-sm">
                      {pole.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 font-serif text-xl font-bold capitalize text-foreground transition-colors group-hover:text-primary">
                    {pole.title}
                  </h3>
                  <ul className="space-y-2">
                    {pole.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: excellencePoles.length * 0.08 }}
            onClick={scrollToContact}
            className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/40 p-8 text-center transition-all duration-300 hover:border-primary hover:bg-primary/5"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <span className="text-2xl font-bold text-primary">+</span>
            </div>
            <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
              Vous voulez autre chose ?
            </h3>
            <p className="text-sm text-muted-foreground">
              Contactez-nous pour une demande sur mesure, un autre produit ou un
              devis personnalise.
            </p>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
