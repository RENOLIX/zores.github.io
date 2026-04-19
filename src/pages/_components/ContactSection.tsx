import { motion } from "motion/react";
import { Clock3, Mail, MapPin, MessageSquareText, Sparkles } from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import { siteConfig } from "@/lib/site";

const contactPoints = [
  {
    icon: MapPin,
    title: "Adresse",
    value: siteConfig.addressLabel,
    href: siteConfig.locationUrl,
  },
  {
    icon: MessageSquareText,
    title: "Telephone",
    value: `${siteConfig.phoneLabel} / ${siteConfig.secondaryPhoneLabel}`,
  },
  {
    icon: Clock3,
    title: "Horaires",
    value: siteConfig.hoursLabel,
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.emailLabel,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-14 md:px-6 md:py-22">
      <div className="contact-splash contact-splash--one" />
      <div className="contact-splash contact-splash--two" />

      <div className="relative mx-auto max-w-[1080px]">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="contact-panel"
        >
          <div className="contact-panel__intro">
            <p className="section-kicker">Contact atelier</p>
            <h2 className="section-title">
              Prenez rendez-vous ou passez directement a l&apos;atelier.
            </h2>
            <p className="section-copy">
              Pour une reparation iPhone, iPad, MacBook, Apple Watch, une carte
              mere ou une recuperation de donnees, contactez iFreedy et
              expliquez votre panne.
            </p>
          </div>

          <div className="contact-panel__points">
            {contactPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div key={point.title} className="contact-point">
                  <div className="contact-point__icon contact-point__icon--plain">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="contact-point__title">{point.title}</p>
                    {point.href ? (
                      <a
                        href={point.href}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-point__value underline decoration-border underline-offset-4"
                      >
                        {point.value}
                      </a>
                    ) : (
                      <p className="contact-point__value">{point.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="contact-glass">
            <div className="contact-glass__inner">
              <div className="contact-glass__header">
                <span className="contact-glass__badge">
                  <Sparkles className="h-3.5 w-3.5" />
                  Demande de prise en charge
                </span>
                <h3>Expliquez votre panne et votre appareil.</h3>
              </div>

              <form className="contact-form-grid">
                <div className="contact-input">
                  <label>Nom</label>
                  <input type="text" placeholder="Votre nom complet" />
                </div>
                <div className="contact-input">
                  <label>Telephone</label>
                  <input type="text" placeholder={siteConfig.phoneLabel} />
                </div>
                <div className="contact-input contact-input--full">
                  <label>Appareil</label>
                  <input
                    type="text"
                    placeholder="Ex: iPhone 15 Pro, MacBook Air M2, iPad Pro..."
                  />
                </div>
                <div className="contact-input contact-input--full">
                  <label>Panne</label>
                  <textarea
                    rows={6}
                    placeholder="Expliquez le probleme: ecran casse, batterie, carte mere, degat liquide, recuperation de donnees..."
                  />
                </div>
                <div className="contact-actions">
                  <GlassButton
                    href={`tel:${siteConfig.phoneLabel.replace(/\s+/g, "")}`}
                    intensity="bold"
                  >
                    Appeler l&apos;atelier
                  </GlassButton>
                  <GlassButton href={siteConfig.locationUrl}>
                    Ouvrir Maps
                  </GlassButton>
                </div>
              </form>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
