import { motion } from "motion/react";
import { Activity, CircuitBoard, ShieldCheck, Wrench } from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";

const motherboardServices = [
  {
    icon: CircuitBoard,
    title: "Diagnostic carte mere",
    text: "Recherche de court-circuit, panne de demarrage et verification des lignes principales.",
  },
  {
    icon: Wrench,
    title: "Microsoudure et reprise",
    text: "Intervention sur connecteurs, composants endommages, charge, tactile, affichage ou audio.",
  },
  {
    icon: Activity,
    title: "Degat liquide",
    text: "Nettoyage, stabilisation de la carte et tentative de remise en route apres oxydation.",
  },
  {
    icon: ShieldCheck,
    title: "Tests apres intervention",
    text: "Verification de la charge, du reseau, de l'affichage et des fonctions critiques.",
  },
];

export default function MotherboardSection() {
  return (
    <section id="carte-mere" className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1220px]">
        <div className="motherboard-shell">
          <div className="motherboard-shell__intro">
            <p className="section-kicker">Reparation carte mere</p>
            <h2 className="section-title">
              Diagnostic avance et microsoudure pour les pannes complexes.
            </h2>
            <p className="section-copy">
              Cette section est dediee aux appareils Apple qui ne demarrent plus,
              ne chargent plus ou presentent une panne electronique qui demande
              un travail en profondeur sur la carte mere.
            </p>
            <div className="motherboard-shell__cta">
              <GlassButton href="#contact" intensity="bold">
                Parler d&apos;une panne complexe
              </GlassButton>
            </div>
          </div>

          <div className="motherboard-shell__board">
            <div className="motherboard-shell__visual motherboard-shell__visual--image">
              <img
                src="https://i.ibb.co/HLzZxbVT/etiquette-icone-carte-mere-png-fond-transparent-53876-958103.png"
                alt="Carte mere"
                className="motherboard-shell__image"
              />
              <div className="motherboard-caption">
                <span>Specialite atelier</span>
                <strong>Reparation de carte mere Apple</strong>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="motherboard-diagram"
            >
              {motherboardServices.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="motherboard-step">
                    <div className="motherboard-step__line" />
                    <div className="motherboard-step__icon">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="motherboard-step__content">
                      <span className="motherboard-step__index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
