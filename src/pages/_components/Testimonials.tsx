import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Karim Benali",
    role: "Directeur, Supermarche Alger Centre",
    content:
      "SARL Zores Export est notre fournisseur depuis 3 ans. La qualite des produits est constante et les delais de livraison sont toujours respectes. Excellente collaboration.",
    stars: 5,
    initials: "KB",
    color: "bg-green-500",
  },
  {
    name: "Fatima Mansouri",
    role: "Gerante, Epicerie Bab El Oued",
    content:
      "Je recommande vivement cette societe. Les fruits et legumes sont toujours frais, le service client tres reactif et les prix sont tres competitifs sur le marche.",
    stars: 5,
    initials: "FM",
    color: "bg-primary",
  },
  {
    name: "Omar Cherif",
    role: "Responsable Import, Dubai",
    content:
      "Nous importons les produits de Zores Export depuis 2 ans. Fiabilite, qualite et professionnalisme sont au rendez-vous. Partenaire de confiance pour nos marches.",
    stars: 5,
    initials: "OC",
    color: "bg-amber-500",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Temoignages
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Ce que disent nos clients
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${testimonial.color}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
