import { motion } from "motion/react";
import { Laptop, Smartphone, Tablet, Watch } from "lucide-react";

const cards = [
  {
    icon: Smartphone,
    title: "Reparation iPhone",
    text: "Ecran, batterie, connecteur de charge, camera, Face ID, haut-parleur et pannes de carte mere sur les modeles iPhone.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    className: "service-card--peach",
  },
  {
    icon: Tablet,
    title: "Reparation iPad",
    text: "Vitre, ecran, batterie, connecteur, tactile, camera et remise en etat sur les differents modeles iPad.",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
    className: "service-card--rose",
  },
  {
    icon: Laptop,
    title: "Reparation MacBook",
    text: "Clavier, ecran, batterie, probleme de charge, SSD, carte mere, degat liquide et recuperation de donnees sur Mac.",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    className: "service-card--violet",
  },
  {
    icon: Watch,
    title: "Reparation Apple Watch",
    text: "Diagnostic, ecran, batterie, probleme de charge et prise en charge des pannes courantes sur Apple Watch.",
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=80",
    className: "service-card--cream",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="px-4 py-10 md:px-6 md:py-18">
      <div className="mx-auto max-w-[1220px]">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker">Nos services</p>
          <h2 className="section-title">
            Reparation dediee aux principaux appareils Apple.
          </h2>
          <p className="section-copy">
            L&apos;atelier prend aussi en charge les AirPods, iMac, Mac mini,
            recuperations de donnees, degats liquides et interventions
            electroniques plus techniques selon la panne.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`service-card ${card.className}`}
              >
                <div className="service-card__image-wrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="service-card__image"
                  />
                </div>
                <div className="service-card__icon">
                  <Icon className="h-5 w-5" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
