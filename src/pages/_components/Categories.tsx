import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const categories = [
  {
    name: "Fruits & Legumes",
    description:
      "Produits frais selectionnes rigoureusement, oranges, tomates, poivrons, courgettes et bien plus encore.",
    image: "https://hercules-cdn.com/file_lYqTTJ0VzY29qNyz2JFA9ik5",
    tag: "Frais",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-200",
  },
  {
    name: "Legumes varies",
    description:
      "Une selection premium de legumes locaux: aubergines, carottes, courgettes, piments et plus.",
    image: "https://hercules-cdn.com/file_YkYyvasiCSJkEg0POIDQOSng",
    tag: "Local",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-200",
  },
  {
    name: "Jus & Boissons",
    description:
      "Jus naturels, boissons gazeuses, eaux minerales et nectars, pour tous les gouts.",
    image: "https://hercules-cdn.com/file_vMbhr6bG8A5BEdQmy46s3qCu",
    tag: "Rafraichissant",
    color: "from-orange-400/20 to-orange-500/5",
    border: "border-orange-200",
  },
  {
    name: "Biscuits & Snacks",
    description:
      "Assortiments de biscuits, gateaux secs, gaufrettes et encas pour toute la famille.",
    image: "https://hercules-cdn.com/file_dEc757wNGVnzWx4SVfYih5L6",
    tag: "Gourmand",
    color: "from-amber-400/20 to-amber-500/5",
    border: "border-amber-200",
  },
  {
    name: "Produits Laitiers",
    description:
      "Lait frais, yaourts, fromages et beurre, issus de producteurs de confiance.",
    image: "https://hercules-cdn.com/file_2xmbZ0cQyXSgHghTKIh5v6Ik",
    tag: "Premium",
    color: "from-sky-400/20 to-sky-500/5",
    border: "border-sky-200",
  },
  {
    name: "Poulet & Oeufs",
    description:
      "Volaille fraiche et oeufs de qualite superieure, issus d'elevages selectionnes.",
    image: "https://hercules-cdn.com/file_0wgtOrMlSu2kgkUVQNUTs6rE",
    tag: "Frais",
    color: "from-yellow-400/20 to-yellow-500/5",
    border: "border-yellow-200",
  },
  {
    name: "Produits Menagers",
    description:
      "Detergents, lessives, produits d'entretien et nettoyants, efficaces et certifies.",
    image: "https://hercules-cdn.com/file_nmvjey4J7tzwEUZbg1Rw542B",
    tag: "Hygiene",
    color: "from-blue-400/20 to-blue-500/5",
    border: "border-blue-200",
  },
];

export default function Categories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
            Notre Gamme
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Catalogue de Produits
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Nous distribuons une large selection de produits alimentaires et
            menagers, soigneusement choisis pour repondre aux plus hauts
            standards de qualite.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group cursor-pointer overflow-hidden rounded-2xl border bg-gradient-to-br transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${category.border} ${category.color}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow backdrop-blur-sm">
                    {category.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {category.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: categories.length * 0.08 }}
            className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/40 p-8 text-center transition-all duration-300 hover:border-primary hover:bg-primary/5"
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <span className="text-2xl font-bold text-primary">+</span>
            </div>
            <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
              Besoin d&apos;un produit specifique?
            </h3>
            <p className="text-sm text-muted-foreground">
              Contactez-nous pour un devis personnalise
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
